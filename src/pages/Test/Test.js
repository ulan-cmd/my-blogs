import React from 'react';
import * as qs from 'qs';

class Test extends React.Component{
    constructor(props) {
        super(props);

        this.parseString();
    }

    parseString(){
        let str = this.props.location.search;

        str = qs.parse(str, {ignoreQueryPrefix: true, parameterLimit: 1000});
        console.log(str);
    }

    render(){
        return <h1>Test page</h1>
    }
}

export default Test;