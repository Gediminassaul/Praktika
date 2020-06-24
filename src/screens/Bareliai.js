import React from 'react'
import { Text, View, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import BareliaiJson from '../JSONs/Bareliai.json';

export default class Bareliai extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoading: false,

            search: '',
        }

    }
    searchDebounce = null;



    onSearch = async (val) => {

        clearTimeout(this.searchDebounce);

        this.searchDebounce = setTimeout(async () => {
            this.setState({
                search: val
            });
        }, 100);
    }

    renderBareliai = (bareliai) => {

        const filteredBareliai = bareliai.filter((b) => (b.barelioNr.toLowerCase() )
            .includes(this.state.search.toLowerCase()));


        return(
            <View>
                {filteredBareliai.map(b => {
                    return (
                        <TouchableOpacity style= {styles.item}>
                            <View style= {{flexDirection: 'row'}}>
                                <Text style={styles.title}>Barelio numeris:</Text>
                                <Text style={styles.title}>{b.barelioNr}</Text>
                            </View>
                            <View style= {{flexDirection: 'row'}}>
                                <Text style={styles.title}>Plotas:</Text>
                                <Text style={styles.title}>{b.plotas}</Text>
                                <Text style={styles.title}>Arai</Text>

                            </View>

                        </TouchableOpacity>
                    )
                })}
            </View>
        )
    }

    render() {
        const bareliai = BareliaiJson.Bareliai;
        return (
            <View style={styles.body}>
                <TouchableOpacity style={styles.header} activeOpacity={1} onPress={() => this.searchText.focus()} >
                    <TextInput
                        style={styles.input}
                        numberOfLines={1}
                        placeholder="Search..."
                        placeholderTextColor="#b6c1cd"
                        style={styles.input}
                        maxLength = {128}
                        autoCapitalize="none"
                        onChangeText={search => this.onSearch(search)}
                        ref ={ref => this.searchText = ref}
                    />
                </TouchableOpacity>
                {this.renderBareliai(bareliai)}
            </View>
        )
    }
}
const styles = StyleSheet.create({
    body: {
        paddingTop: 20,
        padding: 20
    },

    header:{
        flexShrink:0,
        borderRadius:6,
        backgroundColor: '#fff',
        marginBottom: 14,
        display: 'flex',
        shadowColor:"#e1e5e8",
        shadowRadius: 40,
        shadowOpacity: 20,
        flexDirection: "column",
        padding: 10,
        position: 'relative',
    },

    input: {
        paddingLeft: 10,
        display: 'flex',
        color: "#20455e",
        fontSize: 14,
        borderRadius: 1,
        borderColor: "#b6c1cd",
    },

    item: {
        flexShrink: 0,
        borderRadius: 8,
        backgroundColor: "#fff",
        shadowColor:"#e1e5e8",
        shadowRadius: 40,
        shadowOpacity: 20,
        marginBottom: 14,
        display: 'flex',
        flexDirection: 'column',
        borderColor: "#fff",
        padding: 10,
        position: "relative",
    },
    title: {
        margin: 6,
        fontSize: 16,
        fontWeight: "400",
        color: "#20455e",

    }

});
