import {ListItem} from 'material-ui/List';
import React from 'react';
import Divider from 'material-ui/Divider';

class ListComponent extends React.Component {
    render(){
        return(
            <div>
                <ListItem primaryText={this.props.text} onClick={this.props.handleComplete} style={{textDecoration: this.props.completed?'line-through': 'none' }} />
                <Divider/>
            </div>
            
        )
    }
}
export default ListComponent;