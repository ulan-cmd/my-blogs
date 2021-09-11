import React from 'react';
import Header from "../../components/Header/Header";
import PostCard from "../../components/PostCard/PostCard";
import About from "../../components/About/About";
import PopularPosts from "../../components/PopularPost/PopularPosts";
import Tags from "../../components/Tags/Tags";
import Footer from "../../components/Footer/Footer";

class Main extends React.Component {

    render() {
        return (
            <>
                <div className="w3-content" style={{maxWidth: '1400px'}}>
                    <Header/>
                    <div className="w3-row">
                        <div className="w3-col l8 s12">
                            <PostCard/>
                            <PostCard/>
                        </div>
                        <div className="w3-col l4">
                            <About/>
                            <hr/>
                            <PopularPosts/>
                            <hr/>
                            <Tags/>
                        </div>
                    </div>
                    <br/>
                </div>
                <Footer/>
            </>
        )
    }

}

export default Main;