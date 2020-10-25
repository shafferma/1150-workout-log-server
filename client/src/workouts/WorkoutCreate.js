import React, {useState} from 'react';
import {Button, Form, FormGroup, Label, Input} from 'reactstrap';
import ApiProvider from '../utils/ApiProvider';

const WorkoutCreate = (props) => {
    const [description, setDescription] = useState('');
    const [definition, setDefinition] = useState('Time');
    const [result, setResult] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        ApiProvider.post('/log', {
            description: description, 
            definition: definition, 
            result: result
        })
        .then((logData) => {
            console.log(logData);
            setDescription('');
            setDefinition('Time');
            setResult('');
            props.fetchWorkouts();
        })
    }

    return (
       <>
            <h3>Log a Workout</h3>
                <Form onSubmit={handleSubmit}>
                    <FormGroup>
                        <Label htmlFor="description">Description</Label>
                        <Input name="description" value={description} onChange={(e) => setDescription(e.target.value)}/>
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="definiton">Definition</Label>
                        <Input type="select" name="definition" value={definition} onChange={(e) => setDefinition(e.target.value)}>
                            <option value="Time">Time</option>
                            <option value="Weight">Weight</option>
                            <option value="Distance">Distance</option>
                        </Input>
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="result">Result</Label>
                        <Input name="result" value={result} onChange={(e) => setResult(e.target.value)}/>
                    </FormGroup>
                    <Button type="submit" >Click to submit</Button>
                </Form>
       </>
    )
}

export default WorkoutCreate;