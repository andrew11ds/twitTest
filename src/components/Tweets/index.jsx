import { Helmet } from "react-helmet";
const Tweets = () => {
    return (
        <>
            <Helmet>
                <title>Tweets</title>
                <meta name="description" content="Tweet section" />
            </Helmet>
            <h2>Your tweets</h2>
        </>
    );
}

export default Tweets;