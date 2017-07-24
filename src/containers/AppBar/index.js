import AppBar from 'material-ui/AppBar';
import React from 'react';
class MyAppBar extends React.Component {
    render(){
        return(
            <AppBar
                title="Title"
                iconClassNameRight="muidocs-icon-navigation-expand-more"
            />
        )
    }
}
export default MyAppBar ;