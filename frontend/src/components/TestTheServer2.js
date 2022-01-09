import {useTestServer2Query} from "../features/api/domain2Slice";
import {useDispatch, useSelector} from "react-redux";
import {setNumOfRequests} from "../features/starter/starterSlice";
import React from "react";

export default function TestTheServer2() {
    const {data, isLoading,isFetching, isSuccess, isError, error, status, refetch} = useTestServer2Query();
    const dispatch = useDispatch();
    function testServer2Handler() {

        dispatch(setNumOfRequests(1));
        refetch();

    }

    let content;

    if (isLoading || isFetching) {
        content = 'Loading'
    } else if (isSuccess) {
        content = <>{data.content} <br/> <em>{data.author}</em></>
    } else if (isError) {
        content = 'Error ' + error.error
    }

    return (
        <div className="container text-center">
            <button className={'btn btn-sm btn-primary'} onClick={testServer2Handler}>test server2</button>
            <p>{content}</p>
        </div>
    );
}