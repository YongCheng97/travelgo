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
import Firebase from '../database/Firebase'

class NewProfile extends Component {

    static navigationOptions = {
        header: null
    }
    

    constructor(props) {
        super(props);

        this.state = {
            isLoading: true,
            name: '',
            email: '',
            password: '',
        }
    }
    /*
    async createAcc() {
        const{email} = this.state;
        Firebase.registrationInfo.email = email;
        const{name} = this.state;
        Firebase.registrationInfo.name = name;

        try{

            await Firebase.auth.createUserWithEmailAndPassword(email, this.state.password);
            Firebase.writeUserData(email, name);
            this.props.navigation.navigate('LoginScreen');

        } catch (e) {

            alert(e + " Error creating user: The email is already taken or it is an invalid email");
            
        }

    }
    */

    async createAcc() {
        const{email} = this.state;
        //Firebase.registrationInfo.email = email;
        const{name} = this.state;
        //Firebase.registrationInfo.name = name;

        try{

            await Firebase.auth.createUserWithEmailAndPassword(email, this.state.password);
            Firebase.registrationInfo.email = email;
            Firebase.registrationInfo.name = name;
            Firebase.writeUserData(email, name);
            this.props.navigation.navigate('loginScreen');

        } catch (e) {

            alert(e + " Error creating user: The email is already taken or it is an invalid email");
            
        }

    }

    render() {


        return (
            <View style={styles.container}>
                <View style={styles.position}>
                </View>
                <Text style={styles.header}>  Create Your Account! </Text>

                <View style={styles.inputContainer}>
                    <TextInput style={styles.inputs}
                        placeholder="Name"
                        keyboardType="email-address"
                        underlineColorAndroid='transparent'
                        onChangeText={(name) => this.setState({ name })} />
                </View>

                <View style={styles.inputContainer}>
                    <TextInput style={styles.inputs}
                        placeholder="Email Address"
                        keyBoardType="email-address"
                        underlineColorAndroid='transparent'
                        onChangeText={(email) => this.setState({ email })} />
                </View>

                <View style={styles.inputContainer}>
                    <TextInput style={styles.inputs}
                        placeholder="Confirm Email Address"
                        keyBoardType="email-address"
                        underlineColorAndroid='transparent'
                        onChangeText={(email) => this.setState({ email })} />
                </View>

                <View style={styles.inputContainer}>
                    <TextInput style={styles.inputs}
                        placeholder="Password"
                        secureTextEntry={true}
                        underlineColorAndroid='transparent'
                        onChangeText={(password) => this.setState({ password })} />
                </View>

                <View style={styles.inputContainer}>
                    <TextInput style={styles.inputs}
                        placeholder="Confirm Password"
                        secureTextEntry={true}
                        underlineColorAndroid='transparent'
                        onChangeText={(password) => this.setState({ password })} />
                </View>

                <TouchableOpacity
                    style={styles.button}
                    onPress={() => this.createAcc()}
                >
                <Text> ENTER </Text>
                </TouchableOpacity>

            </View>
        )
    }
}


export default NewProfile;

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
        fontWeight: '300',
        top : 20,
        bottom: 20,
        fontStyle: 'italic',
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