import { Helmet } from "react-helmet";
const Search = () => {
    return (
        <>

            <Helmet>
                <title>Search</title>
                <meta name="description" content="Searching section" />
            </Helmet>
            <h2>Search</h2>

            <form>
                <label htmlFor="searchInput">Search:</label>
                <input id="searchInput" type="text" name="search" />

                <input type="submit" value="Submit" />
            </form>
        </>

    );
}

export default Search;