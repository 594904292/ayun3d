import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import {setToggle} from '../../routes/Header'

import classes from './Header.scss'
import {Toolbar, ToolbarGroup, ToolbarSeparator} from 'material-ui/Toolbar'
import { IndexLink, Link } from 'react-router'
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'
import FontIcon from 'material-ui/FontIcon'
import FlatButton from 'material-ui/FlatButton'
import RaisedButton from 'material-ui/RaisedButton'
import { DatePicker } from 'antd'
import 'antd/dist/antd.css'

const styles = {
    toolBar: {
        backgroundColor: 'rgb(255,255,255)'
    }
}

class Header extends Component {
    constructor(props, context) {
        super(props, context);
    };

    render () {
        const { dock_isopen, handleToggle } = this.props
        return (
            <Toolbar style={styles.toolBar}>
                <ToolbarGroup>
                    <IndexLink to='/' className='navlogo' activeClassName={classes.activeRoute}>
                        <img src="images/3ds-logo.png"/>
                    </IndexLink>
                  <FontIcon onClick={handleToggle} onTouchTap={handleToggle}  className="material-icons">menu</FontIcon>
                  <Drawer open={dock_isopen}>
                    <MenuItem>Menu Item</MenuItem>
                    <MenuItem>Menu Item 2</MenuItem>
                    <MenuItem>Menu Item 3</MenuItem>
                  </Drawer>
                </ToolbarGroup>
                <ToolbarGroup>
                    <FlatButton label="比价" primary={true}/>
                    <FlatButton label="API" primary={true} />
                    <FlatButton label="演示" secondary={true}/>
                    <ToolbarSeparator />
                    <RaisedButton label="加入" primary={true}/>
                    <DatePicker/>
                </ToolbarGroup>
            </Toolbar>
        )
    }
}

Header.propTypes = {
    dock_isopen: React.PropTypes.bool.isRequired,
    handleToggle: React.PropTypes.func.isRequired
}

const mapActionCreators = {
    handleToggle:() => setToggle(false)
}

const mapStateToProps = (state) => ({
    dock_isopen: state.dock_isopen
})

export default connect(mapStateToProps, mapActionCreators)(Header)
