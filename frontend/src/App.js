import React from 'react';
import './App.css';
import Layout from "./ui/Layout";
import {Route, Routes} from 'react-router-dom'
import Test from "./pages/Test";
import Landing from "./pages/Landing";

function App() {
    return (
        <Layout>
            <Routes>
                <Route path={'/'} element={<Landing/>}/>
                <Route path={'/test'} element={<Test/>}/>
            </Routes>
        </Layout>
    );
}

export default App;
