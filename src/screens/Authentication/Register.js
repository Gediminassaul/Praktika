import React from 'react';
import { Text, View, TextInput, StyleSheet, TouchableOpacity} from 'react-native';
import firebase from '../../config/firebase'
import { Ionicons } from '@expo/vector-icons';
export default class Register extends React.Component {


    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            errorMsg: '',
        }
        this.handleErrorMsgChange = this.handleErrorMsgChange.bind(this);
    }
    handleErrorMsgChange(message) {
        this.setState({
            errorMsg: message
        })
        this.change = setTimeout(() => {
            this.setState({ errorMsg: '' })
        }, 5000)
    }
    componentDidMount() {
        this.setState({
            email: '',
            password: '',
        })
    }
    componentWillUnmount() { 
        this.setState({
            email: '',
            password: '',
        })
    }

    onPressRegister = () => {
        if (this.state.email != '' && this.state.password != '') {

            this.register(this.state.email, this.state.password);
        }

    }
    async register(email, password) {

        this.setState({
            authenticating: true
        })
        await firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(() => {
                this.props.navigation.navigate('Home');
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message
                var humanReadable = error.message.substr(errorMessage.indexOf(']') + 1, errorMessage.length);
                this.handleErrorMsgChange(humanReadable);
            });
        this.setState({
            authenticating: false
        })

    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.form}>
                    <View style={{ marginTop: 5, alignContent: 'center', alignItems: 'center' }}>
                        <Text style={{ color: 'white' }}>
                            {this.state.errorMsg}
                        </Text>
                    </View>

                    <TouchableOpacity activeOpacity={1} onPress={() => this.emailText.focus()} >
                        <View style={styles.credentialBox}>
                            <View style={{ marginHorizontal: 15 }}>
                                <Ionicons name="ios-mail" 
                                size={35} color="darkgray" 
                            />
                        </View>
                            <TextInput 
                                style={styles.input} 
                                maxLength = {128}
                                autoCapitalize="none" 
                                placeholder="Email" 
                                onChangeText={email => this.setState({ email })}
                                value={this.state.email}
                                ref ={ref => this.emailText = ref}
                            />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={1} onPress={() => this.passwordText.focus()}>
                        <View style={styles.credentialBox}>
                            <View style={{ marginHorizontal: 15 }}>
                                <Ionicons name="ios-lock" size={35} color="darkgray" />
                            </View>
                            <TextInput 
                                style={styles.input} 
                                maxLength = {128}
                                secureTextEntry 
                                autoCapitalize="none" 
                                placeholder="Password"
                                onChangeText={password => this.setState({ password })}
                                value={this.state.password}
                                ref ={ref => this.passwordText = ref}
                            />
                        </View>
                    </TouchableOpacity>
                    <View style={{ marginTop: 30, alignContent: 'center', alignItems: 'center' }}>
                        <TouchableOpacity style={styles.button} onPress={this.onPressRegister} >
                            <Text>
                                Register
                        </Text>
                        </TouchableOpacity>
                    </View>

                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Login')} style={{ marginTop: 5, alignContent: 'center', alignItems: 'center' }}>
                        <Text style={{ color: 'white' }}>
                            Login
                </Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
    },
    loginText: {
        marginTop: 32,
        fontSize: 18,
        fontWeight: "400",
        textAlign: "center",
        height: 72,
    },
    form: {
        marginVertical: 150,
        marginBottom: 48,
        marginHorizontal: 30,
    },
    credentialBox: {
        flexDirection: 'row',
        marginVertical: 10,
        borderRadius: 5,
        height: 45,
        backgroundColor: "gray",
    },
    inputTitle: {
        color: "#8A8F9E",
        fontSize: 15,
        textTransform: "uppercase",
    },
    input: {
        borderBottomColor: "#8A8F9E",
        borderBottomWidth: StyleSheet.hairlineWidth,
        marginHorizontal: 5,
        flex: 1,
        height: 40,
        fontSize: 15,
        color: "#161F3D"
    },
    button: {
        marginVertical: 10,
        marginHorizontal: 30,
        backgroundColor: "gray",
        height: 45,
        borderRadius: 20,
        width: 150,
        alignItems: "center",
        justifyContent: "center",
    },
    person: {
        alignItems: "center",
        justifyContent: "center",
    },

});