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
        <div className="flex items-center text-xl mx-12 mb-12">
                <h1 className={`${color} sf-mono`}>03.</h1>
                <h1 className="sf-mono ml-4 font-bold text-2xl">Work</h1>
                <hr className={`${color} ml-4 h-px w-1/2`}></hr>
            </div>
        </Layout>
        </>
    )
}

export default Work;