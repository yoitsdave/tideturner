
import React from 'react'
import NewWash from './components/NewWash'
import Settings from './components/Settings'
import HomeScreen from './components/HomeScreen'
import {Router, Scene} from 'react-native-router-flux'
const Routes = ()=> {
    return (
        <Router>
           <Scene key="root">
                <Scene
                    key="login"
                    title="Login"
                    component={NewWash}>
                </Scene>
                <Scene
                    key="home"
                    title="Home"
                    component={Settings}
                    >
                </Scene>
           </Scene>
        </Router>
    )
}

export default Routes