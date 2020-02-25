import React, { Component } from 'react';
import Parser from 'html-react-parser';

class AnswerOptions extends Component {
	state = {
		answer: ''
	};

	checkAnswer = e => {
		e.preventDefault();
		if (!this.state.answer) {
			return;
		}
		const res = this.state.answer === this.props.correct;
		this.setState({ answer: '' });
		this.props.onHandleResult(res);
	};

	onInputChange = e => {
		this.setState({ answer: e.target.value });
	};

	render() {
		const checkboxes = this.props.options.map(answer => (
			<div className='form-check'>
				<input
					className='form-check-input'
					type='radio'
					name='answer'
					value={answer}
					key={answer}
					onChange={this.onInputChange}
				/>
				<label className='form-check-label' htmlFor='answer'>
					{Parser(answer)}
				</label>
			</div>
		));

		return (
			<form onSubmit={this.checkAnswer}>
				<div className='mb-4'>{checkboxes}</div>
				<button className='btn btn-secondary' type='submit'>
					Next question
				</button>
			</form>
		);
	}
}

export default AnswerOptions;
