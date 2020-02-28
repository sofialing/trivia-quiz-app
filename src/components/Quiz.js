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
			.then(response => {
				const questions = response.data.results.map(data => {
					return {
						question: data.question,
						correct_answer: data.correct_answer,
						incorrect_answers: data.incorrect_answers,
						user_answer: '',
						correct: ''
					};
				});
				this.setState({ ready: true, questions: questions });
			})
			.catch(error => console.error(error));
	};

	handleResult = res => {
		if (res.correct) {
			this.setState(prevState => ({ score: prevState.score + 1 }));
		}
		this.saveUserAnswer(res);
		this.showNextQuestion();
	};

	saveUserAnswer = res => {
		const i = this.state.current;
		const { correct, answer } = res;
		const updatedQuestions = [...this.state.questions];
		updatedQuestions[i] = {
			...updatedQuestions[i],
			user_answer: answer,
			correct: correct
		};
		this.setState({ questions: updatedQuestions });
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
					questions={questions}
				/>
			);
		}

		return '';
	}
}

export default Quiz;
