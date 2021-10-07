import React from "react";

class CommentsPub extends React.Component {
    render() {
        return (
            <>
                <div className="w3-row w3-padding">
                    <div className="w3-panel " style={{borderLeft: '4px solid #817c7c'}}>
                        <p><i className="material-icons"></i> <b>{this.props.obj.name}</b>, <span
                            className="w3-opacity">{this.props.obj.createdDate}</span>
                        </p>
                        <p>{this.props.obj.comments}</p>
                    </div>
                </div>
            </>

        )
    }
}

export default CommentsPub;