import React from 'react';
import Main from './pages/Main/Main';
import PostFull from "./pages/PostFull/PostFull";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Test from "./pages/Test/Test";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <BrowserRouter>
                    <Switch>
                        <Route path="/" exact component={Main}/>
                        <Route path="/postFull/:id" exact component={PostFull}/>
                        <Route path="/test" exact component={Test}/>
                        <Route component={NotFoundPage}/>
                    </Switch>
                </BrowserRouter>
            </>
        )
    }

}

export default App;