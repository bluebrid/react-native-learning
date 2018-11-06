/**
 * 主页面
 */
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';
import CommonStyles from '../styles/Common.styles'
export default class Home extends Component {
    render() {
      return (
        <View style={CommonStyles.container}>
          <Text style={CommonStyles.welcome}>
            {this.props.title} Page
          </Text>
        </View>
      )
    }
  }
  