import React, { Component } from 'react';
import axios from 'axios';
import Question from './Question';
import Result from './Result';

class Quiz extends Component {
	state = {
		ready: false,
		questions: [],
		current: 0,
		score: 0,
		quizOver: false
	};

	componentDidMount() {
		this.getQuestions();
	}

	getQuestions = () => {
		const { id } = this.props.category;
		const url = `https://opentdb.com/api.php?amount=3&category=${id}&difficulty=easy&type=multiple`;
		axios
			.get(url)
			.then(response =>
				this.setState({ ready: true, questions: response.data.results })
			)
			.catch(error => console.error(error));
	};

	handleResult = correct => {
		if (correct) {
			this.setState(prevState => ({ score: prevState.score + 1 }));
		}
		this.showNextQuestion();
	};

	showNextQuestion = () => {
		if (this.state.current === this.state.questions.length - 1) {
			this.setState({ quizOver: true });
			return;
		}
		this.setState(prevState => ({ current: prevState.current + 1 }));
	};

	newGame = () => {
		this.setState({ quizOver: false });
	};

	render() {
		const { current, questions, quizOver, ready, score } = this.state;

		if (ready && !quizOver) {
			return (
				<Question
					question={questions[current]}
					number={current + 1}
					onHandleResult={this.handleResult}
					category={this.props.category.name}
				/>
			);
		} else if (quizOver) {
			return (
				<Result
					score={score}
					number={questions.length}
					onResetQuiz={this.props.onResetQuiz}
				/>
			);
		}

		return '';
	}
}

export default Quiz;
