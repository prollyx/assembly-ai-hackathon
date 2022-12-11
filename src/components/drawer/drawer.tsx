import { Logout } from "@mui/icons-material";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { FC } from "react";
import logo from "../../../assets/logo.png";
import { useProjectContext } from "../../context/project.provider";
import { DrawerLink } from "./drawer-link";

const Drawer: FC = () => {
  const { activeProject } = useProjectContext();

  const activeProjectId = activeProject?.id;

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

          <div className="my-20">
            <p className="drawer-section-title">Features</p>
            <DrawerLink
              href={`/projects/${activeProjectId}`}
              label="View All Features"
            />
            {/* <DrawerLink
            href={`/projects/${activeProjectId}/features/create`}
            label="Create Feature"
          /> */}
          </div>
        </div>

        <div className="mb-10">
          <span className="flex text-red-700 hover:text-red-500 font-bold  cursor-pointer">
            <Link href="/api/auth/logout">
              <p className="mr-2 text-red-700 hover:text-red-500">Logout</p>
            </Link>
            <Logout />
          </span>
        </div>
      </div>
    </div>
  );
};

export { Drawer };
