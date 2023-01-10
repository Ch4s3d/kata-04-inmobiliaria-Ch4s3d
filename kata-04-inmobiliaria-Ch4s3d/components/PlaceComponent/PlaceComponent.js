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
  ImageBackground,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faStar,
  faHeart,
  faLocationDot,
  faBed,
  faBath,
  faRuler,
} from '@fortawesome/free-solid-svg-icons';

export class PlaceComponent extends Component {
  constructor(props) {
    super(props);
    this.data = [];
  }

  render() {
    let place = this.props;
    let imgUrl = '../../assets/img/' + place.place.img_url;
    //console.log(imgUrl);
    return (
      <View style={styles.container}>
        <View style={styles.FavoriteButton}>
          <FontAwesomeIcon icon={faHeart} size={10} color={'white'} />
        </View>
        <View style={styles.ImageContainer}>
          <ImageBackground
            style={styles.Image}
            source={require('../../assets/img/guaranty_building.jpg')}
          />
          <View style={styles.StarContainer}>
            <FontAwesomeIcon icon={faStar} size={10} color={'#BF7839'} />
            <Text style={styles.StarContainerText}>4.7</Text>
          </View>
        </View>
        <View style={styles.Right}>
          <Text style={styles.Title}>{place.place.title}</Text>
          <View style={styles.FlexRight}>
            <FontAwesomeIcon icon={faLocationDot} size={10} color={'black'} />
            <Text style={styles.MarginLeft}>{place.place.address}</Text>
          </View>
          <View style={styles.Row}>
            <View style={styles.FlexRight}>
              <FontAwesomeIcon icon={faBed} size={15} color={'black'} />
              <Text style={styles.MarginLeft}>{place.place.bedrooms}</Text>
            </View>
            <View style={styles.FlexRight}>
              <FontAwesomeIcon icon={faBath} size={15} color={'black'} />
              <Text style={styles.MarginLeft}>{place.place.bathrooms}</Text>
            </View>
            <View style={styles.FlexRight}>
              <FontAwesomeIcon icon={faRuler} size={15} color={'black'} />
              <Text style={styles.MarginLeft}>
                {place.place.metrics}ft
                <Text style={styles.SquaredSimbol}>2</Text>{' '}
              </Text>
            </View>
          </View>
          <Text style={styles.Price}>${place.place.price}/m</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#E8F8FF',
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
    position: 'relative',
  },
  FavoriteButton: {
    width: 20,
    height: 20,
    backgroundColor: 'green',
    position: 'absolute',
    bottom: 10,
    right: 15,
    borderRadius: 25 / 2,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  ImageContainer: {
    width: 75,
    height: 75,
    marginRight: 10,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'center',
    position: 'relative',
    borderRadius: '50%',
  },
  Image: {
    width: '100%',
    height: undefined,
    aspectRatio: 1,
  },
  Right: {
    width: '75%',
  },
  Row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  StarContainer: {
    backgroundColor: '#F2D785',
    paddingTop: 5,
    paddingBottom: 5,
    paddingRight: 10,
    paddingLeft: 10,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 10,
    right: 15,
  },
  StarContainerText: {
    fontSize: 10,
    marginLeft: 2,
  },
  FlexRight: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  MarginLeft: {
    marginLeft: 5,
  },
  SquaredSimbol: {
    fontSize: 7,
  },
  Price: {
    fontWeight: 'bold',
  },
  Title: {
    fontSize: 15,
    fontWeight: 'bold',
  },
});
