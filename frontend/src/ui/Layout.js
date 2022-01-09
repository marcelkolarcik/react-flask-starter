import MainNav from "../components/MainNav";
import React from "react";

export default function Layout(props) {

    return (
        <>
            <MainNav/>
            <>{props.children}</>
        </>
    );
}