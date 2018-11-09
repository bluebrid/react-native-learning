
import React, { Component } from 'react';
import {observer, inject } from 'mobx-react';
import {
  FlatList,
  View
} from 'react-native';
import Card from '../components/Card'
@inject("homeStore")
@observer
export default class Home extends Component {
  componentDidMount() {
     this.props.homeStore.getUsersList();
  }
  render() {
    const homeStore = this.props.homeStore;
    return (
      <View>
        <FlatList
          data={ homeStore.users}
          renderItem={({item}) => <Card key={item.id} item={item} />}
        />
        </View>
    )
  }
}
