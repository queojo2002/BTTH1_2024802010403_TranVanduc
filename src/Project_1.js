import React, { Component } from 'react';
import { StyleSheet,View, Text, TouchableOpacity, Vibration } from 'react-native';
import { useState } from 'react';
import { Entypo } from "@expo/vector-icons"


/*
const [darkMode, setDarkMode] = useState(false);
const [currentNumber, setCurrentNumber] = useState('');
const [lastNumber, setLastNumber] = useState('')
const buttons = ['C', 'DEL', '/', 7, 8, 9, '=', 4, 5, 6, '-', 1, 2, 3, '+', '0', '.', '=']


function calculator(){
    let lastArr = currentNumber[currentNumber.length - 1];

    if (lastArr === '/' || lastArr === '*' || lastArr === '-' || lastArr === '+' | lastArr === '.'){
        setCurrentNumber(currentNumber)
        return
    }else {
        let result = eval(currentNumber).toString();
    }
}

function handleInput(buttonPressed){
    if (buttonPressed === '+' || buttonPressed === '-' || buttonPressed === '*' || buttonPressed === '/'){
        Vibration.vibrate(35);
        setCurrentNumber(currentNumber + buttonPressed)
        return
    }else if (buttonPressed === 1 || buttonPressed === 2 || buttonPressed === 3 || buttonPressed === 4 || buttonPressed === 5 || buttonPressed === 6 || buttonPressed === 7 || buttonPressed === 8 || buttonPressed === 9 || buttonPressed === 0 || buttonPressed === '.'){
        Vibration.vibrate(35);
    }
    switch (buttonPressed){
        case 'DEL':
            Vibration.vibrate(35);
            setCurrentNumber(currentNumber.substring(0, (currentNumber.length - 1)))
            return
        case 'C':
            Vibration.vibrate(35)
            setLastNumber('');
            setCurrentNumber('');
            return
        case '=':
            Vibration.vibrate(35)
            setLastNumber(currentNumber + '=')
            calculator()
            return
    }
    setCurrentNumber(currentNumber + buttonPressed)
}
*/

function Project_1() {

    return (

        <View style={myStyle.ViewStyle}>
            <Text style={myStyle.TextStyle}> Hello World</Text>
        </View>
        
        
      );
}

export default Project_1;

const myStyle = StyleSheet.create(
    {
        ViewStyle: {
            width: 100,
            height: 100,
            backgroundColor: 'aqua',
            alignContent: 'center',
            justifyContent: 'center',
        },
        TextStyle:{
            color: 'black'
        }
    }
)



/*
const styles = StyleSheet.create({
    results: {
        backgroundColor: darkMode ? '#282f3b': '#f5f5',
        maxWidth: '100%',
        minHeight: '35%',
        alignItems: 'flex-end',
        justifyContent: 'flex-end'
    },
    resultText: {
        maxHeight: 45,
        color: "#00b9d6",
        margin: 15,
        fontSize: 35,
    },
    historyText: {
        color: darkMode ? '#B5B7BB':'#7c7c7c',
        fontSize: 20,
        marginRight: 10,
        alignSelf: 'flex-end'
    }, 
    themeButton: {
        alignSelf: 'flex-start',
        botton: '5%',
        margin: 15,
        backgroundColor: darkMode ? '#7b8084':'#e5e5e5',
        alignItems: 'center',
        justifyContent: 'center',
        width: 50,
        height: 50,
        borderRadius: 25,
    },
    buttons: {
        width: '100%',
        height: '35%',
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    button: {
        borderColor: darkMode ? '#3f4d5b':'#e5e5e5',
        alignItems: 'center',
        justifyContent: 'center',
        minWidth: '24%',
        minHeight: '54%',
        flex: 2,
    },
    textButton: {
        color: darkMode ? '#B5B7BB':'#7c7c7c',
        fontSize: 28,
    }
})
*/