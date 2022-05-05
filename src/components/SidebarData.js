import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";

import * as IoIcons from "react-icons/io";
import { NavText } from "../components/style/NavbarStyled";
export const SidebarData = [
  {
    title: "Home",
    path: "/",
    icon: <AiIcons.AiFillHome />,
  },
  {
    title: "Admin",
    path: "/case",
    icon: <IoIcons.IoIosPaper />,
  },
];
