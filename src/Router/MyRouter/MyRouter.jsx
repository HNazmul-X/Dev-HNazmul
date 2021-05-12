import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import About from '../../Pages/About/About';
import Blog from '../../Pages/Blog/Blog';
import Contact from '../../Pages/Contact/Contact';
import Home from '../../Pages/Home/Home';
import ProjectPage from '../../Pages/ProjectPages/ProjectPage';

const MyRouter = () => {
    return (
        <>
            <Switch>
                <Route exact path="/">
                    <Home></Home>
                </Route>
                <Route exact path="/project/:projectId">
                    <ProjectPage/>
                </Route>
                <Route exact path="/projects">
                    <ProjectPage/>
                </Route>
                <Route exact path="/blog">
                    <Blog/>
                </Route>
                <Route exact path="/about-me">
                    <About/>
                </Route>
                <Route exact path="/contact-me">
                    <Contact/>
                </Route>
            </Switch>
            
        </>
    );
};

export default MyRouter;