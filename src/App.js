import './App.css';
import projects from './projectlist'
import React from 'react'
import { Switch, Route, useRouteMatch } from 'react-router-dom'
import Main from './Main'
import Projects from './Projects'

const App = () => {
    const matchProject = useRouteMatch('/:id')
    const projectPage = matchProject
    ? projects.find(project => project.id === matchProject.params.id)
    : null

    return (
        <Switch>
            <Route path="/:id">
                <Projects p={projectPage}/>
            </Route>
            <Route path="/">
                <Main />
            </Route>
        
        </Switch>
        
    )
}

export default App;
