import React from 'react';
import Parser from 'html-react-parser';
import AnswerOptions from './AnswerOptions';

const Question = props => {
	const { question, incorrect_answers, correct_answer } = props.question;
	const options = [...incorrect_answers, correct_answer];
	options.sort(() => 0.5 - Math.random());

	return (
		<div className='card mb-5'>
			<div className='card-body'>
				<h2 className='card-title text-muted'>
					{props.category} Quiz | Question {props.number}
				</h2>
				<h3 className='card-subtitle mb-3'>{Parser(question)}</h3>
				<AnswerOptions
					options={options}
					correct={correct_answer}
					onHandleResult={props.onHandleResult}
				/>
			</div>
		</div>
	);
};

export default Question;