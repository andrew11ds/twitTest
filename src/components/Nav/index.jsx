import { Link } from 'react-router-dom';

const App = () => {
    return (

        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/signup">Sign Up</Link></li>
                <li><Link to="/passwordrecovery">Password Recovery</Link></li>
                <li><Link to="/profile">Profile</Link></li>
                <li><Link to="/timeline">Timeline</Link></li>
                <li><Link to="/tweets">Tweets</Link></li>
                <li><Link to="/trending">Trending</Link></li>
                <li><Link to="/search">Search</Link></li>

            </ul>
        </nav>
    );
}

export default App;