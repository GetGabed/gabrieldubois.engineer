import Layout from "@/components/Layout";
import { useEffect, useState } from "react";
import Link from "next/link";

const About = () => {
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
                {/* //<LinkList/> */}
                <div>
                    <div className="flex items-center text-xl mx-12 mb-12">
                        <h1 className={`${color} sf-mono`}>01.</h1>
                        <h1 className="sf-mono ml-4 font-bold text-2xl">About</h1>
                        <hr className={`${color} ml-4 h-px w-1/2`}></hr>
                    </div>
                    <div className="flex">
                        <div>
                            <p className="ml-16 mr-12 text-lg mb-12">Hello! My name is Gabriel and I take     pleasure in developing features that will be used and appreciated by a handful of users. My passion for programming started in the mid 2010's as I was trying to understand how the games and websites I've been exploring were made.<br /><br />
                                Since these days, I've had the opportunity to participate to many <Link href='/experience' className={`${color} hover:border-b border-current`}>hackathons</Link>, work at a <Link href="https://www.ibwave.com" target="_blank" className={`${color} hover:border-b border-current`}>wireless network global leader</Link>, and create meaningful <Link href='/work' className={`${color} hover:border-b border-current`}>projects</Link> that improved my skills.
                            </p>
                            <hr className={`${color} ml-4 h-px w-1/2`}></hr>
                        </div>

                        <div className="pr-16 flex flex-col items-center transition-all">
                            <video className={`rounded-full border-2 ${color} ai`} muted="true" autoplay="true" loop="true" src="/VideoAI.mp4"></video>
                            <small className="sf-mono mt-4 text-center text-gray-400">Around 62% similarity, but hey we love AI here!</small>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    )
}

export default About;
