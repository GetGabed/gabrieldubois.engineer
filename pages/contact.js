const { default: Layout } = require("@/components/Layout")
import { useEffect, useState } from "react";

const Contact = () => {
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
            <h1>Contact</h1>
        </Layout>
        </>
    )
}

export default Contact;