import React,{useState} from 'react';
import {TextInput, View, StyleSheet, Button, FlatList} from "react-native";
import FlatListe from "./FlatList"
export default function Search()  {

    const [isTrue, setIsTrue]=useState(false)

        return (
            <View style={styles.main_container}>
                <TextInput style={styles.textinput} placeholder='Titre du film'/>             
                <Button title='Rechercher' onPress={() => {setIsTrue(true)}}/>
                {isTrue == true ? <FlatListe/>: null}
            </View>
        )   
    }

const styles = StyleSheet.create({
    main_container: {
        flex: 1,
        marginTop: 30
    },
    textinput: {
        marginTop: 10,
        marginLeft: 5,
        marginRight: 5,
        height: 50,
        borderColor: '#000000',
        borderWidth: 1,
        paddingLeft: 5
    }
})
