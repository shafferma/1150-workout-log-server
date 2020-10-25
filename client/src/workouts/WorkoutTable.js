import React from 'react';
import {Table, Button} from 'reactstrap';
import ApiProvider from '../utils/ApiProvider';

const WorkoutTable = (props) => {
    
    const deleteWorkout = (workout) => {
        ApiProvider.delete(`/log/${workout.id}`)   
            .then(() => {
                props.fetchWorkouts()
            })
    }

    const workoutMapper = (props)  => {

        return props.workouts.map((workout, index) => {
            return(
                <tr key={index}>
                    <th scope="row">{workout.id}</th>
                    <td>{workout.result}</td>
                    <td>{workout.description}</td>
                    <td>{workout.definition}</td>
                    <td>
                        <Button color="warning" onClick={() => {
                            props.editUpdateWorkout(workout)
                            props.updateOn()
                        }}>Update</Button>
                        <Button onClick={() => {deleteWorkout(workout)}}>Delete</Button>
                    </td>
                </tr>
            )
        })
    };
    
    return(
        <>
            <h3>Workout History</h3>
            <hr/>
            <Table striped>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Result</th>
                        <th>Description</th>
                        <th>Definition</th>
                    </tr>
                </thead>
                <tbody>
                    {workoutMapper(props)}
                </tbody>
            </Table>
        </>
    )
}

export default WorkoutTable;