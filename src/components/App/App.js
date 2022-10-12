import React, { useState } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from '../Dashboard/Dashboard';
import Preferences from '../Preferences/Preferences';
import ModalF from '../Modals/Forgot';
import Login from '../Login/Login';
import useToken from './useToken';
import AR from '../AR/Ar';

function App() {

    const { token, setToken } = useToken();

    if (!token) {
        return <Login setToken={setToken} />
    }
    return (
        <div className="wrapper">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<AR />} />
                    <Route path="/preferences" element={<Preferences />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;