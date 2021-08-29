const Search = () => {
    return (
        <>
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