import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../../Pages/Home/Home';
import ProjectPage from '../../Pages/ProjectPages/ProjectPage';

const MyRouter = () => {
    return (
        <>
            <Switch>
                <Route exact path="/">
                    <Home></Home>
                </Route>
                <Route exact path="/projects">
                    <ProjectPage/>
                </Route>
            </Switch>
            
        </>
    );
};

export default MyRouter;