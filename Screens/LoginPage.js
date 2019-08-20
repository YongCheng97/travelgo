import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Button,
    Image,
    Dimensions,
    TextInput,
    TouchableOpacity,
} from 'react-native';

class LoginPage extends Component {

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

        if (this.state.isLoading) {
            return <SplashScreen />;
        }

        return (
            <View style={styles.container}>
                <View style={styles.position}>
                </View>

            <Image style={styles.pic} source ={require('../Pictures/world.png') }
                />

                <Text style={styles.topHeader}> Hello There! </Text>
                <Text style={styles.bottomHeader}> Let's Start Planning Your Holiday </Text>

                <TouchableOpacity
                    style={styles.button}
                    onPress={() => this.props.navigation.navigate('loginScreen')}
                >
                <Text> Sign In </Text>
                </TouchableOpacity>

                <Text 
                    style = {styles.bottom}
                    onPress={() => this.props.navigation.navigate('newProfile')}
                >
                Click Here If You Do Not Have An Account </Text>

            </View>

        )
    }

}
class SplashScreen extends React.Component {


    render() {

        const viewStyles = [styles.splash, { backgroundColor: 'deepskyblue' }];

        return (
            <View style={viewStyles}>
                <Image
                    style={{
                        alignSelf: 'center',
                        height: 150,
                        width: 150,
                    }}
                    source={require('../Pictures/world.png')}
                />
                <Text style={styles.textStyles}>
                    TravelGo
          </Text>
            </View>
        );
    }
}

export default LoginPage;

const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffd700',

    },
    position: {
        position: 'absolute',
        top: 100,
        bottom: 0,
        left: 0,
        right: 0,
    },
    splash: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    textStyles: {
        color: 'black',
        fontSize: 40,
        fontWeight: 'bold'
    },
    pic: {
        flex: 0.5,
        width: 200,
        height: 200,
        resizeMode: 'contain',
    },
    topHeader: {
        fontSize: 20,
        fontWeight: '300',
        fontStyle: 'italic',
        textAlign: 'center',
        bottom: 20,
    },
    bottomHeader: {
        fontSize: 20,
        fontWeight: '300',
        fontStyle: 'italic',
        bottom: 20
    },

    button: {
        alignItems: 'center',
        backgroundColor: '#ff0000',
        padding: 10
    },

    bottom: {
        fontSize: 15,
        top: 10,
        fontWeight: 'bold'
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
})