/**Destructure workoutProgram and assign it as training_plan. Do so from the index.js*/
import { useState, useEffect } from 'react'
import {workoutProgram as training_plan} from '../utils/index.js'
import WorkoutCard from './WorkoutCard.jsx'


/**render button N times by. By returning array of all the keys from the object.
            We then map over the array which takes a callback function where the args are the workout and workoutIndex.
            Where we also return a button. When rendering lots of elements like this. The top level element 
            has to have a key attribute thats unique.
            */
            /**
            We have an N number of buttons where the day is a N number, but we want to append a 0 to the beginning of the day number if the day is singular like 9 becoming 09.
            We do that by using java script via {} and in there we have a check to see how many digits we have. We take the workoutIndex divide it by 8
            and see if the output of that calculation is less than or equal to 1. If so, append 0 before it else render workoutIndex plus 1 like usual.
*/
/**
                *    So if a workout is locked it displays a locked icon.
                *    Else depending on what workout day it is, the icon
                *    will be a push, pull or leg day
*/

export default function Grid() {
    const [savedWorkouts, setSavedWorkouts] = useState(null) 
    const [selectedWorkout, setSelectedWorkout] = useState(null)
    const completedWorkouts = Object.keys(savedWorkouts || {}).filter((val) => {
        const entry = savedWorkouts[val]
        return entry.isComplete     
    })

    function handleSave(index, data){
        //save to local storage and modify the saved workouts state
        //!!data.isComplete if isComplete is undefined !! converts it to false
        //?. is for if any of the saved workouts exists
        const newObj = {
            ...savedWorkouts,
            [index]: {
                ...data,
                isComplete: !!data.isComplete || !!savedWorkouts?.[index]?.isComplete
            }
        }
        setSavedWorkouts(newObj)
        localStorage.setItem('WorkoutProgram', JSON.stringify(newObj))
        setSelectedWorkout(null)
    }

    function handleComplete(index, data){
        //complete a workout (modify the completed status)
        const newObj = {...data}
        newObj.isComplete = true
        handleSave(index, newObj)
    }

    useEffect(() => {
        if(!localStorage) {return}
        let savedData = {}
        if(localStorage.getItem('WorkoutProgram')){
            savedData = JSON.parse(localStorage.getItem('WorkoutProgram'))
            setSavedWorkouts(savedData)
        }
    }, [])
    
    return (
        <div className="training-plan-grid">
            
            { Object.keys(training_plan).map((workout, workoutIndex) => {
                const isLocked = workoutIndex === 0 ?
                false : !completedWorkouts.includes(`${workoutIndex - 1}`)
                
                const type = workoutIndex % 3 === 0 ? 'Push' : 
                workoutIndex % 3 === 1 ? 'Pull' : 
                'Legs'

                const trainingPlan = training_plan[workoutIndex]
                const dayNum = ((workoutIndex / 8) <= 1) ? '0' + (workoutIndex+1) : workoutIndex+1
                const icon = workoutIndex % 3 === 0 ? (
                        <i className='fa-solid fa-dumbbell'></i>
                    ) : (
                       workoutIndex % 3 === 1 ? (
                        <i className='fa-solid fa-weight-hanging'></i>
                       ) : (
                        <i className='fa-solid fa-bolt'></i>
                       ) 
                    )

                if (workoutIndex === selectedWorkout) {
                    return (
                        <WorkoutCard savedWeights={savedWorkouts?.[workoutIndex]?.weights} handleSave={handleSave} handleComplete={handleComplete} key={workoutIndex} trainingPlan={trainingPlan}
                        type={type} workoutIndex={workoutIndex} icon={icon} dayNum={dayNum}/>
                    )
                }

                return (<button onClick={() =>{
                    if (isLocked) {return}
                    setSelectedWorkout(workoutIndex)
                }} className={'card plan-card ' + (isLocked ? 'inactive' : '')} key={workoutIndex}>
                <div className='plan-card-header'>
                    <p>Day {dayNum}</p>
                </div>
                
                {isLocked ? (
                    <i className='fa-solid fa-lock'></i>
                ) : (icon)}
                <div className='plan-card-header'>
                    <h4><b>{type}</b></h4>
                </div>
            </button>
            )})}
        </div>
    )
}