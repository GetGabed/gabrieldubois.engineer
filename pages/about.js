import Layout from "@/components/Layout";
import { useEffect } from "react";

const About = () => {

const color = JSON.parse(localStorage.getItem('color'));

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
