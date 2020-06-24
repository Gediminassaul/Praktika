import React from 'react'
import { Text, View, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import MedziaiJson from '../JSONs/Medziai.json';

export default class Medziai extends React.Component {
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

    renderMedziai = (medziai) => {

        const filteredMedziai = medziai.filter((m) => (m.medzioRusis.toLowerCase() + m.bukle.toLowerCase() + m.ardas.toLowerCase())
            .includes(this.state.search.toLowerCase()));


        return(
            <View>
                <View style= {styles.item}>
                    <View style= {styles.medis}>
                        <Text style={styles.title}>Nr</Text>
                        <View style={{width: 1, backgroundColor: 'gray'}} />
                        <Text style={styles.titleL}>Ardas</Text>
                        <View style={{width: 1, backgroundColor: 'gray'}} />
                        <Text style={styles.title}>Rušis</Text>
                        <View style={{width: 1, backgroundColor: 'gray'}} />
                        <Text style={styles.titleL}>Buklė</Text>
                        <View style={{width: 1, backgroundColor: 'gray'}} />
                        <Text style={styles.title}>D</Text>
                        <View style={{width: 1, backgroundColor: 'gray'}} />
                        <Text style={styles.title}>H</Text>
                        <View style={{width: 1, backgroundColor: 'gray'}} />
                        <Text style={styles.titleL}>Amžius</Text>
                    </View>
                </View>
                {filteredMedziai.map(m => {
                    return (
                        <TouchableOpacity style= {styles.item}>
                            <View style= {styles.medis}>
                                <Text style={styles.title}>{m.medzioNr}</Text>
                                <View style={{width: 1, backgroundColor: 'gray'}} />
                                <Text style={styles.titleL}>{m.ardas}</Text>
                                <View style={{width: 1, backgroundColor: 'gray'}} />
                                <Text style={styles.title}>{m.medzioRusis}</Text>
                                <View style={{width: 1, backgroundColor: 'gray'}} />
                                <Text style={styles.titleL}>{m.bukle}</Text>
                                <View style={{width: 1, backgroundColor: 'gray'}} />
                                <Text style={styles.title}>{m.D}</Text>
                                <View style={{width: 1, backgroundColor: 'gray'}} />
                                <Text style={styles.title}>{m.H}</Text>
                                <View style={{width: 1, backgroundColor: 'gray'}} />
                                <Text style={styles.titleL}>{m.amzius}</Text>
                            </View>

                        </TouchableOpacity>
                    )
                })}
                <View style= {styles.item}>
                    <View style= {styles.medis}>
                        <TextInput
                            style={styles.title}

                        />
                        <View style={{width: 1, backgroundColor: 'gray'}} />
                        <View style={styles.title}/>
                        <View style={{width: 1, backgroundColor: 'gray'}} />
                        <TextInput style={styles.title}/>
                        <View style={{width: 1, backgroundColor: 'gray'}} />
                        <TextInput style={styles.title}/>
                        <View style={{width: 1, backgroundColor: 'gray'}} />
                        <TextInput style={styles.title}/>
                        <View style={{width: 1, backgroundColor: 'gray'}} />
                        <TextInput style={styles.title}/>
                        <View style={{width: 1, backgroundColor: 'gray'}} />
                        <TextInput style={styles.title}/>
                    </View>
                </View>
            </View>
        )
    }

    render() {
        const medziai = MedziaiJson.Medziai;
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
                {this.renderMedziai(medziai)}
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
        width: 39,
        margin: 6,
        fontSize: 16,
        fontWeight: "400",
        color: "#20455e",

    },
    titleL: {
        width: 54,
        margin: 6,
        fontSize: 16,
        fontWeight: "400",
        color: "#20455e",

    },

    medis:{
        justifyContent: 'space-around',
        flexDirection: 'row'
    }


});
