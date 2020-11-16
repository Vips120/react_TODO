import React,{useState} from "react";
import {Form, Button} from "semantic-ui-react";

const TodoForm = ({addTodo}) => {
    const [value,setValue] = useState('');
const handleFormSubmit = (e) => {
  e.preventDefault();
   if(!value){return;}
   addTodo(value);
   setValue("");
};


    return ( <Form onSubmit={handleFormSubmit}>
        <Form.Field>
          <input placeholder='enter text' 
           value={value}
           onChange={e => setValue(e.target.value)}
          />
        </Form.Field>

        <Button type='submit'>Submit</Button>
      </Form>)
}

export default TodoForm;