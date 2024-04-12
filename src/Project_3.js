import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';


const Button = (props) => (
    <TouchableOpacity
        onPress={props.onPress}
        style={{
            backgroundColor: "#ff637c",
            alignSelf: "center",
            padding: 10,
            margin: 10,
            ...props.buttonStyle,
        }}
    >
        <Text style={{color: "#fff"}}>{props.text}</Text>

    </TouchableOpacity>
)

export default class Project_3 extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={{flex:1, justifyContent: "center"}}>
        <Button text="Say Hello" onPress={() => alert("hello!")}></Button>
        <Button 
        text="Say GoodBye"
        onPress={() => alert("goodbye!")}
        buttonStyle={{backgroundColor: "#4dc2c2"}}></Button>
      </View>
    );
  }
}



