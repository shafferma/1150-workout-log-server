import React, {useState, useEffect} from 'react';
import {Button, Form, FormGroup, Label, Input} from 'reactstrap';

const WorkoutCreate = (props) => {
    const [descripton, setDescription] = useState('');
    const [definition, setDefinition] = useState('');
    const [result, setResult] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('http://localhost:3000/log/', {
            method: 'POST',
            body: JSON.stringify({log:{descripton: descripton, definition: definition, result: result}}),
            headers: new Headers({
                'Content-Type' : 'application/json',
                'Authorization': props.token
            })
        }) .then((res) => res.json())
        .then((logData) => {
            console.log(logData);
            setDescription('');
            setDefinition('');
            setResult('');
            props.fetchWorkouts();
        })
    }

    return (
        <p>Workout Create Comp</p>
    )
}

export default WorkoutCreate;