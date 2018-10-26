import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Fonts} from "../src/Fonts";

class Answer extends Component {
    render() {
        return (
            <View style={styles.answerStyle}>
                {this.props.children}
            </View>
        );
    }
}

export default Answer;

const styles = StyleSheet.create({
    answerStyle: {
        flex: 1,
        backgroundColor: "white",
        borderWidth: 2,
        borderColor: 'black',
        borderStyle: "solid",
        padding: 16,
    },
});