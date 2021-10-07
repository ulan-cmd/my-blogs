import React from 'react';
import woods from './../../media/image/woods.jpg';
import Footer from "../../components/Footer/Footer";
import FormComments from "./FormComments";
import PublishedComments from "./PublishedComments";
import Slider from 'react-slick'

class PostFull extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            post: {}
        }
    }

    componentDidMount() {
        this.getPostById();
    }

    getPostById() {
        const URL = `http://localhost:3001/posts/${this.props.match.params.id}`;

        fetch(URL)
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    alert('Упсс, что-то пошло не так. Код статуса: ', response.status);
                }
            })
            .then(data => {
                this.setState({
                    post: data,
                })
            })
    }

    render() {
        const settings = {
            dots:true,
            infinite:true,
            speed:500,
            slidesToShow:1,
            slidesToScroll:1
        }
        return (
            <>
                <div className="w3-card-4 w3-margin w3-white">
                    <img src={woods} alt="Nature" style={{width: '100%'}}/>
                    {/*<Slider {...settings}>*/}
                    {/*    <div style={{background:"red"}}>*/}
                    {/*        1*/}
                    {/*    </div>*/}
                    {/*    <div style={{background:"red"}}>*/}
                    {/*        2*/}
                    {/*    </div>*/}
                    {/*</Slider>*/}
                    <div className="w3-container">
                        <h3><b>{this.state.post.title}</b></h3>
                        <h5>{this.state.post.tag}, <span className="w3-opacity"> {this.state.post.createdData} </span>
                        </h5>
                    </div>
                    <div className="w3-container">
                        <p>{this.state.post.desc}</p>
                        <hr/>
                    </div>
                    <FormComments id={this.props.match.params.id}/>
                    <PublishedComments id={this.props.match.params.id}/>
                </div>
                <div className="w3-card-4 w3-margin w3-white">
                    <div className="w3-container">
                        <button onClick={() => this.props.history.goBack()}
                                className="w3-button w3-section w3-padding-large w3-white w3-border w3-block">
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