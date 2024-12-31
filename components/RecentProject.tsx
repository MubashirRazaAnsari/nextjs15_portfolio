"use client";

import React, { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
import { FaLocationArrow } from 'react-icons/fa6'
import { getRecentProjects, urlFor } from '@/lib/utils'
import Link from 'next/link';

const PinContainer = dynamic(
    () => import("./ui/3d-pin").then((mod) => mod.PinContainer),
    { ssr: false }
); 

type Technology = {
  _id: string;
  name: string;
  icon: any;
}

type Project = {
  _id: string;
  title: string;
  description: string;
  image: any;
  technologies: Technology[];
  githubUrl: string;
  deployedUrl: string;
}

const RecentProject = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const data = await getRecentProjects();
        setProjects(data);
      } catch (err) {
        setError("Failed to fetch projects");
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchProjects();
  }, []);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className='py-20' id='projects'>
      <h1 className='heading'>
        A small selection of {''}
        <span className="text-purple">Recent Projects</span>
      </h1>
      <div className='flex flex-wrap items-center justify-center p-4 gap-16 mt-10'>
        {projects.map((project) => (
          <div key={project._id} className='sm:h-[30rem] lg:min-h-[32.5rem] flex items-center justify-center sm:w-[570px] w-[60vw]'>
            <PinContainer title={project.githubUrl} href={project.githubUrl}>
              <div className='relative flex items-center justify-center sm:w-[570px] w-[60vw] overflow-hidden sm:h[40vh] h-[20vh] lg:h-[30vh] mb-10'>
                <div className='relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162d]'>
                  <img src="/bg.png" alt="bg-img" />
                </div>
                <img 
                  src={urlFor(project.image).url()} 
                  alt={project.title} 
                  className='z-10 absolute bottom-0'
                />
              </div>
              <h1 className='font-bold lg:text-2xl md:text-xl text-base line-clamp-1'>
                {project.title}
              </h1>
              <p className='lg:text-xl lg:font-normal font-light text-sm line-clamp-2'>
                {project.description}
              </p>
              <div className='flex items-center justify-between mt-7 mb-3'>
                <div className='flex items-center'>
                  {project.technologies.map((tech, index) => (
                    <div 
                      key={tech._id} 
                      className='border border-white/[0.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center'
                      style={{transform: `translateX(-${5 * index * 2}px)`}}
                    >
                      <img 
                        src={urlFor(tech.icon).url()} 
                        alt={tech.name} 
                        className='p-2'
                      />
                    </div>
                  ))}
                </div>
                <div className='flex justify-center items-center'>
                  <p className='flex lg:text-xl md:text-xs text-sm text-purple'>
                    <Link href={project.deployedUrl} target='_blank' className='flex items-center'>
                     Live App
                      <FaLocationArrow className='ms-3' color='#CBACF9' />
                    </Link>
                  </p>
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProject;