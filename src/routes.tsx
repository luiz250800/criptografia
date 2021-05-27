import React from 'react';

import { BrowserRouter, Route } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import CodeConfirmRegister from './pages/CodeConfirmRegister';
import RegisterPassword from './pages/RegisterPassword';
import ForgotPassword from './pages/ForgotPassword';
import Index from './pages/Index';

function Routes() {
    return (
        <BrowserRouter>
        <Route path="/" exact component={Login} />
        <Route path="/register" exact component={Register} />
        <Route path="/confirmRegister" exact component={CodeConfirmRegister} />
        <Route path="/registerPassword" exact component={RegisterPassword} />
        <Route path="/index" exact component={Index} />
        <Route path="/forgotPassword" exact component={ForgotPassword} />
        </BrowserRouter>
    );
}

export default Routes;