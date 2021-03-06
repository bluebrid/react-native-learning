/**
 * 主页面
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    StyleSheet,
    Image,
    Platform
} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import {observer, inject } from 'mobx-react';
// import NavConfig from '../configs/Menu';
import Home from './Home';
import Message from './Message';
import Find from './Find';
import Mine from './Mine';
const NavConfig =  [
    {
        name: 'Home',
        store: 'homeStore',
        title: 'Home',
        icon: 'icon_tabbar_home',
        selectedIcon: 'icon_tabbar_home_selected',
        badgetText: store => store.usersCount,
        child: title => <Home title={title}/>
    },
    {
        name: 'Message',
        title: 'Message',
        store: 'messageStore',
        icon: 'icon_tabbar_message',
        selectedIcon: 'icon_tabbar_message_selected',
        badgetText: store => store.usersCount,
        child: title => <Message title={title}/>
    },
    {
        name: 'Find',
        title: 'Find',
        store: 'findStore',
        icon: 'icon_tabbar_find',
        selectedIcon: 'icon_tabbar_find_selected',        
        child: title => <Find title={title}/>
    },
    {
        name: 'Mine',
        title: 'Mine',
        store: 'mineStore',
        icon: 'icon_tabbar_mine',
        selectedIcon: 'icon_tabbar_mine_selected',
        child: title => <Mine title={title}/>
    }
]
@inject("findStore")
@inject("homeStore")
@inject("messageStore")
@inject("mineStore")
@observer
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
        const store = this.props;
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
                        badgeText={nav.badgetText && nav.badgetText(store[nav.store])}
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