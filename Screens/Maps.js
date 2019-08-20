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
import MapView from 'react-native-maps'

class Maps extends Component {

    static navigationOptions = {
        header: null
    }
    

    constructor(props) {
        super(props);
        /*
        this.state = {
            isLoading: true,
            email: '',
            password: '',
        }
        */
    }

    render() {


        return (
            <View style={styles.container}>
                <MapView
                    style = {styles.map}
                    initialRegion={{
                    latitude: 37.78825,
                    longitude: -122.4324,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                    }}
                >
                {!!this.state.latitude && !!this.state.longitude && <MapView.Marker
                coordinate={{"latitude":this.state.latitude,"longitude":this.state.longitude}}
                title={"Your Location"}
                />}
                </MapView>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => this.props.navigation.navigate('genre')}
                >
                <Text> NEXT </Text>
                </TouchableOpacity>                
            </View>
        )
    }
}


export default Maps;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    map: {
        flex: 1,
    },

    button: {
        alignItems: 'center',
        backgroundColor: '#ff0000',
        padding: 10,
        marginTop: 50
    }
})