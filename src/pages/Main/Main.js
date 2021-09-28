import React from 'react';
import Footer from "../../components/Footer/Footer";
import Post from "../../components/Post/Post";
import Info from "../../components/Info/Info";

class Main extends React.Component {
    render() {
        return (
            <>
                <div className="w3-content" style={{maxWidth: '1400px'}}>
                    <div className="w3-row">
                        <Post/>
                        <Info/>
                    </div>
                </div>
                <Footer/>
            </>
        )
    }
}

export default Main;