import Login from './../components/Public/Login';
import SignUp from '../components/Public/SignUp';
import Home from './../components/Public/Home';
import Test from './../components/Test'
import PasswordRecovery from './../components/PasswordRecovery';
import Profile from './../components/Profile';
import Timeline from './../components/Timeline';
import Tweets from './../components/Tweets';
import Trending from './../components/Trending';
import Search from './../components/Search';


const routes = {
    restricted: [
        {
            title: "Home",
            path: "/home",
            component: Timeline,
        },
    ],
    unrestricted: [
        {
            title: "Home",
            path: "/",
            component: Home,
        },
        {
            title: "Login",
            path: "/login",
            component: Login,
        },
        {
            title: "Sign Up",
            path: "/signup",
            component: SignUp,
        },
        {
            title: "Test",
            path: "/test",
            component: Test,
        },
    ]
}
export default routes;