const { default: Layout } = require("@/components/Layout")
import { useEffect, useState } from "react";
import MainProject from "@/components/projects/MainProject";

const Work = () => {
    const [color, setColor] = useState("red");


    useEffect(() => {
        const storedColor = localStorage.getItem('color');
        if (storedColor) {
            setColor(JSON.parse(storedColor));
        }
    })
    return (
        <>
            <Layout color={color}>
                <div className="flex items-center text-xl mx-12 ">
                    <h1 className={`${color} sf-mono`}>03.</h1>
                    <h1 className="sf-mono ml-4 font-bold text-2xl">Projects I've worked on</h1>
                    <hr className={`${color} ml-4 h-px w-1/2`}></hr>
                </div>
                <MainProject
                    image="/projects/CoursesDB.png"
                    title="CoursesDB"
                    techs={["NextJS", "MongoDB", "Express", "NodeJS"]}
                    description="A fullstack application created for the purpose of giving the opportunity to students to share and read summaries of courses they are or will be taking. Everyone can create an account, and when given the right, can also write a post."
                    color={color}
                    github="https://github.com/Adissuu/CoursesDB"
                />
                <MainProject
                    image="/projects/pokedex.png"
                    title="PokéAPI"
                    techs={["React", "Axios", "Router", "Framer motion"]}
                    description="A project that a huge amount of developers works on at one point or another. This time, I had the chance to greatly learn about Axios and everything related to API calls."
                    color={color}
                    github="https://github.com/Adissuu/Pokedex-api"
                    link="https://adissuu.github.io/Pokedex-api/#/"
                    reversed={true}
                />
            </Layout>
        </>
    )
}

export default Work;