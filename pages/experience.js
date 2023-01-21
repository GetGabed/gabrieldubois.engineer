const { default: Layout } = require("@/components/Layout")
import { useEffect, useState } from "react";
import WorkCard from "@/components/WorkCard";

const Experience = () => {
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
                <h1 className={`${color} sf-mono`}>02.</h1>
                <h1 className="sf-mono ml-4 font-bold text-2xl">Experience</h1>
                <hr className={`${color} ml-4 h-px w-1/2`}></hr>
            </div>
            <h1 className={`clash-display text-2xl txt-border font-bold text-white mt-12 mx-32`}>Internship</h1>
            <div className="flex flex-col mx-32">
                <WorkCard 
                color={color}
                title="iBwave Solutions inc." 
                subtitle="Software Developer Intern" 
                description="I worked as a full stack developer with Angular and Typescript on the frontend, and C# on the backend. I also got the chance to create tests with Selenium on the Unity solution."
                startDate="Sept 22 - Dec 22" 
                location="Remote"
                link= "https://www.ibwave.com"
                />
            </div>
            <h1 className={`clash-display text-2xl txt-border font-bold text-white mt-24 mx-32`}>Hacks</h1>
            <div className="flex flex-col mx-32">
                <WorkCard 
                color={color}
                title="ConUHacks VII" 
                subtitle='"Overnight sweat"' 
                description="Upcoming"
                startDate="Jan 23" 
                location="Concordia, Montreal"
                link= "https://conuhacks.io"
                />
                <WorkCard 
                color={color}
                title="Gamerella" 
                subtitle='"My first Game jam!"' 
                description="This game Jam is where I learnt to work on a game with a team coming from different fields. We had artists, programmers and story tellers. As it was for most our first jam and because of time constraints, the project has been isolated to one level and one main mechanic."
                startDate="Dec 22" 
                location="Concordia, Montreal"
                link= "https://far2022.itch.io/far"
                />
                <WorkCard 
                color={color}
                title="Englympics" 
                subtitle='"My second edition"'
                description="Yo" 
                startDate="Oct 22" 
                location="Concordia, Montreal"
                link= ""
                />
            </div>
            
        </Layout>
        </>
    )
}

export default Experience;