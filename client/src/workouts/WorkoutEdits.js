import React, {useState} from 'react';
import { FormGroup, Form, Label, Input, Modal, ModalBody, ModalHeader, Button} from 'reactstrap';
import ApiProvider from '../utils/ApiProvider';

const WorkoutEdit = (props) => {
    const [editDesc, setEditDesc] = useState(props.workoutToUpdate.description);
    const [editDef, setEditDef] = useState(props.workoutToUpdate.definition);
    const [editRes, setEditRes] = useState(props.workoutToUpdate.result);
    
    const workoutUpdate = (event, workout) => {
        event.preventDefault();
        ApiProvider.put(`/log/${props.workoutToUpdate.id}`, {
            description: editDesc, 
            definition: editDef, 
            result: editRes
        }).then(() => {
            props.fetchWorkouts()
            props.updateOff()
        })
    }

    return (
      <Modal isOpen={true}>
          <ModalHeader>Log a Workout</ModalHeader>
          <ModalBody>
              <Form onSubmit={workoutUpdate}>
                  <FormGroup>
                      <Label htmlFor="result">Edit Result:</Label>
                      <Input name="result" value={editRes} onChange={(e) => setEditRes(e.target.value)}/>
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="description">Edit Description:</Label>
                        <Input name="description" value={editDesc} onChange={(e) => setEditDesc(e.target.value)}/>
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="definition">Edit Definition:</Label>
                        <Input type="select" name="definition" value={editDef} onChange={(e) => setEditDef(e.target.value)}>
                        <option></option>
                        <option value="Time">Time</option>
                        <option value="Weight">Weight</option>
                        <option value="Distance">Distance</option>
                        </Input>
                    </FormGroup>
                    <Button type="Submit">Update the workout!</Button>
              </Form>
          </ModalBody>
      </Modal>
    )
}

export default WorkoutEdit;