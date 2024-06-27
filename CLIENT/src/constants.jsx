import { IoHome, IoCreateOutline } from "react-icons/io5";
import { FaRegCompass } from "react-icons/fa";
import { CiHeart, CiSettings } from "react-icons/ci";

export const links = [
  {
    icon: <IoHome />,
    title: "Home",
    path: "/",
  },
  {
    icon: <IoCreateOutline />,
    title: "Create",
    path: "/create",
  },
  {
    icon: <FaRegCompass />,
    title: "Explore",
    path: "/explore",
  },
  {
    icon: <CiHeart />,
    title: "Favorites",
    path: "/fav",
  },
  {
    icon: <CiSettings />,
    title: "Help",
    path: "/help",
  },
];
