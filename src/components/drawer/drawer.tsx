import { Logout } from "@mui/icons-material";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { FC } from "react";
import logo from "../../../assets/logo.png";
import { useProjectContext } from "../../context/project.provider";
import { DrawerLink } from "./drawer-link";

const Drawer: FC = () => {
  const { activeProject, activeFeature } = useProjectContext();

  const activeProjectId = activeProject?.id;

  const activeFeatureId = activeFeature?.id;

  const creatFetureDetailsRoute = (path: string) => {
    return `/projects/${activeProjectId}/feature/${activeFeatureId}/${path}`;
  };

  return (
    <div className="drawer">
      <div>
        <Image src={logo} alt="logo" height={30} />
      </div>
      <div className="flex-1 flex flex-col justify-between">
        <div>
          <div className="my-20">
            <p className="drawer-section-title">Projects</p>
            <DrawerLink href="/projects" label="View All Projects" />
            <DrawerLink href="/projects/create" label="Create Project" />
          </div>

          {activeProjectId && (
            <div className="my-20">
              <p className="drawer-section-title">Features</p>
              <DrawerLink
                href={`/projects/${activeProjectId}`}
                label="View All Features"
              />
            </div>
          )}

          {activeFeatureId && (
            <div className="my-20">
              <p className="drawer-section-title">Feature Details</p>
              <DrawerLink
                label="Requirements"
                href={creatFetureDetailsRoute("requirements")}
              />
              <DrawerLink
                label="Test Cases"
                href={creatFetureDetailsRoute("test-cases")}
              />
              <DrawerLink
                label="User Stories"
                href={creatFetureDetailsRoute("user-stories")}
              />
              <DrawerLink
                label="Accpetance Criteria"
                href={creatFetureDetailsRoute("acceptance-criteria")}
              />
            </div>
          )}
        </div>
        <div className="mb-10">
          <Link href="/api/auth/logout">
            <span className="flex text-red-700 hover:text-red-500 font-bold  cursor-pointer">
              <p className="mr-2 text-red-700 hover:text-red-500">Logout</p>
              <Logout />
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export { Drawer };
