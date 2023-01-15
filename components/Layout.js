import Header from "./Header";
import Head from "next/head";
import Footer from "./Footer";
import { useRouter } from "next/router";

const Layout = ({ children, pageMeta }) => {

    const router = useRouter();

    const meta = {
        title: 'Gabriel Dubois',
        description: "Gabriel's portfolio",
        type: 'website',
        ...pageMeta,
    };

    return (
        <div>
            <Head>
                <title>{meta.title}</title>
                <meta name="description" content={meta.description} />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
                <meta property="og:url" content={`http://localhost:3000${router.asPath}`} />
            </Head>
            <Header />
            <main>{children}</main>
            <Footer />
        </div>
    );
}

export default Layout;