const { default: Layout } = require("@/components/Layout")
import { useEffect, useState } from "react";

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
            <h1>Experience</h1>
        </Layout>
        </>
    )
}

export default Experience;