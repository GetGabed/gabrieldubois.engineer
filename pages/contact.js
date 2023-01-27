const { default: Layout } = require("@/components/Layout")
import { useEffect, useState } from "react";
import Link from "next/link";

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
        <div className="flex items-center text-xl mx-12 mb-12">
                <h1 className={`${color} sf-mono`}>04.</h1>
                <h1 className="sf-mono ml-4 font-bold text-2xl">Contact</h1>
                <hr className={`${color} ml-4 h-px w-1/2`}></hr>
            </div>
            <h1 className="mx-12"> To contact me, please go throught my <Link className={`${color} hover:border-b border-current`} href="https://www.linkedin.com/in/gabriel-dubois-soen/">LinkedIn</Link> or <Link className={`${color} hover:border-b border-current`} href = "mailto: gabrieldubois.eng@gmail.com">my email: gabrieldubois.eng@gmail.com</Link></h1>
        </Layout>
        </>
    )
}

export default Contact;