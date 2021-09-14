import React from "react";

class CommentsPub extends React.Component {
    render() {
        return (
            <>
                <div className="w3-row w3-padding">
                    <div className="w3-panel " style={{borderLeft: '4px solid #817c7c'}}>
                        <p><i className="material-icons">person</i> <b>Person</b>, <span
                            className="w3-opacity">April 7, 2014</span>
                        </p>
                        <p>London is the most populous city in the United Kingdom,
                            with a metropolitan area of over 9 million inhabitants.London is the most
                            populous city in the United Kingdom, with a metropolitan area of over
                            9 million inhabitants.
                        </p>
                    </div>
                </div>
                <div className="w3-row w3-padding">
                    <div className="w3-panel " style={{borderLeft: '4px solid #817c7c'}}>
                        <p><i className="material-icons">person</i> <b>Person</b>, <span
                            className="w3-opacity">May 27, 2021</span>
                        </p>
                        <p>London is the most populous city in the United Kingdom,
                            with a metropolitan area of over 9 million inhabitants.London is the most
                            populous city in the United Kingdom, with a metropolitan area of over
                            9 million inhabitants.
                        </p>
                    </div>
                </div>
            </>

        )
    }
}

export default CommentsPub;