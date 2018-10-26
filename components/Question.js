import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Fonts} from "../src/Fonts";

class Question extends Component {
    render() {
        return (
            <View style={styles.questionStyle}>
                {this.props.children}
            </View>
        );
    }
}

export default Question;

const styles = StyleSheet.create({
    questionStyle: {
        flex: 1,
        backgroundColor: "black",
        borderWidth: 1,
        borderColor: 'black',
        borderStyle: "solid",
        padding: 16,
    },
});