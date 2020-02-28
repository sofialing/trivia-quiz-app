import React, { Component } from 'react';

class QuizCategories extends Component {
	state = {
		name: '',
		id: ''
	};

	handleOnSubmit = e => {
		e.preventDefault();
		if (this.state.id) {
			this.props.onStartQuiz(this.state);
		}
	};

	handleChange = e => {
		const { value, options, selectedIndex } = e.target;
		this.setState({
			name: options[selectedIndex].innerHTML,
			id: value
		});
	};

	render() {
		const categories = [
			{ id: 27, name: 'Animals' },
			{ id: 10, name: 'Books' },
			{ id: 11, name: 'Film' },
			{ id: 9, name: 'General knowledge' },
			{ id: 22, name: 'Geography' },
			{ id: 12, name: 'Music' },
			{ id: 15, name: 'Video Games' }
		];

		const options = categories.map(category => (
			<option value={category.id} key={category.id}>
				{category.name}
			</option>
		));
		return (
			<form className='input-group' onSubmit={this.handleOnSubmit}>
				<select
					className='custom-select'
					aria-label='Choose a quiz category'
					onChange={this.handleChange}>
					<option defaultValue>Choose a category...</option>
					{options}
				</select>
				<div className='input-group-append'>
					<button className='btn btn-primary' type='submit'>
						Start new quiz
					</button>
				</div>
			</form>
		);
	}
}

export default QuizCategories;
