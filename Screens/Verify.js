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

class Verify extends Component {

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
                <Text style={styles.header}> Please Key In Your Verification Code Below </Text>

                <View style={styles.inputContainer}>
                    <TextInput style={styles.inputs}
                        placeholder="Email Verification Code"
                        keyboardType="email-address"
                        underlineColorAndroid='transparent'
                        onChangeText={(email) => this.setState({ email })} />
                </View>

                <TouchableOpacity
                    style={styles.button}
                    onPress={() => this.props.navigation.navigate('user')}
                >
                <Text> ENTER </Text>
                </TouchableOpacity>

            </View>
        )
    }
}


export default Verify;

const styles = StyleSheet.create({

    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
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
        fontSize: 20,
        fontWeight: '300',
        top : 20,
        bottom: 20,
        fontStyle: 'italic',
        alignItems: 'center'
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
    inputs: {
        height: 45,
        marginLeft: 16,
        borderBottomColor: '#FFFFFF',
        flex: 1,
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#ff0000',
        padding: 10,
        marginTop: 50
    }
})