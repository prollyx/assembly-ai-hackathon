import { Logout } from "@mui/icons-material";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { FC } from "react";
import logo from "../../../assets/logo.png";
import { DrawerLink } from "./drawer-link";

const Drawer: FC = () => {
  const { pathname } = useRouter();

  return (
    <div className="drawer">
      <div>
        <Image src={logo} alt="logo" height={30} />
      </div>
      <div className="flex-1 flex flex-col justify-between">
        <div>

        <div className="my-20">
          <p className="drawer-section-title">Projects</p>
          <DrawerLink
            currentPath={pathname}
            href="/projects"
            label="View All Projects"
            path="/projects"
          />
          <DrawerLink
            currentPath={pathname}
            href="/projects/create"
            label="Create Project"
            path="/projects/create"
          />
        </div>

        <div className="my-20">
          <p className="drawer-section-title">Features</p>
          <DrawerLink
            currentPath={pathname}
            href="/projects"
            label="View All Features"
            path="/projects"
          />
          <DrawerLink
            currentPath={pathname}
            href="/projects/create"
            label="Create Feature"
            path="/projects/create"
          />
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
