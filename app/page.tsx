"use client"
import { motion } from "framer-motion";
import Profile from "@/components/Profile";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

export default function Home() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 }, // Start faded out and slightly below
    animate: { opacity: 1, y: 0 }, // Fade in and move to original position
    transition: { duration: 0.25, ease: "easeOut" }, // Smooth transition
  };

  return (
    <>
      <motion.div
        className="mt-8 mx-2"
        id="profile"
        initial={fadeInUp.initial}
        animate={fadeInUp.animate}
        transition={{ ...fadeInUp.transition, delay: 0.1 }} // Delay for staggering effect
      >
        <Profile />
      </motion.div>

      <motion.div
        className="mt-4"
        id="skills"
        initial={fadeInUp.initial}
        animate={fadeInUp.animate}
        transition={{ ...fadeInUp.transition, delay: 0.2 }}
      >
        <Skills />
      </motion.div>

      <motion.div
        className="mt-4"
        id="experience"
        initial={fadeInUp.initial}
        animate={fadeInUp.animate}
        transition={{ ...fadeInUp.transition, delay: 0.3 }}
      >
        <Experience />
      </motion.div>

      <motion.div
        className="mt-4"
        id="projects"
        initial={fadeInUp.initial}
        animate={fadeInUp.animate}
        transition={{ ...fadeInUp.transition, delay: 0.4 }}
      >
        <Projects />
      </motion.div>
    </>
  );
}
