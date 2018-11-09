/**
 * React Native按钮使用详解
 * Author: CrazyCodeBoy
 * 技术博文：http://www.devio.org
 * GitHub:https://github.com/crazycodeboy
 * Email:crazycodeboy@gmail.com
 */
import React, {Component} from 'react';
import Main from './src/containers/Main'; 
import store from './src/stores';
import { Provider } from "mobx-react";
export default class App extends Component {
    state = {
        count: 0,
        countLong: 0,
        text: '',
        waiting: false,
        startTime: 0
    }

    render() {
        return (
            <Provider {...store}>
                <Main/>
             </Provider>
        );
    }
}
