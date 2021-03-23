import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const SidebarData = [
  { // per each side bar item !!!1
    title: "Home",
    path: "/Home",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text"
  },
  {
    title: "Reports",
    path: "/reports",
    icon: <IoIcons.IoIosPaper />,
    cName: "nav-text"
  },
  {
    title: "Products",
    path: "/products",
    icon: <FaIcons.FaCartPlus />,
    cName: "nav-text"
  }
]