import React from 'react';
class Link extends React.Component {
    handleClick = (e) => {
        e.preventDefault();
        console.log("aaaaa");
        this.props.handleClickLink(this.props.filter);
    }
    render() {
        return(
            <a href="#" onClick={this.handleClick}>{this.props.text}</a>
        )
    }
}
export default Link;