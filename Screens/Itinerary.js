import React, { Component } from 'react';
import {
    View,
    ScrollView,
    Text,
    StyleSheet,
    Button,
    Image,
    Dimensions,
    TextInput,
    TouchableOpacity,
} from 'react-native';

const { height } = Dimensions.get('window');

class Itinerary extends Component {

    static navigationOptions = {
        header: null
    }

    state = {
        screenHeight: height,
    };
    
    onContentSizeChange = (contentWidth, contentHeight) => {
        this.setState({ screenHeight: contentHeight });
    };

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
                8000
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

        const scrollEnabled = this.state.screenHeight > height;
        return (
            <ScrollView contentContainerStyle={styles.contentContainer}
                scrollEnabled={scrollEnabled}
                onContentSizeChange={this.onContentSizeChange}
            >
                <Text style={styles.header}>  Itinerary List </Text>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('itineraryDay1')}>
                    <Image style={styles.inputIcon} source={require('../Pictures/day1.jpg')} />
                </TouchableOpacity>
                
                <Text style ={styles.words}>
                        DAY 1
                </Text>

                <TouchableOpacity onPress={() => this.props.navigation.navigate('maps')}>
                    <Image style={styles.inputIcon} source={require('../Pictures/day2.jpg')} />
                </TouchableOpacity>
                
                <Text style ={styles.words}>
                        DAY 2
                </Text>

                <TouchableOpacity onPress={() => this.props.navigation.navigate('itinerary')}>
                    <Image style={styles.inputIcon} source={require('../Pictures/day3.jpg')} />
                </TouchableOpacity>
                
                <Text style ={styles.words}>
                        DAY 3
                </Text>

                <TouchableOpacity onPress={() => this.props.navigation.navigate('itinerary')}>
                    <Image style={styles.inputIcon} source={require('../Pictures/day4.jpg')} />
                </TouchableOpacity>
                
                <Text style ={styles.words}>
                        DAY 4
                </Text>

            </ScrollView>
        )
    }
}

class SplashScreen extends React.Component {


    render() {

        const viewStyles = [styles.splash, { backgroundColor: 'deepskyblue' }];

        return (
            <View style={viewStyles}>
                <Text style={styles.textStyles}>
                    Please Hold On While
                </Text>
                <Text style={styles.textStyles}>
                    We Generate Your Itinerary...
                </Text>
                <Image 
                    source={require('./../Pictures/spinner.gif')}  
                    style={{width: 100, height: 100 }}
                />
            </View>

        );
    }
}

export default Itinerary;

const styles = StyleSheet.create({

    contentContainer: {
        flexGrow: 1,
        alignItems: 'center',
        backgroundColor: '#ffd700'

    },
    textStyles: {
        color: 'black',
        fontSize: 20,
        fontWeight: 'bold',
        alignItems: 'center'
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
    header: {
        fontSize: 40,
        fontWeight: 'bold',
        top : 20,
        bottom: 20,
        fontStyle: 'italic',
    },
    words: {
        fontSize: 30,
        alignItems: 'center',
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
    inputIcon: {
        width: 300,
        height: 200,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40,
    },
})