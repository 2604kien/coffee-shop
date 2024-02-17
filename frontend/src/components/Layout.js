import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { refresh } from "../reducers/authReducer";
import Loading from "./Loading";

export default function Layout() {
    const dispatch = useDispatch();
    const token = useSelector(state => state.auth.token);
    const status = useSelector(state => state.auth.status);
    const isLogin = useSelector(state => state.auth.isLogin);
    const [loading, setLoading] = React.useState(status === "loading");

    React.useEffect(() => {
        if (!isLogin) {
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