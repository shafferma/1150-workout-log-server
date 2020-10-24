import React, {useState} from 'react';

const WorkoutEdit = (props) => {
    const [editDesc, setEditDesc] = useState(props.workoutToUpdate.description);
    const [editDesc, setEditDef] = useState(props.workoutToUpdate.definition);
    const [editDesc, setEditRes] = useState(props.workoutToUpdate.result);

    return (
        <>
        This is Workout Edit
        </>
    )
}

export default WorkoutEdit;