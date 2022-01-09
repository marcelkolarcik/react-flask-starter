import {useTestServerQuery} from "../features/api/domain1Slice";
import {useDispatch, useSelector} from "react-redux";
import {setNumOfRequests} from "../features/starter/starterSlice";
import React from "react";

export default function TestTheServer() {
    const {data, isLoading, isSuccess, isError, error, status, refetch} = useTestServerQuery();
    const numOfRequests = useSelector((state => state.starter.numOfRequests))
    const dispatch = useDispatch();

    function testServerHandler() {

        dispatch(setNumOfRequests(1));
        refetch();
    }

    let content;

    if (isLoading) {
        content = 'Loading'
    } else if (isSuccess) {
        content = data.message
    } else if (isError) {
        content = 'Error ' + error.error + ' is your server running? python app.py'
    }

    return (
        <div className="container text-center">
            <button className={'btn btn-sm btn-primary'} onClick={testServerHandler}>test server</button>
            <p>{numOfRequests}</p>
            <p>{content}</p>
        </div>
    );
}