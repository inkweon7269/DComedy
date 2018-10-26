import React, {Component, Fragment} from 'react';
import {Platform, StyleSheet, Text, View, StatusBar} from 'react-native';
import {Fonts} from './src/Fonts';

import Question from './components/Question';
import Answer from './components/Answer';

const data = [
    {
        "id": "20181026",
        "answer": "개강하니까!!",
        "question": "대학생이 왜 엄청나게 강한지 알아?"
    },
    {
        "id": "20181027",
        "answer": "헬(Hell)로키티",
        "question": "고양이가 지옥에 가면?"
    }
];

// 현재 날짜 정리 : 20180101
const yyyymmdd = () => {
    let x = new Date();
    let y = x.getFullYear().toString();
    let m = (x.getMonth() + 1).toString();
    let d = x.getDate().toString();
    (d.length == 1) && (d = '0' + d);
    (m.length == 1) && (m = '0' + m);
    let yyyymmdd = y + m + d;

    return yyyymmdd;
};
const current = yyyymmdd();

export default class App extends Component {

    state = data.filter(item => item.id === current)[0];

    // componentDidMount와 setState 관계
    // https://jsdev.kr/t/componentdidmount-setstate/4023
    /*
    componentDidMount() {
        data.filter(item => item.id === current).map(value => {
            this.setState({
                id: value.id,
                question: value.question,
                answer: value.answer
            })
        })
    }
    */

    render() {
        const {id, question, answer} = this.state;

        return (
            <Fragment>
                <StatusBar hidden={true}/>
                <View style={styles.container}>
                    <Question>
                        <Text style={styles.questionsFontStyle}>{question}</Text>
                    </Question>
                    <Answer>
                        <Text style={styles.answerFontStyle}>{answer}</Text>
                    </Answer>
                </View>
            </Fragment>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 16
    },

    questionsFontStyle: {
        flex: 1,
        fontFamily: Fonts.BMDOHYEON,
        color: "white",
        fontSize: 45
    },

    answerFontStyle: {
        fontFamily: Fonts.BMDOHYEON,
        fontSize: 45,
    }
});