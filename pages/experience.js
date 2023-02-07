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
            <div className="flex flex-col mx-32 mb-12">
                <WorkCard 
                color={color}
                title="UpStart 2023" 
                subtitle='"CEO Vibes"' 
                description="Along with three other colleagues, I created a startup where we would create a web application offering consultation services that would help managers create a better work environment, with the help of industrial-organizational psychologists."
                startDate="Feb 23" 
                location="Concordia, Montreal"
                link= "https://devpost.com/software/workease?ref_content=my-projects-tab&ref_feature=my_projects"
                />
                <WorkCard 
                color={color}
                title="ConUHacks VII" 
                subtitle='"Overnight sweat"' 
                description="Worked on a blockchain application, implementing Hedera as a challenge. This was a great learning, as I got to understand how the transactions happen in it, and how the messages are encrypted."
                startDate="Jan 23" 
                location="Concordia, Montreal"
                link= "https://conuhacks.io"
                />
                <WorkCard 
                color={color}
                title="Gamerella" 
                subtitle='"Teamwork makes the dream work!"' 
                description="This game Jam is where I learnt to work on a game with a team coming from different fields. We had artists, programmers and story tellers. As it was for most our first jam and because of time constraints, the project has been isolated to one level and one main mechanic."
                startDate="Dec 22" 
                location="Concordia, Montreal"
                link= "https://far2022.itch.io/far"
                />
                <WorkCard 
                color={color}
                title="Englympics" 
                subtitle='"Too many choices"'
                description="In this edition of Englympics, we had the choice to focus on either mobile app, website creation, AI, desktop app and a few more... I'll let you guess which ones we focused on." 
                startDate="Oct 22" 
                location="Concordia, Montreal"
                link= "https://ecaconcordia.ca/englympics/"
                />
                <WorkCard 
                color={color}
                title="HawkHacks" 
                subtitle='"Bounding exp"'
                description="My friends and I built a Discord bot in Python during this virtual hackathon, and we made it play with probabilities." 
                startDate="May 22" 
                location="Remote"
                link= "https://hawkhacks.ca"
                />
            </div>
            
        </Layout>
        </>
    )
}

export default Experience;
