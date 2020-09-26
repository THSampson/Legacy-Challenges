import React from 'react';
import {Input, FormGroup, Label} from 'reactstrap';
 
class SearchIndex extends React.Component {
  constructor(props) {
  super(props)
   this.state = {
     search: null,
     things: ['pen', 'marker', 'eraser', 'notebook', 'pencil', 'scissors', 'highlighter', 'stapler', 'paper clip', 'binder', 'hole punch', 'laminator', 'laminating sheets', 'protective sheets', 'index cards']
   };
  }


filterArray = (event) => {
let word = event.target.value;
this.setState({search: word})
}

 
render() {
   return (

       <FormGroup>
         <Label for="searchField">Search</Label>
           <Input type="text" placeholder="search here" onChange={(event) => this.filterArray(event)}></Input>
           <div>
           {
         this.state.things.filter(things => things.includes(this.state.search)).map(filterArray => (
          <h3>Results: {filterArray}</h3>
         ))
       }
       </div>
       </FormGroup>
      
   ) 
   } 
  }


 
export default SearchIndex;
