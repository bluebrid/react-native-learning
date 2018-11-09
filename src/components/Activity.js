import React, {Component} from 'C:/Users/Ivan_Fan.PRINCETON/AppData/Local/Microsoft/TypeScript/2.9/node_modules/@types/react';
import {
  StyleSheet,
  Text,
  View,
  NativeModules,
} from 'react-native';
 
export default class Activity extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.instructions} onPress={() => this.onClick()}>
          点我
        </Text>
      </View>
    );
  }
 
  /**
   * 调用原生页面
   * ControlPCActivity是你想跳转到的页面
   */
  onClick() {
    NativeModules.MyMapIntentModule.startActivityByClassname('com.awesomeproject.ControlPCActivity')  
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});