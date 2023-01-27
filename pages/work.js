const { default: Layout } = require("@/components/Layout")
import { useEffect, useState } from "react";
import MainProject from "@/components/projects/MainProject";

const Work = () => {
    const [color, setColor] = useState("red");
   
        
    useEffect(()=> {
        const storedColor = localStorage.getItem('color');
        if (storedColor) {
          setColor(JSON.parse(storedColor));
        }
    })
    return (
        <>
        <Layout color={color}>
            <div className="flex items-center text-xl mx-12 mb-12">
                <h1 className={`${color} sf-mono`}>03.</h1>
                <h1 className="sf-mono ml-4 font-bold text-2xl">Projects that I've worked on</h1>
                <hr className={`${color} ml-4 h-px w-1/2`}></hr>
            </div>
            <MainProject 
            image="/projects/CoursesDB.png" 
            title="CoursesDB"
            techs={["VS Code", "NextJS", "MongoDB", "NodeJS"]}
            description="A fullstack application created for the purpose of giving the opportunity to students to share and read summaries of courses they are or will be taking. Everyone can create an account, and when given the right, can also write a summary."
            color={color}/>
        </Layout>
        </>
    )
}

export default Work;