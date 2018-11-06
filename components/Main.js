/**
 * 主页面
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    StyleSheet,
    Text,
    View,
    Image,
    Platform
} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
// import {observer} from 'mobx-react';
// import NavConfig from '../configs/Menu';
import Home from '../components/Home';
import Message from '../components/Message';
import Find from '../components/Find';
import Mine from '../components/Mine';
const NavConfig =  [
    {
        name: 'Home',
        title: 'Home',
        icon: 'icon_tabbar_home',
        selectedIcon: 'icon_tabbar_home_selected',
        badgetText: '1',
        child: title => <Home title={title}/>
    },
    {
        name: 'Message',
        title: 'Message',
        icon: 'icon_tabbar_message',
        selectedIcon: 'icon_tabbar_message_selected',
        badgetText: '2',
        child: title => <Message title={title}/>
    },
    {
        name: 'Find',
        title: 'Find',
        icon: 'icon_tabbar_find',
        selectedIcon: 'icon_tabbar_find_selected',        
        child: title => <Find title={title}/>
    },
    {
        name: 'Mine',
        title: 'Mine',
        icon: 'icon_tabbar_mine',
        selectedIcon: 'icon_tabbar_mine_selected',
        child: title => <Mine title={title}/>
    }
]
// @observer
export default class Main extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedTab:'Home'
        }
    }
    static propTypes = {
        // store: PropTypes.object.isRequired
    }
    render() {
        // const store = this.props.store;
        return (
            <TabNavigator>
                {
                    NavConfig.map((nav, index) => 
                        <TabNavigator.Item
                        key = {nav.name}
                        title={nav.title}
                        renderIcon={() => <Image source={{uri:nav.icon}} style={styles.iconStyle} />}
                        renderSelectedIcon={() => <Image source={{uri:nav.selectedIcon}} style={styles.iconStyle} />}
                        selected ={ this.state.selectedTab === nav.title}
                        onPress={() => this.setState({ selectedTab: nav.title })}                     
                        selectedTitleStyle={styles.selectedTitleStyle}   
                        badgeText={nav.badgetText}                        
                        // badgeText={nav.badgetText && nav.badgetText(store[nav.name])}
                        >                    
                        {nav.child(nav.title)}
                    
                    </TabNavigator.Item>
                    )
                } 
            </TabNavigator>
        )
    }
} 
const styles = StyleSheet.create({
    // icon默认样式
    iconStyle:{
        width: Platform.OS === 'ios' ? 30 : 25,
        height:Platform.OS === 'ios' ? 30 : 25,
    },
    // tabBarItem选中的文字样式
    selectedTitleStyle:{
        color: 'rgba(212,97,0,1)',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
      },
      welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
      },
      instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
      },
});