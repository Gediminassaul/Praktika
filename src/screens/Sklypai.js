import React from 'react'
import { Text, View, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import SklypaiJson from '../JSONs/Sklypai.json';

export default class Sklypai extends React.Component {
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

    renderSklypai = (sklypai) => {

        const filteredSklypai = sklypai.filter((s) => (s.sklypoNr.toLowerCase() )
            .includes(this.state.search.toLowerCase()));


        return(
            <View>
                {filteredSklypai.map(s => {
                    return (
                        <TouchableOpacity style= {styles.item}>
                            <View style= {{flexDirection: 'row'}}>
                                <Text style={styles.title}>Sklypo Numeris:</Text>
                                <Text style={styles.title}>{s.sklypoNr}</Text>
                            </View>
                            <View style= {{flexDirection: 'row'}}>
                                <Text style={styles.title}>Plotas:</Text>
                                <Text style={styles.title}>{s.plotas}</Text>
                                <Text style={styles.title}>H</Text>

                            </View>

                        </TouchableOpacity>
                    )
                })}
            </View>
        )
    }

    render() {
        const sklypai = SklypaiJson.Sklypai;
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
                {this.renderSklypai(sklypai)}
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
