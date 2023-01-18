import Header from "./Header";
import Head from "next/head";
import Footer from "./Footer";
import { useRouter } from "next/router";
import { useState } from "react";

const LIGHT_THEME = "light"
const DARK_THEME = "dark"

const Layout = ({ children, pageMeta, color }) => {

    const router = useRouter();

    const meta = {
        title: 'Gabriel Dubois',
        description: "Gabriel's portfolio",
        type: 'website',
        ...pageMeta,
    };

    return (
        <div className="bg-custom-light h-screen dark:bg-custom-dark">
            <Head>
                <title>{meta.title}</title>
                <meta name="description" content={meta.description} />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
                <meta property="og:url" content={`http://localhost:3000${router.asPath}`} />
            </Head>
            <Header color={color} />
            <main>{children}</main>
            <Footer />
        </div>
    );
}

export default Layout;