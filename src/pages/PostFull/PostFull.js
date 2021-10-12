import React from 'react';
import woods from './../../media/image/woods.jpg';
import Footer from "../../components/Footer/Footer";
import FormComments from "./FormComments";
import PublishedComments from "./PublishedComments";
import {toast} from "react-toastify";

class PostFull extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            post: {},
            comments:[]
        }
        this.reload = this.reload.bind(this);
        this.getCommentsByPostId = this.getCommentsByPostId.bind(this);
    }

    componentDidMount() {
        this.getPostById();
        this.getCommentsByPostId();
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

    reload(){
        this.getCommentsByPostId()
    }

    getCommentsByPostId(){
        const urlParams = `postId=${this.props.match.params.id}&_sort=id&_order=desc&_page=1&_limit=3`;
        const url = `http://localhost:3001/comments?${urlParams}`;

        fetch(url)
            .then(response => {
                if(response.ok){
                    this.setState({
                        pageCount:Math.ceil(response.headers.get('X-Total-Count') / this.state.perPage)
                    })
                    return response.json();
                } else {
                    toast.error(`Что то пошло не так. Код ошибки: ${response.status}`);
                }
            })
            .then(data => this.setState({comments:data}))
    }

    render() {
        return (
            <>
                <div className="w3-card-4 w3-margin w3-white">
                    <img src={woods} alt="Nature" style={{width: '100%'}}/>
                    <div className="w3-container">
                        <h3><b>{this.state.post.title}</b></h3>
                        <h5>{this.state.post.tag}, <span className="w3-opacity"> {this.state.post.createdData} </span>
                        </h5>
                    </div>
                    <div className="w3-container">
                        <p>{this.state.post.desc}</p>
                        <hr/>
                    </div>
                    <FormComments id={this.props.match.params.id} reload={this.reload}/>
                    <PublishedComments postId={this.props.match.params.id} comments={[]}/>
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