import React, {Component, useEffect} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  ScrollView,
  Button,
  TouchableHighlight,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {PlaceComponent} from '../PlaceComponent/PlaceComponent';

export class SearchScreen extends Component {
  constructor(props) {
    super(props);
    this.data = [];
  }

  render() {
    this.data = require('../places.json');
    //console.log(this.data);

    return (
      <ScrollView style={styles.container}>
        {this.data.map((place, index) => (
          <View style={styles.component} key={index}>
            <PlaceComponent place={place} />
          </View>
        ))}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: '#ffffff',
  },
  component: {
    marginBottom: 20,
  },
});
