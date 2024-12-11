"use client"
import { DATA } from '../../data/resume';
import { motion } from 'framer-motion';
import { ProjectCard } from '../../components/ui/project-card';

export default function ProjectsPage() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.25, ease: "easeOut" }, 
  };
  return (
    <motion.div className='mt-12 flex flex-col gap-8'        
      initial={fadeInUp.initial}
      animate={fadeInUp.animate}
      transition={{ ...fadeInUp.transition, delay: 0.1 }}>
        {DATA.projects.map((project, id) => (
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
    </motion.div>
  );
}
