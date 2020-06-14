import React from 'react'
import { Text, View, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import KadastraiJson from '../JSONs/Kadastrai.json';

export default class Kadastrai extends React.Component {
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

    renderKadastrai = (kadastrai) => {

        const filteredKadastrai = kadastrai.filter((k) => (k.kadastrinisNr.toLowerCase() + k.adresas.toLowerCase() + k.data.toLowerCase())
            .includes(this.state.search.toLowerCase()));

        
        return(
            <View>
                {filteredKadastrai.map(k => {
                    return (
                        <TouchableOpacity style= {styles.item}>
                            <Text style={styles.title}>{k.kadastrinisNr}</Text>
                            <View style={styles.footer}>
                                <Text style={styles.footerContent}>{k.adresas}</Text>
                                <Text style={styles.footerContent}>{k.data}</Text>
                            </View>
                        </TouchableOpacity>
                    )
                })}
            </View>
        )
    }
    
    render() {
        const kadastrai = KadastraiJson.Kadastrai;
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
                {this.renderKadastrai(kadastrai)}
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
        borderRadius: 6,
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
        borderRadius: 6,
        borderColor: "#fff",
        padding: 10,
        position: "relative",
    },
    title: {
        margin: 6,
        fontSize: 16,
        fontWeight: "400",
        color: "#20455e",

    },
    footer:{
        margin: 6,
        justifyContent: "space-between",
        flexDirection: "row"
    },
    footerContent:{
        fontSize: 12,
        color: "#7a92a5",
        fontWeight: "200",
    },


});
