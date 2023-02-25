import * as React from "react";
import Helmet from "react-helmet";


// Style
import "../styles/pages/404.scss";
const isBrowser = typeof window !== "undefined"

const NotFoundPage = () => {

    React.useEffect(() => {
        if (isBrowser) {
            const params = new Proxy(new URLSearchParams(window.location.search), {
                get: (searchParams, prop) => searchParams.get(prop),
            });
            if (params.path) {
                window.location.href = params.path;
            }
        }
    }, []);
    return (
        <main className="not-found-page">
            <Helmet>
                <title>Redirecting...</title>
            </Helmet>
            <div>
                <h1>Redirecting...</h1>
                <p>Hold on, we're redirecting you!</p>
            </div>
        </main>
    );
};

export default NotFoundPage;
