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

class ItineraryEvent2 extends Component {

    static navigationOptions = {
        header: null
    }
    

    constructor(props) {
        super(props);

        this.state = {
            isLoading: true,
            email: '',
            password: '',
        }
    }

    render() {


        return (
            <View style={styles.container}>
                <View style={styles.position}>
                </View>
                <Text style={styles.header}> Pasar Candi Kuning </Text>
                <Text style={styles.words}> Pasar Candi Kuning is a traditional market selling fruit, 
                </Text>
                <Text style={styles.words}> vegetables and flowers. The produce sold here is locally
                </Text>
                <Text style={styles.words}> grown in the rich, fertile fields which benefit from a cooler 
                </Text>
                <Text style={styles.words}> climate higher up. Here you will find all the exotic fruits of 
                </Text>
                <Text style={styles.words}> Bali (when in season), and spices in abundance.
                </Text>

                <Image style={styles.inputIcon} source={require('../Pictures/market.jpg')} />

                <TouchableOpacity
                    style={styles.button}
                    onPress={() => this.props.navigation.navigate('itineraryDay1')}
                >
                <Text> BACK </Text>
                </TouchableOpacity>

            </View>
        )
    }
}


export default ItineraryEvent2;

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
    }
})