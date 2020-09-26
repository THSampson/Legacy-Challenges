import React from 'react';
import {Form, Input, FormGroup, Label} from 'reactstrap';
import './List.css';

const List = (props) => (
<Form>
<FormGroup>
      {
      props.items.map((item) => <Label>
    <Input className="item" type="checkbox"></Input>
    {item}<br /></Label>)
        }            
</FormGroup>
</Form>

)
export default List;