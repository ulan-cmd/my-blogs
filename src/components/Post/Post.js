import React from "react";
import PostCard from "../PostCard/PostCard";

class Post extends React.Component{
    render(){
        return(
            <div className="w3-col l8 s12">
                <PostCard/>
                <PostCard/>
            </div>
        )
    }
}

export default Post;