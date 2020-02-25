import React, { Component } from 'react';
import StartQuiz from './components/StartQuiz';
import Quiz from './components/Quiz';

class App extends Component {
	state = {
		quizStarted: false,
		category: ''
	};
	startQuiz = category => {
		this.setState({ quizStarted: true, category });
	};
	resetQuiz = () => {
		this.setState({ quizStarted: false });
	};
	render() {
		if (this.state.quizStarted) {
			return <Quiz category={this.state.category} onResetQuiz={this.resetQuiz} />;
		}
		return <StartQuiz onStartQuiz={this.startQuiz} />;
	}
}

export default App;
