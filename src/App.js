import React, { Component } from 'react';
import StartQuiz from './components/StartQuiz';
import Quiz from './components/Quiz';

class App extends Component {
	state = {
		quizStarted: false
	};
	startQuiz = () => {
		this.setState({ quizStarted: true });
	};
	startNewQuiz = () => {
		this.setState({ quizStarted: false });
	};
	render() {
		const content = this.state.quizStarted ? (
			<Quiz onStartNewQuiz={this.startNewQuiz} />
		) : (
			<StartQuiz onStartQuiz={this.startQuiz} />
		);
		return <div className='App'>{content}</div>;
	}
}

export default App;
