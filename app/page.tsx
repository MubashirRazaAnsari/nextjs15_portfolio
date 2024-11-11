import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import RecentProject from "@/components/RecentProject";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { IoMdContact } from "react-icons/io";
import { FaHome } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";
import { FaPeopleGroup } from "react-icons/fa6";
import { FaInfoCircle } from "react-icons/fa";
import Experience from "@/components/Experience";
import Approach from "@/components/Approach";
import Footer from "@/components/Footer";




export default function Home() {
  const navItems = [
    { name: "Home", link: "#home" , icon: <FaHome /> },
    { name: "About", link: "#about" , icon:<FaInfoCircle /> },
    { name: "Projects", link: "#projects" , icon : <CgWebsite />
    },
    { name: "Contact", link: "#contact", icon: <FaPeopleGroup /> },
  ];
  
  return (
    
    <div className="relative bg-black-100 flex justify-center items-center flex-col overflow-clip mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems}/>
        <Hero />
        <Grid />
        <RecentProject />
        <Experience />
        <Approach />
        <Footer />
      </div>
    </div>
  );
}
