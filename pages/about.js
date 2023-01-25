import Layout from "@/components/Layout";
import { useEffect, useState } from "react";
import Link from "next/link";
import Logo from "@/components/Logo";

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
                                Since these days, I've had the opportunity to participate in many <Link href='/experience' className={`${color} hover:border-b border-current`}>hackathons</Link>, work at a <Link href="https://www.ibwave.com" target="_blank" className={`${color} hover:border-b border-current`}>wireless network global leader</Link>, and create meaningful <Link href='/work' className={`${color} hover:border-b border-current`}>projects</Link> that improved my skills.
                            </p>
                            <div>
                                <h1 className={`clash-display text-2xl txt-border font-bold text-white mt-12 ml-16`}>WEB</h1>
                                <hr className={`${color} ml-16 h-px w-full`}></hr>
                                <div className="ml-20 mt-12 flex">
                                    <Logo name="HTML" css='devicon-html5-plain colored' border="#e54d26" color={color}/>
                                    <Logo name="CSS" css='devicon-css3-plain colored' border="#3d8fc6" color={color}/>
                                    <Logo name="Javascript" css='devicon-javascript-plain colored' border="#f0db4f" color={color} b_bool={true}/>
                                    <Logo name="Typescript" css='devicon-typescript-plain colored' border="#007acc" color={color} b_bool={true}/>
                                    <Logo name="React" css='devicon-react-plain colored' border="#61dafb" color={color}/>
                                    <Logo name="Next" css='devicon-nextjs-plain' border={color} color={color}/>
                                    <Logo name="MongoDB" css='devicon-mongodb-plain colored' border="#4faa41" color={color}/>
                                    <Logo name="Express" css='devicon-express-original colored' border="#444" color={color}/>
                                    <Logo name="NodeJS" css='devicon-nodejs-plain colored' border="#83cd29" color={color}/>
                                </div>
                                <h1 className={`clash-display text-2xl txt-border font-bold text-white mt-12 ml-16`}>GAME DEV</h1>
                                <hr className={`${color} ml-16 h-px w-full`}></hr>
                                <div className="ml-20 mt-12 flex">
                                    <Logo name="" css='devicon-unity-original-wordmark' border="#currentColor" color={color}/>
                                    <Logo name="" css='devicon-unrealengine-original-wordmark' border="#currentColor" color={color}/>
                                    <Logo name="C#" css='devicon-csharp-plain colored' border="#68217a" color={color}/>
                                    <Logo name="C++" css='devicon-cplusplus-plain colored' border="#9c033a" color={color}/>
                                    <Logo name="Blender" css='devicon-blender-original colored' border="#dc7b2e" color={color}/>
                                </div>
                                <h1 className={`clash-display text-2xl txt-border font-bold text-white mt-12 ml-16`}>OTHER/LANGUAGES</h1>
                                <hr className={`${color} ml-16 h-px w-full`}></hr>
                                <div className="ml-20 mt-12 flex">
                                    <Logo name="Java" css='devicon-java-plain colored' border="#ea2d2e" color={color}/>
                                    <Logo name="Python" css='devicon-python-plain colored' border="#ffd845" color={color}/>
                                </div>
                            </div>
                        </div>

                        <div className="pr-16 flex flex-col items-center transition-all">
                            <video className={`rounded-full border-4 dark:border-2 ${color} ai`} muted="true" autoplay="true" loop="true" src="/VideoAI.mp4"></video>
                            <small className="sf-mono mt-4 text-center text-gray-400">Around 62% similarity, but hey we love AI here!</small>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    )
}

export default About;
