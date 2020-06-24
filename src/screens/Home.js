import React, { useState, useEffect } from 'react';
import { Text, View, TextInput, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';
import firebase from '../config/firebase'

let unsubscribe;

export default class Home extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            user: null,
            initializing: true
        }
    }
    componentDidMount = () => {
        unsubscribe = firebase.auth().onAuthStateChanged((user) => {
            if(user) {
                this.setState({
                    user: user,
                    initializing: false,
                })
            }
            else {
                this.props.navigation.navigate('Login');
            }
        });
    }
    componentWillUnmount(){
        unsubscribe()
    }

    logOut() {
        firebase.auth().signOut();
        this.props.navigation.navigate('Login')
    }

    render() {
        if(this.state.initializing) {
            return(
                <SafeAreaView style= {{backgroundColor:'black'}}>
                    <View>
                        
                    </View>
                </SafeAreaView>
            )
        }
        else if(this.state.user != null) {
            return(
                <SafeAreaView style= {styles.container}>
                    <View style={styles.layout}>
                        <View>
                            <Text style={{color: 'white'}}> {this.state.user.email} </Text>
                        </View>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => this.logOut()}>
                            <Text>Log Out</Text>
                        </TouchableOpacity>
                    </View>
                </SafeAreaView>

            )
        }
        else if(!initializing && user == null) {
            this.props.navigation.navigate('Login');
        }
        
    }

}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
    },
    layout: {
        flex:2, 
        backgroundColor: 'black',
        alignContent: 'center', 
        alignItems: 'center',
        marginVertical: 20,
    },
	button: {
		alignItems: 'center',
		backgroundColor: '#DDDDDD',
		padding: 10,
		width: 300,
		marginTop: 16,
	},
});