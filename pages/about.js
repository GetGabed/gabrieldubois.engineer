import Layout from "@/components/Layout";
import { useEffect, useState } from "react";

const About = () => {
    const [color, setColor] = useState("red");
    if(typeof window !== 'undefined' && 'localStorage' in window){
        setColor(JSON.parse(localStorage.getItem('color')));
    }

    return (
        <>
        <Layout>
            <hr className={color}></hr>
        <h1>It's my birthdayyyyy</h1>

        </Layout>
        </>
    )
}

export default About;
