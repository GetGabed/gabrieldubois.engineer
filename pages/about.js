import Layout from "@/components/Layout";
import { useEffect, useState } from "react";

const About = () => {
    const [color, setColor] = useState("red");
   
        
    useEffect(()=> {
        const storedColor = localStorage.getItem('color');
        if (storedColor) {
          setColor(JSON.parse(storedColor));
        }
    })

    return (
        <>
        <Layout>
            <hr className={color}></hr>
        <h1></h1>

        </Layout>
        </>
    )
}

export default About;
