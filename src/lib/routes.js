import Login from './../components/Public/Login';
import SignUp from '../components/Public/SignUp';
import Home from './../components/Public/Home';
import Test from './../components/Test'
import PasswordRecovery from './../components/PasswordRecovery';
import Profile from './../components/Profile';
import Timeline from '../components/Private/Timeline';
import Trending from './../components/Trending';
import Search from './../components/Search';
import RecoverPassword from '../components/Public/RecoverPassword';
import Dummy from '../components/Public/Dummy';


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
            title: "Recover Password",
            path: "/recoverpassword",
            component: RecoverPassword,
        },
        {
            title: "Test",
            path: "/test",
            component: Test,
        },
        {
            title: "Dummy",
            path: "/dummy",
            component: Dummy,
        },
    ]
}
export default routes;