import React from 'react';
import List from './List';
import {Form, Input, Button, FormGroup} from 'reactstrap';



class ToDo extends React.Component {
constructor(props) {
    super(props)
    this.state = {
        task: '',
        items: []
    };

}

onChange = (event) => {
    this.setState({task: event.target.value})
}

onSubmit = (event) => {
    event.preventDefault();
    this.setState({
        task: '',
        items: [...this.state.items, this.state.task]
    })
}

render() {
    return(           
    <FormGroup>
        <Form onSubmit={this.onSubmit}>
        <Input type="text" placeholder="Enter Task" value={this.state.task} onChange={this.onChange}>
        </Input>
        <Button type="submit" onSubmit={this.onSubmit}>Add Task</Button>
      <List items={this.state.items}/>
    </Form> 
    </FormGroup>
    )
}

}

export default ToDo;