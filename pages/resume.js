import Layout from "@/components/Layout";
import { useState, useEffect } from "react";

const Resume = () => {

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
            <div className="h-screen mx-36">
                <iframe src={`/ResumeGabriel.pdf`} title="Resume" height="100%" width="100%"  />
            </div>
        </Layout>
        </>
    )
}

export default Resume;