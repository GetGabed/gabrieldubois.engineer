import React from 'react'
import Link from 'next/link'
import { ProjectCard } from './ui/project-card'
import { DATA } from '../data/resume'
import {IconArrowNarrowRight} from "@tabler/icons-react"

function Projects() {
  return (
    <div className='mt-12 mb-20'>
        <h1 className='text-2xl mb-4'>Debug Diaries (Projects)</h1>
        <div className='flex gap-2'>
            {DATA.projects.slice(0, 2).map((project) => (
              <ProjectCard
                href={project.href}
                key={project.title}
                title={project.title}
                description={project.description}
                image={project.image}
                video={project.video}
                links={project.links}
              /> 
            ))}
        </div>
        <Link className="flex gap-0 items-center mt-3 hover:text-gray-300 duration-300 hover:gap-8 hover:ml-2" href="/projects">
          <h2 className='text-lg'>See more projects</h2>
          <IconArrowNarrowRight />
        </Link>
    </div>
  )
}

export default Projects