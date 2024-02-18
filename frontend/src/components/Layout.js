import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useDispatch, useSelector } from "react-redux";
import { Auth0Login, refresh } from "../reducers/authReducer";
import Loading from "./Loading";

export default function Layout() {
    const { user, isAuthenticated, isLoading } = useAuth0();
    const dispatch = useDispatch();
    const token = useSelector(state => state.auth.token);
    const status = useSelector(state => state.auth.status);
    const isLogin = useSelector(state => state.auth.isLogin);
    const [loading, setLoading] = React.useState(status === "loading");

    React.useEffect(()=>{
        if(isAuthenticated) {
            dispatch(Auth0Login({username:user.email}));
        }
    },[isAuthenticated])
    React.useEffect(() => {
        if (!isLogin && !isAuthenticated) {
            dispatch(refresh());
        }
    }, [dispatch, isLogin]);

    React.useEffect(() => {
        const tokenExpirationThreshold = 3 * 60;
        let exp = token.length > 0 ? JSON.parse(window.atob(token.split('.')[1])).exp : 0;
        const intervalId = setInterval(() => {
            if (exp - Date.now() / 1000 < tokenExpirationThreshold) {
                // Dispatch the refreshAccessToken action
                dispatch(refresh());
            }
        }, 13 * 60 * 1000);

        return () => clearInterval(intervalId);
    }, [dispatch, token]);

    React.useEffect(() => {
        setLoading(status === "loading");
    }, [status]);

    return (
        <>
            {loading && <Loading />}
            <Navbar />
            <Outlet />
            <Footer />
        </>
    );
}