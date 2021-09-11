import React from 'react';
import About from "../About/About";
import PopularPosts from "../PopularPost/PopularPosts";
import Tags from "../Tags/Tags";

class Info extends React.Component{
    render(){
        return(
            <div className="w3-col l4">
                <About/>
                <hr/>
                <PopularPosts/>
                <hr/>
                <Tags/>
            </div>
        )
    }
}

export default Info;