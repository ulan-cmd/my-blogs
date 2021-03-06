import React from 'react';
import CommentsPub from "../../components/CommentsPub/CommentsPub";
import {toast} from "react-toastify";
import ReactPaginate from 'react-paginate';

class PublishedComments extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            comments:[],
            pagination:true,
            error:null,
            isLoaded:false,
            //offset:0,
            perPage:3,
            currentPage:1,
        }

        this.showCommentsWithPagination = this.showCommentsWithPagination.bind(this);
        this.handlePageClick = this.handlePageClick.bind(this);
        this.getCommentsByPostId = this.getCommentsByPostId.bind(this);
    }

    componentDidMount() {
        this.getCommentsByPostId();
    }

    showCommentsWithPagination(data = []){
        this.setState({
            isLoaded:true,
            comments:data
        })
        // if (this.props.comments.length === 0){
        //     this.setState({
        //         isLoaded:true,
        //         comments:data
        //     })
        // }  else {
        //     this.setState({
        //         isLoaded:true,
        //         comments:this.props.comments
        //     })
        // }
    }

    getCommentsByPostId(){
        const urlParams = `postId=${this.props.postId}&_sort=id&_order=desc&_page=${this.state.currentPage}&_limit=${this.state.perPage}`;
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
            .then(data => this.showCommentsWithPagination(data))
    }

    handlePageClick(e){
        const selectedPage = e.selected;

        this.setState({
            currentPage:selectedPage+1
        },()=>{
            this.getCommentsByPostId()
        })
    }

    render() {
        const {error, isLoaded, comments} = this.state;

        if(error){
            return <h1>Ошибка</h1>;
        } else if(!isLoaded){
            return <h1>Загрузка...</h1>
        } else{
            return (
                <div className="w3-row w3-margin">
                    <div className="w3-col w3-margin-bottom">
                        <p><span className="w3-padding w3-tag">Published comments:</span></p>
                        {
                            comments.map(item => (
                                <CommentsPub key={item.id} obj={item}/>
                            ) )
                        }
                    </div>
                    <ReactPaginate
                        previousLabel={'Назад'}
                        nextLabel={'Следующий'}
                        breakLabel={'...'}
                        pageCount={3}
                        marginPagesDisplayed={2}
                        pageRangeDisplayed={5}
                        onPageChange={this.handlePageClick}
                        containerClassName={'pagination'}
                        activeClassName={'active'}
                        nextLinkClassName={'asd'}
                    />
                </div>
            )
        }
    }
}

export default PublishedComments;