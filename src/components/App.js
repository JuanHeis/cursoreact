import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Badges from '../pages/Badges'
import BadgeNew from '../pages/BadgeNew'
import Layout from './Layout'
import NotFound from './NotFound'
import Home from '../pages/Home'
function App() {
    return (<React.Fragment>
        <BrowserRouter>
            <Layout>
                <Switch>
                    <Route exact path='/badges' component={Badges}></Route>
                    <Route exact path='/badges/new' component={BadgeNew}></Route>
                    <Route exact path='/' component={Home}></Route>
                    <Route component={NotFound}/>
                </Switch>
            </Layout>
        </BrowserRouter>
    </React.Fragment>
    )
}
export default App