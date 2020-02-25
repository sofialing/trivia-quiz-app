import React from 'react';
import QuizCategories from './QuizCategories';

const StartGame = props => {
	return (
		<section className='text-white text-center mb-5'>
			<h1 className='display-3 font-weight-bold'>Trivia Quiz</h1>
			<p className='lead mb-5'>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam fermentum
				dictum auctor. Aenean elementum rhoncus felis, et fringilla massa posuere
				sed. In hac habitasse platea dictumst. Ut semper orci nibh, in pharetra
				arcu auctor volutpat. Phasellus eget augue nisi.
			</p>
			<QuizCategories onStartQuiz={props.onStartQuiz} />
		</section>
	);
};

export default StartGame;
