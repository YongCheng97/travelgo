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

class Genre extends Component {

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
                <Text style={styles.header}>  What Kind Of Holiday Are You Looking For? </Text>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('itinerary')}>
                    <Image style={styles.inputIcon} source={require('../Pictures/familyphoto.jpg')} />
                </TouchableOpacity>
                
                <Text style ={styles.words}>
                        Family-Friendly
                </Text>

                <TouchableOpacity onPress={() => this.props.navigation.navigate('itinerary')}>
                    <Image style={styles.inputIcon} source={require('../Pictures/scenicphotos.jpg')} />
                </TouchableOpacity>
                    
                <Text style ={styles.words}>
                    Scenic
                </Text>

                <TouchableOpacity onPress={() => this.props.navigation.navigate('itinerary')}>
                    <Image style={styles.inputIcon} source={require('../Pictures/religious.jpg')} />
                </TouchableOpacity>
                    
                <Text style ={styles.words}>
                    Religious
                </Text>

                <TouchableOpacity onPress={() => this.props.navigation.navigate('itinerary')}>
                    <Image style={styles.inputIcon} source={require('../Pictures/adventurephoto.jpg')} />
                </TouchableOpacity>
                    
                <Text style ={styles.words}>
                    Adventure
                </Text>

                <TouchableOpacity onPress={() => this.props.navigation.navigate('itinerary')}>
                    <Image style={styles.inputIcon} source={require('../Pictures/beachphotos.jpg')} />
                </TouchableOpacity>
                    
                <Text style ={styles.words}>
                    Beach
                </Text>

                <TouchableOpacity onPress={() => this.props.navigation.navigate('itinerary')}>
                    <Image style={styles.inputIcon} source={require('../Pictures/backpackingphoto.jpg')} />
                </TouchableOpacity>
                    
                <Text style ={styles.words}>
                    BackPacking
                </Text>

            </ScrollView>
        )
    }
}

export default Genre;

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
        fontSize: 20,
        fontWeight: '300',
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