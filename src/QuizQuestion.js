import React, { Component } from 'react'
import QuizQuestionButton from './QuizQuestionButton.js'


class QuizQuestion extends Component {

    render() {

        var answers = this.props.quiz_question.answer_options.map((answer_option, index) =>
            <QuizQuestionButton button_text={answer_option} key={index} clickHandler={this.handleClick.bind(this)} />
        );

        return (
            
            <main>
                <section>
                    <p>{this.props.quiz_question.instruction_text}</p>
                </section>
                <section className="buttons">
                    <ul>
                        {answers}
                    </ul>
                </section>
            </main>

        )
    }

    handleClick(buttonText) {

        if (buttonText === this.props.quiz_question.answer) {
            this.props.showNextQuestionHandler();
        }

    }

}

export default QuizQuestion
