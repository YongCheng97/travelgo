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

class User extends Component {

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

    render() {


        return (
            <View style={styles.container}>
                <View style={styles.position}>
                </View>
                <Text style={styles.header}>  Tell Us More... </Text>

                <View style={styles.inputContainer}>
                    <TextInput style={styles.inputs}
                        placeholder="Country"
                        keyboardType="email-address"
                        underlineColorAndroid='transparent'
                        onChangeText={(email) => this.setState({ email })} />
                </View>

                <View style={styles.inputContainer}>
                    <TextInput style={styles.inputs}
                        placeholder="Start Date(DD/MM/YYYY)"
                        keyBoardType="email-address"
                        underlineColorAndroid='transparent'
                        onChangeText={(password) => this.setState({ password })} />
                </View>

                <View style={styles.inputContainer}>
                    <TextInput style={styles.inputs}
                        placeholder="End Date(DD/MM/YYYY)"
                        keyBoardType="email-address"
                        underlineColorAndroid='transparent'
                        onChangeText={(password) => this.setState({ password })} />
                </View>

                <View style={styles.inputContainer}>
                    <TextInput style={styles.inputs}
                        placeholder="Number of People"
                        keyBoardType="email-address"
                        underlineColorAndroid='transparent'
                        onChangeText={(password) => this.setState({ password })} />
                </View>

                <View style={styles.inputContainer}>
                    <TextInput style={styles.inputs}
                        placeholder="Accommodation Address"
                        keyBoardType="email-address"
                        underlineColorAndroid='transparent'
                        onChangeText={(password) => this.setState({ password })} />
                </View>

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


export default User;

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
        fontSize: 40,
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