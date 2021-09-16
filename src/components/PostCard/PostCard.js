import React from 'react';
import { Link } from 'react-router-dom';

class PostCard extends React.Component{
    render(){
        return(
            <div className="w3-card-4 w3-margin w3-white">
                <img src={this.props.img} alt="Nature" style={ {width:'100%'} }/>
                    <div className="w3-container">
                        <h3><b>{this.props.title}</b></h3>
                        <h5>{this.props.tag}, <span className="w3-opacity">{this.props.createdData}</span></h5>
                    </div>

                    <div className="w3-container">
                        <p>{this.props.desc}</p>
                        <div className="w3-row">
                            <div className="w3-col m8 s12">
                                <Link to={`/postFull/${this.props.id}`}>
                                    <button className="w3-button w3-padding-large w3-white w3-border">
                                        <b>READ MORE »</b></button>
                                </Link>
                            </div>
                            <div className="w3-col m4 w3-hide-small">
                                <p><span className="w3-padding-large w3-right"><b>Comments  </b> <span
                                    className="w3-tag">0</span></span></p>
                            </div>
                        </div>
                    </div>
            </div>
        )
    }
}

export default PostCard;