import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Button,
    Image,
    Dimensions,
    TextInput,
    TouchableOpacity
} from 'react-native';

import Geocode from "react-geocode";
import Test from './Test';

class ItineraryEvent1 extends Component {

    static navigationOptions = {
        header: null
    }
    

    constructor(props) {
        super(props);

        this.state = {
            isLoading: true,
            place: ''
        }
    }

     getData() {
        Geocode.setApiKey("AIzaSyAJaLdYfAS117PUPSAoWm_G-PiE-OuFC10");

        const{place} = this.state;

        Geocode.fromAddress(place).then(
            response => {
              const { lat, long } = response.results[0].geometry.location;
              Test.longLat.latitude = lat;
              Test.longLat.longitude = long;
              //console.log(lat, lng);
              this.props.navigation.navigate('test');
            },
            error => {
              console.error(error);
            }
          );
    }


    render() {


        return (
            <View style={styles.container}>
                <View style={styles.position}>
                </View>
                <Text style={styles.header}> Taman Ayun Temple </Text>
                <Text style={styles.words}> Taman Ayun Temple was built in 1634 by the King of
                </Text>
                <Text style={styles.words}> MengWi. It is set in the middle of magnificent gardens
                </Text>
                <Text style={styles.words}> and ponds and surrounded by a moat, with access via
                </Text>
                <Text style={styles.words}> the bridge. It is one of the most beautiful temples in Bali.
                </Text>

                <Image style={styles.inputIcon} source={require('../Pictures/temple.jpg')} />

                <View style={styles.inputContainer}>
                    <TextInput style={styles.inputs}
                        placeholder="Longtiude"
                        keyboardType="email-address"
                        underlineColorAndroid='transparent'
                        onChangeText={(place) => this.setState({ place })} />
                </View>

                <TouchableOpacity
                    style={styles.button}
                    onPress={() => this.getData()}
                >
                <Text> NEXT </Text>
                </TouchableOpacity>

            </View>
        )
    }
}


export default ItineraryEvent1;

const styles = StyleSheet.create({

    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#ffd700'

    },
    textStyles: {
        color: 'white',
        fontSize: 40,
        fontWeight: 'bold'
    },
    position: {
        position: 'absolute',
        top: 100,
        bottom: 0,
        left: 0,
        right: 0,
    },
    header: {
        fontSize: 30,
        fontWeight: 'bold',
        marginTop: 20,
        fontStyle: 'italic',
        alignItems: 'center'
    },
    words: {
        fontSize: 15,
        textAlign: 'center',
    },
    inputContainer: {
        borderBottomColor: '#F5FCFF',
        backgroundColor: '#FFFFFF',
        borderRadius: 30,
        borderBottomWidth: 1,
        width: 250,
        height: 45,
        marginBottom: 20,
        flexDirection: 'row',
        alignItems: 'center',
        top: 50,
        bottom: 20
    },
    inputIcon: {
        width: 300,
        height: 200,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40,
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#ff0000',
        padding: 10,
        marginTop: 50
    },
    inputs: {
        height: 45,
        marginLeft: 16,
        borderBottomColor: '#FFFFFF',
        flex: 1,
    },
})