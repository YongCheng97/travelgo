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

class ItineraryDay1 extends Component {

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

    render() {

        const scrollEnabled = this.state.screenHeight > height;
        return (
            <ScrollView contentContainerStyle={styles.contentContainer}
                scrollEnabled={scrollEnabled}
                onContentSizeChange={this.onContentSizeChange}
            >
                <Text style={styles.header}>  DAY 1 </Text>
                <Text style={styles.header2}> Click The Places For More Information!!</Text>

                <View style = {styles.box}>
                <Text 
                style ={styles.words}
                onPress={() => this.props.navigation.navigate('itineraryEvent1')}
                >
                    Arrival, Taman Ayun Temple
                </Text>

                <Image style={styles.inputIcon} source={require('../Pictures/temple2.jpg')} />
                </View>

                <View style = {styles.box}>
                <Text 
                onPress={() => this.props.navigation.navigate('itineraryEvent2')}
                style ={styles.words}>
                    Pasar Candi Kuning
                </Text>

                <Image style={styles.inputIcon} source={require('../Pictures/market2.jpg')} />
                </View>

                <View style = {styles.box}>
                <Text 
                onPress={() => this.props.navigation.navigate('itineraryDay1')}
                style ={styles.words}>
                    Lunch, Jatiluwih Green Land
                </Text>

                <Image style={styles.inputIcon} source={require('../Pictures/green.jpg')} />
                </View>

                <View style = {styles.box}>
                <Text 
                onPress={() => this.props.navigation.navigate('itineraryDay1')}
                style ={styles.words}>
                    Ulun Danu Bratan Temple
                </Text>

                <Image style={styles.inputIcon} source={require('../Pictures/uluntemple.jpg')} />
                </View>

                <View style = {styles.box}>
                <Text 
                onPress={() => this.props.navigation.navigate('itineraryDay1')}
                style ={styles.words}>
                    Tanah Lot Temple
                </Text>

                <Image style={styles.inputIcon} source={require('../Pictures/tanahtemple.jpg')} />
                </View>

                <View style = {styles.box}>
                <Text 
                onPress={() => this.props.navigation.navigate('itineraryDay1')}
                style ={styles.words}>
                    Dinner, Echo Beach Club
                </Text>

                <Image style={styles.inputIcon} source={require('../Pictures/beachclub.jpg')} />
                </View>

                <View style = {styles.box}>
                <Text 
                onPress={() => this.props.navigation.navigate('itineraryDay1')}
                style ={styles.words}>
                    Sleep And Rest
                </Text>

                <Image style={styles.inputIcon} source={require('../Pictures/hotel.jpg')} />
                </View>

            </ScrollView>
        )
    }
}

export default ItineraryDay1;

const styles = StyleSheet.create({

    contentContainer: {
        flexGrow: 1,
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
        fontWeight: 'bold',
        top : 20,
        bottom: 20,
        fontStyle: 'italic',
    },
    header2: {
        fontSize: 20,
        marginTop: 20,
        fontStyle: 'italic',
    },
    box: {
        marginTop: 20,
        borderColor: 'black',
        borderWidth: 0.8,
        padding: 15,
    },
    words: {
        fontSize: 20,
        marginTop: 30,
        alignItems: 'center',
        fontStyle: 'italic',
        textAlign: 'center',
        fontFamily: 'sans-serif'
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
        marginTop: 15,
    },
})