import React from 'react';
import woods from './../../media/image/woods.jpg';
import { Link } from 'react-router-dom';


class PostCard extends React.Component{
    render(){
        return(
            <div className="w3-card-4 w3-margin w3-white">
                <img src={woods} alt="Nature" style={ {width:'100%'} }/>
                    <div className="w3-container">
                        <h3><b>TITLE HEADING</b></h3>
                        <h5>Title description, <span className="w3-opacity">April 7, 2014</span></h5>
                    </div>

                    <div className="w3-container">
                        <p>Mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl. Sed
                            mattis
                            nunc id lorem euismod placerat. Vivamus porttitor magna enim, ac accumsan
                            tortor cursus at. Phasellus sed ultricies mi non congue ullam corper.
                            Praesent tincidunt sed
                            tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies
                            congue gravida diam non fringilla.</p>
                        <div className="w3-row">
                            <div className="w3-col m8 s12">
                                <Link to="/postFull">
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