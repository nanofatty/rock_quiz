// Main application, Questions are created using functions, and using useState the Questions Progresses 



import RockClass from "./Components/rock_classification.json";
import React, { useState } from 'react';
import Button from "./Components/Button";
import Header from "./Components/Header";
import Menu from "./Components/Menu";
import Question from './Components/Questions.js'
import Questions from "./Components/Questions.js";

export default function App() {
	const rocks = RockClass.rockclass; 
	// randomizes any array and none of the values in it repeat
	function randomize(array) 
	{ for (let i = array.length - 1; i > 0; i--) 
		{ const j = Math.floor(Math.random() * (i + 1)); 
			[array[i], array[j]] = [array[j], array[i]]; } 
		
		return array};
	
	const sedimentaryRocks = rocks.filter(rock => 
		rock.category === 'Sedimentary');
	const igneousRocks = rocks.filter(rock => 
		rock.category === 'Igneous');
	const metamorphicRocks = rocks.filter(rock => 
		rock.category === 'Metamorphic');	
	const answerOption1 = ['texture', 'arrrangment', 'crystalline_clast', 'mineral','prominent_composition']		
// Couple of testings for the functions I have written, these won't show up in the final result
// but they do in the console
	const randSedimentary = randomize(sedimentaryRocks);
	console.log(randomize(randomize(sedimentaryRocks)));
	console.log(Questions(randSedimentary))

// Original set of Questions and Answers to get the the Quiz to get to work
// to be  modified by essentially adding the questions into an empty array
// by using the function from Questions.js component

	const questions = [
		{
			questionText: 
			<>
				<Header title = "Indetify the rock" />
			<img src= {sedimentaryRocks[2].image} 
			alt="test" width="200" height="200"/>
			<Menu options = {answerOption1}/>
			
	  </>,
			answerOptions: [
				{ answerText:'text2', isCorrect: false},
				{ answerText:'text1', isCorrect: false },
				{ answerText: 'Sandstone', isCorrect: true },
				{ answerText: 'Sanstoned', isCorrect: false },
			],
		},
		{
			questionText: 'Not an animal',
			answerOptions: [
				{ answerText: 'Cat', isCorrect: false },
				{ answerText: 'mat', isCorrect: true },
				{ answerText: 'bat', isCorrect: false },
				{ answerText: 'rat', isCorrect: false },
			],
		},
		{
			questionText: 'Rocks',
			answerOptions: [
				{ answerText: 'Shale', isCorrect: true },
				{ answerText: 'Geodude', isCorrect: false },
				{ answerText: 'Rhyperior', isCorrect: false },
				{ answerText: 'Onyx', isCorrect: false },
			],
		},
		{
			questionText: 'Darkest on MCI',
			answerOptions: [
				{ answerText: 'mafic', isCorrect: false },
				{ answerText: 'intermediate', isCorrect: false },
				{ answerText: 'felsic', isCorrect: false },
				{ answerText: 'ultramafic', isCorrect: true },
			],
		},
	];
	
	// Essentially the heart of the Quiz
	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};
	const randomArray = Array.from({length: 4}, () => Math.floor(Math.random() * 4));
	return (
		// The output of the Quiz
		<div className='app'>
			{showScore ? (
				<div className='score-section'>
					You scored {score} out of {questions.length}
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption, i) => (
							<button key = {i} onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
				</>
			)}
		</div>
	);
}