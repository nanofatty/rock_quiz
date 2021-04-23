// This component creates a singular question and also randomizes the answer options
// Some more work is needed, especially in terms of Modals and/or dropdowns since
// information needs to be mapped to the appropriate rock and that can be done here
// rock_classification.json file is a pseudo-Database that's used throughout 
// it contains information about rocks and their properties


import React from 'react'
import RockClass from "./rock_classification.json"
import Header from './Header'
import Menu from "./Menu"



function Questions(randRockArray) {
    const rocks = RockClass.rockclass;
     const sedimentaryRocks = rocks.filter(rock => 
		rock.category === 'Sedimentary');
	const igneousRocks = rocks.filter(rock => 
		rock.category === 'Igneous');
	const metamorphicRocks = rocks.filter(rock => 
		rock.category === 'Metamorphic');
        
        
	function randomize(array) 
	{ for (let i = array.length - 1; i > 0; i--) 
		{ const j = Math.floor(Math.random() * (i + 1)); 
			[array[i], array[j]] = [array[j], array[i]]; } 
		
		return array};
    const randSedimentary = randomize(sedimentaryRocks)
    const randIgneous = randomize(igneousRocks)
    const randMetamorphic = randomize(metamorphicRocks)

    function createQuestion(newArray)
    {    
        const newQuestion = newArray[0].image
        const newAnswer = newArray[0].rock_name
        const answerOption1 = ['texture', 'arrrangment', 'crystalline_clast', 'mineral','prominent_composition'] 
        const answer = [
            { answerText: newArray[2].rock_name, isCorrect: false},
            { answerText: newArray[3].rock_name, isCorrect: false },
            { answerText: newAnswer, isCorrect: true },
            { answerText: newArray[4].rock_name, isCorrect: false },
        ]
        const question =
        [
            {
                questionText: 
                <>
                    <Header title = "Identify the rock" />
                <img src= {newQuestion} 
                alt="test" width="200" height="200"/>
                <Menu options = {answerOption1}/>
                
          </>,
               answerOption: randomize(answer)}
            
        ]      
        
    return question    
    };


   



    return (
        createQuestion(randRockArray)
    )
}

export default Questions
