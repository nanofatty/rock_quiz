// This component creates a singular question and also randomizes the answer options
// Some more work is needed, especially in terms of Modals and/or dropdowns since
// information needs to be mapped to the appropriate rock and that can be done here
// rock_classification.json file is a pseudo-Database that's used throughout 
// it contains information about rocks and their properties


import React from 'react';
import RockClass from "./rock_classification.json"
import Header from './Header'
import Menu from "./Menu";
import Modal from "./Modal";
import { Grid } from '@material-ui/core';



function Question(randRockArray) {
       
    const rocks = RockClass.rockclass;
     const sedimentaryRocks = rocks.filter(rock => 
		rock.category === 'Sedimentary');
	const igneousRocks = rocks.filter(rock => 
		rock.category === 'Igneous');
	const metamorphicRocks = rocks.filter(rock => 
		rock.category === 'Metamorphic');
        
    const randSedimentary = randomize(sedimentaryRocks)
    const randIgneous = randomize(igneousRocks)
    const randMetamorphic = randomize(metamorphicRocks)

    function randomize(array) 
	{ for (let i = array.length - 1; i > 0; i--) 
		{ const j = Math.floor(Math.random() * (i + 1)); 
			[array[i], array[j]] = [array[j], array[i]]; } 
		
		return array};

function createQuestion(newArray)
{    

    const newQuestion = newArray[0].image
    const newAnswer = newArray[0].rock_name

    const exploreOption1 = ['texture', 'arrrangment', 'crystalline_clast', 'mineral','prominent_composition'] 
    const answer = [
        { answerText: newArray[2].rock_name, isCorrect: false},
        { answerText: newArray[3].rock_name, isCorrect: false },
        { answerText: newAnswer, isCorrect: true },
        { answerText: newArray[1].rock_name, isCorrect: false },
    ]
    const newQuestion1 = newArray[1].image
    const newAnswer1 = newArray[1].rock_name
    const answer1 = [
        { answerText: newArray[0].rock_name, isCorrect: false},
        { answerText: newArray[3].rock_name, isCorrect: false },
        { answerText: newAnswer1, isCorrect: true },
        { answerText: newArray[2].rock_name, isCorrect: false },
    ]
    const randomAnswers = randomize(answer)

    const newQuestion2 = newArray[2].image
    const newAnswer2 = newArray[2].rock_name
    const answer2 = [
        { answerText: newArray[0].rock_name, isCorrect: false},
        { answerText: newArray[3].rock_name, isCorrect: false },
        { answerText: newAnswer2, isCorrect: true },
        { answerText: newArray[1].rock_name, isCorrect: false },
    ]
    const newQuestion3 = newArray[3].image
    const newAnswer3 = newArray[3].rock_name
    const answer3 = [
        { answerText: newArray[1].rock_name, isCorrect: false},
        { answerText: newArray[2].rock_name, isCorrect: false },
        { answerText: newAnswer3, isCorrect: true },
        { answerText: newArray[0].rock_name, isCorrect: false },
    ]

    const question =
    [
        {
            questionText: 
            <>
                <Header title = "Identify the rock" />
            <img src= {newQuestion} 
            alt="test" width="250" height="200"/>
           <div>
                <div>
                <Grid container spacing= {5}>
                    <Grid item sx={6}>
        <Modal buttonTitle = "Sheet Arrangement" propRocks = {newArray[0].texture} />
        <Modal buttonTitle = "MCI" propRocks = {newArray[0].mci} />
        <Modal buttonTitle = "Clast" propRocks = {newArray[0].clast} />
        </Grid>
        <Grid item sx={6}>
        <Modal buttonTitle = "Crystalline" propRocks = {newArray[0].crystalline} />
        <Modal buttonTitle = "Meterial Reactions" propRocks = {newArray[0].composition_properties} />
        <Modal buttonTitle = "Size" propRocks = {newArray[0].size} />
        </Grid>
        </Grid>
        </div>
        </div>
      </>,
           answerOption: [
               {answerText: randomAnswers[0].answerText, isCorrect: randomAnswers[0].isCorrect}, 
               {answerText: randomAnswers[1].answerText, isCorrect: randomAnswers[1].isCorrect}, 
               {answerText: randomAnswers[2].answerText, isCorrect: randomAnswers[2].isCorrect}, 
               {answerText: randomAnswers[3].answerText, isCorrect: randomAnswers[3].isCorrect}
        ]
    },
        {
            questionText: 
            <>
                <Header title = "Identify the rock" />
            <img src= {newQuestion1} 
            alt="test" width="200" height="200"/>
            <div>
                <Grid container spacing= {5}>
                    <Grid item sx={6}>
        <Modal buttonTitle = "Sheet Arrangement" propRocks = {newArray[1].texture} />
        <Modal buttonTitle = "MCI" propRocks = {newArray[1].mci} />
        <Modal buttonTitle = "Clast" propRocks = {newArray[1].clast} />
        </Grid>
        <Grid item sx={6}>
        <Modal buttonTitle = "Crystalline" propRocks = {newArray[1].crystalline} />
        <Modal buttonTitle = "Meterial Reactions" propRocks = {newArray[1].composition_properties} />
        <Modal buttonTitle = "Size" propRocks = {newArray[1].size} />
        </Grid>
        
        </Grid>
        </div>
            
      </>,
           answerOption: randomize(answer1)
        },

         {
            questionText: 
            <>
                <Header title = "Identify the rock" />
            <img src= {newQuestion2} 
            alt="test" width="200" height="200"/>
            <div>
                <Grid container spacing= {5}>
                    <Grid item sx={6}>
        <Modal buttonTitle = "Sheet Arrangement" propRocks = {newArray[2].texture} />
        <Modal buttonTitle = "MCI" propRocks = {newArray[2].mci} />
        <Modal buttonTitle = "Clast" propRocks = {newArray[2].clast} />
        </Grid>
        <Grid item sx={6}>
        <Modal buttonTitle = "Crystalline" propRocks = {newArray[2].crystalline} />
        <Modal buttonTitle = "Meterial Reactions" propRocks = {newArray[2].composition_properties} />
        <Modal buttonTitle = "Size" propRocks = {newArray[2].size} />
        </Grid>
        
        </Grid>
        </div>
            
      </>,
           answerOption: randomize(answer2)},
         {
            questionText: 
            <>
                <Header title = "Identify the rock" />
            <img src= {newQuestion3} 
            alt="test" width="200" height="200"/>
            <div>
                <Grid container spacing= {5}>
                    <Grid item sx={6}>
        <Modal buttonTitle = "Sheet Arrangement" propRocks = {newArray[3].texture} />
        <Modal buttonTitle = "MCI" propRocks = {newArray[3].mci} />
        <Modal buttonTitle = "Clast" propRocks = {newArray[3].clast} />
        </Grid>
        <Grid item sx={6}>
        <Modal buttonTitle = "Crystalline" propRocks = {newArray[3].crystalline} />
        <Modal buttonTitle = "Meterial Reactions" propRocks = {newArray[3].composition_properties} />
        <Modal buttonTitle = "Size" propRocks = {newArray[3].size} />
        </Grid>
        
        </Grid>
        </div>
            
      </>,
           answerOption: randomize(answer3)
         },
    ]      
    
return question    
};


   



    return (
        createQuestion(randRockArray)
    )
}

export default Question
