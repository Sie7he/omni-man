import { Outlet } from "react-router";
import { LoginScreen } from "../components/login/LoginScreen";

const useAuth = () => {
    const user = { loggedIn: false};
    return user && user.loggedIn
};

const ProtectedRoutes = () => {
    const isAuth = useAuth();
    return isAuth ? <Outlet /> : <LoginScreen />
}

export default ProtectedRoutes;