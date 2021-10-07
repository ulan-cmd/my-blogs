import React from 'react';
import {toast} from 'react-toastify';

class FormComments extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name:"",
            comments:""
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.saveComments = this.saveComments.bind(this);
    }

    handleChange(event){
        this.setState({
            [event.target.id]:event.target.value
        })
    }

    handleSubmit(){
       let obj = this.state;
       obj.createdDate = new Date().toLocaleString();
       obj.postId = this.props.id;

       this.saveComments(obj);
    }

    saveComments(obj){
        const url = 'http://localhost:3001/comments';
        let options = {
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(obj)
        }

        fetch(url, options)
            .then(response => {
                if(response.ok){
                    toast.success('Ваш комментарий добавлен');
                } else {
                    toast.error(`Что то пошло не так. Код ошибки:${response.status}`);
                }
            })

    }

    render() {
        return (
            <div className="w3-container">
                <div className="w3-row">
                    <div className="w3-col">
                        <p><span className="w3-padding w3-tag">Comments</span></p>
                        <input
                            className="w3-input w3-border w3-margin-bottom"
                            placeholder="Введите имя"
                            type="text"
                            id="name"
                            onChange={this.handleChange}
                        />
                        <textarea
                            className="w3-input w3-border"
                            placeholder="Введите комментарий"
                            id="comments"
                            onChange={this.handleChange}
                        />
                        <button
                            className="w3-button w3-section w3-wide w3-padding-large w3-white w3-border w3-right"
                            onClick={this.handleSubmit}
                        >
                            <b>ADD</b>
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

export default FormComments;