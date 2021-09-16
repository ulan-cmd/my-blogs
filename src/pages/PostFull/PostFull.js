import React from 'react';
import CommentsPub from "../../components/CommentsPub/CommentsPub";
import Header from "../../components/Header/Header";
import woods from './../../media/image/woods.jpg';
import Footer from "../../components/Footer/Footer";

class PostFull extends React.Component{
    constructor(props) {
        super(props);

        console.log('location: ', this.props.location);



        console.log('id: ', this.props.match.params.id);
    }

    render(){
        return(
            <>
                <Header/>
                {/*Full Post*/}
                <div className="w3-card-4 w3-margin w3-white">
                    <img src={woods} alt="Nature" style={{width: '100%'}}/>
                    <div className="w3-container">
                        <h3><b>TITLE HEADING</b></h3>
                        <h5>Title description, <span className="w3-opacity">April 7, 2014</span></h5>
                    </div>
                    <div className="w3-container">
                        <p>Mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl. Sed
                            mattis nunc id lorem euismod placerat. Vivamus porttitor magna enim, ac accumsan
                            tortor cursus at. Phasellus sed ultricies mi non congue ullam corper.
                            Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae,
                            ultricies congue gravida diam non fringilla.Mauris neque quam, fermentum ut nisl vitae,
                            convallis maximus nisl. Sed mattis nunc id lorem euismod placerat. Vivamus porttitor
                            magna enim, ac accumsan tortor cursus at. Phasellus sed ultricies mi non congue ullam
                            corper. Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta
                            lectus vitae, ultricies congue gravida diam non fringilla.
                        </p><hr/>
                    </div>
                    {/*Comments add*/}
                    <div className="w3-container">
                        <div className="w3-row">
                            <div className="w3-col">
                                <p><span className="w3-padding w3-tag">Comments</span></p>
                                <input className="w3-input w3-border" type="text"/>
                                <button className="w3-button w3-section w3-wide w3-padding-large w3-white w3-border w3-right">
                                    <b>ADD</b>
                                </button>
                            </div>
                        </div>
                    </div>

                    {/*Published comments*/}
                    <div className="w3-row w3-margin">
                        <div className="w3-col w3-margin-bottom">
                            <p><span className="w3-padding w3-tag">Published comments:</span></p>
                            <CommentsPub/>
                            <CommentsPub/>
                        </div>
                    </div>
                </div>
                <div className="w3-card-4 w3-margin w3-white">
                    <div className="w3-container">
                        <button onClick={() => this.props.history.goBack()} className="w3-button w3-section w3-padding-large w3-white w3-border w3-block">
                            <b>to main</b>
                        </button>
                    </div>
                </div>
                <Footer/>
            </>
        )
    }
}

export default PostFull;