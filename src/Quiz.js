import React, { Component } from 'react'
import QuizQuestion from './QuizQuestion.js'
import QuizEnd from './QuizEnd.js'

let quizData = require('./quiz_data.json')

class Quiz extends Component {

    constructor(props) {

        super(props)

        this.state = { quiz_position: 1 }

    }

    render() {

        const isQuizEnd = this.state.quiz_position - 1 === quizData.quiz_questions.length

        return (
            <div>
                {isQuizEnd ?
                    <QuizEnd resetClickHandler={this.handleResetClick.bind(this)} /> :
                    null}
                {!isQuizEnd ?
                    <QuizQuestion quiz_question={quizData.quiz_questions[this.state.quiz_position - 1]} showNextQuestionHandler={this.showNextQuestion.bind(this)} /> :
                    null}
                
            </div>
        )
    }

    showNextQuestion() {
        let newVal = this.state.quiz_position + 1;
        this.setState({ quiz_position: newVal });
    }

    handleResetClick() {
        this.setState({ quiz_position: 1 });
    }

}

export default Quiz