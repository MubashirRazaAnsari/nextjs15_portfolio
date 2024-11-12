"use client";

import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { FaHome } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";
import { FaPeopleGroup } from "react-icons/fa6";
import { FaInfoCircle } from "react-icons/fa";
import Experience from "@/components/Experience";
import Approach from "@/components/Approach";
import Footer from "@/components/Footer";

import dynamic from "next/dynamic";


const RecentProject = dynamic(() => import("@/components/RecentProject"), {
  ssr: false,
});

const Grid = dynamic(() => import("@/components/Grid"), {
  ssr: false,
});



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
