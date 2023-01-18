const { default: Layout } = require("@/components/Layout")
import { useEffect, useState } from "react";

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
            <h1>Work</h1>
        </Layout>
        </>
    )
}

export default Work;