import React from "react";
import TestTheServer from "../components/TestTheServer";
import TestTheServer2 from "../components/TestTheServer2";

export default function Test() {
    return (<div className="container">
        <h1 className="text-center display-1">
            Test the server.
        </h1>
        <TestTheServer/>

        <TestTheServer2/>
    </div>);
}