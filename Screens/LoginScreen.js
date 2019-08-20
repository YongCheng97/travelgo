import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
    Dimensions,
    TextInput,
    ImageBackground
} from 'react-native';
import Firebase from '../database/Firebase'

class LoginScreen extends Component {

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

    performTimeConsumingTask = async () => {
        return new Promise((resolve) =>
            setTimeout(
                () => { resolve('result') },
                2000
            )
        );
    }

    async componentDidMount() {
        // Preload data from an external API
        // Preload data using AsyncStorage
        const data = await this.performTimeConsumingTask();

        if (data !== null) {

            this.setState({
                isLoading: false
            });
        }
    }

    async login() {
        try{
            await Firebase.auth.signInWithEmailAndPassword(this.state.email, this.state.password);
            this.props.navigation.navigate('user');
        } catch (e) {
            alert (e);
        }
    }

    render() {


        return (
            <View style={styles.container}>
                <View style={styles.position}>
                </View>
                <Text style={styles.header}>  Log in </Text>

                <View style={styles.inputContainer}>
                    <Image style={styles.inputIcon} source={{ uri: 'https://img.icons8.com/offices/26/000000/new-post.png' }} />
                    <TextInput style={styles.inputs}
                        placeholder="Email"
                        keyboardType="email-address"
                        underlineColorAndroid='transparent'
                        onChangeText={(email) => this.setState({ email })} />
                </View>

                <View style={styles.inputContainer}>
                    <Image style={styles.inputIcon} source={{ uri: 'https://png.icons8.com/key-2/ultraviolet/50/3498db' }} />
                    <TextInput style={styles.inputs}
                        placeholder="Password"
                        secureTextEntry={true}
                        underlineColorAndroid='transparent'
                        onChangeText={(password) => this.setState({ password })} />
                </View>

                <Text style = {styles.pw}> Forgot your password? </Text>

                <TouchableOpacity
                    style={styles.button}
                    onPress={() => this.login()}
                >
                <Text> START </Text>
                </TouchableOpacity>
            </View>
        )
    }

}

export default LoginScreen;

const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffd700'

    },
    position: {
        position: 'absolute',
        top: 100,
        bottom: 0,
        left: 0,
        right: 0,
    },
    header: {
        fontSize: 40,
        fontWeight: '300',
        bottom: 20,
        marginTop: 70
    },
    pw: {
        fontWeight: 'bold',
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
        alignItems: 'center'
    },
    inputIcon: {
        width: 30,
        height: 30,
        marginLeft: 15,
        justifyContent: 'center'
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
        marginTop: 20,
        padding: 10,
    },
})