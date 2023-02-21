import React from 'react';
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import axios from 'axios'
import './AxiosConfig';
import Layout from "./views/Layout";
import Landing from "./views/Landing";
import Login from "./views/Login";
import AuthLayout from "./views/AuthLayout";


ReactDOM.render(
    <Router>
        <Routes>
            <Route index path="/" element={<AuthLayout><Login /></AuthLayout>} />
            <Route path="/landing" element={<Layout><Landing /></Layout>} />
        </Routes>
    </Router>,
    document.getElementById('wrapper')
)
