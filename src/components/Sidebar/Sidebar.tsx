import Link from "next/link";
import { CiLogin } from "react-icons/ci";
import { FaHome } from "react-icons/fa";
import { FaBlog, FaColonSign } from "react-icons/fa6";
import { MdArticle, MdTravelExplore } from "react-icons/md";
import { SlSettings } from "react-icons/sl";
const Sidebar = () => {
  return (
    <aside className="bg-gray-800 flex flex-col w-60 h-screen fixed top-0 left-0 z-0 py-5 px-10">
      <h1 className="pb-10 font-bold text-2xl">Dashboard</h1>
      <ul className="flex flex-col gap-y-8">
        <Link className="flex items-center gap-x-2" href={"/dashboard"}>
          {" "}
          <FaHome /> <span>Home</span>
        </Link>
        <Link
          className="flex items-center gap-x-2"
          href={"/dashboard/articles"}
        >
          {" "}
          <MdArticle /> <span>Articles</span>
        </Link>
        <Link className="flex items-center gap-x-2" href={"/dashboard"}>
          {" "}
          <FaBlog /> <span>Blogs</span>
        </Link>

        <Link className="flex items-center gap-x-2" href={"/dashboard"}>
          {" "}
          <MdTravelExplore /> <span>Travels</span>
        </Link>
        <Link className="flex items-center gap-x-2" href={"/dashboard"}>
          {" "}
          <MdTravelExplore /> <span>Travels</span>
        </Link>
        <Link className="flex items-center gap-x-2" href={"/dashboard"}>
          {" "}
          <MdTravelExplore /> <span>Travels</span>
        </Link>
      </ul>
    </aside>
  );
};

export default Sidebar;
