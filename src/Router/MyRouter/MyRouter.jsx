import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../../Pages/Home/Home';

const MyRouter = () => {
    return (
        <>
            <Switch>
                <Route exact path="/">
                    <Home></Home>
                </Route>
            </Switch>
            
        </>
    );
};

export default MyRouter;