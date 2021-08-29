import { Link } from 'react-router-dom';

const App2 = () => {
    return (
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/signup">Sign Up</Link></li>
                <li><Link to="/passwordrecovery">Password Recovery</Link></li>
            </ul>
        </nav>
    );
}

export default App2;