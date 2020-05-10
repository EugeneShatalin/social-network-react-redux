import React from "react";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import {Route} from "react-router-dom";
import './App.css';




const App = () => {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Route path='/dialogs'
                        render={() => <DialogsContainer/>}/>
                <Route path='/profile'
                        render={() => <ProfileContainer/>}/>
                <Route path='/users'
                        render={() => <UsersContainer/>}/>
            </div>
        </div>
    )
}
export default App;