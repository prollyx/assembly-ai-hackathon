import { Feature, Project } from "@prisma/client";
import axios from "axios";
import { useRouter } from "next/router";
import React, {
  createContext,
  FC,
  PropsWithChildren,
  useEffect,
  useState,
} from "react";
import { useNotification } from "./notification.provider";

interface ProjectContext {
  activeProject: Project;
  setActiveProject: (project: Project) => void;
  activeFeature: Feature;
  setActiveFeature: (feature: Feature) => void;
}

// @ts-ignore
const projectContext = createContext<ProjectContext>(undefined);

const ProjectProvider: FC<PropsWithChildren> = ({ children }) => {
  const [activeProject, setActiveProject] = useState<Project>();
  const [activeFeature, setActiveFeature] = useState<Feature>();

  const { query } = useRouter();

  const projectId = query.id as string;

  const { showErrorNotification } = useNotification();

  const getActiveProject = (id: string) => {
    axios(`/api/projects/${id}`)
      .then((res) => setActiveProject(res.data))
      .catch((e) => showErrorNotification(e.message));
  };

  useEffect(() => {
    if (projectId) {
      getActiveProject(projectId);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [projectId]);

  const value = {
    activeProject,
    setActiveProject,
    activeFeature,
    setActiveFeature,
  };

  return (
    // @ts-ignore
    <projectContext.Provider value={value}>{children}</projectContext.Provider>
  );
};

const useProjectContext = () => {
  const context = React.useContext(projectContext);
  if (context === undefined) {
    throw new Error("useProjectContext must be used within a ProjectProvider");
  }
  return context;
};

export { ProjectProvider, useProjectContext };
