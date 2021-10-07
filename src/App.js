import React from 'react';
import Main from './pages/Main/Main';
import PostFull from "./pages/PostFull/PostFull";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Test from "./pages/Test/Test";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import Header from "./components/Header/Header";
import './App.css';
import Test2 from "./pages/Test/Test2";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <BrowserRouter>
                    <Header/>
                    <Switch>
                        <Route path="/" exact component={Main}/>
                        <Route path="/postFull/:id" exact component={PostFull}/>
                        <Route path="/test" exact component={Test}/>
                        <Route path="/test2" exact component={Test2}/>
                        <Route component={NotFoundPage}/>
                    </Switch>
                </BrowserRouter>
                <ToastContainer/>
            </>
        )
    }

}

export default App;