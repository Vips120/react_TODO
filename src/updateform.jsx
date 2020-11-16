import React,{useState,useEffect} from "react";
import {Form, Button} from "semantic-ui-react";

const UpdateForm = ({currentuser,updateTodo}) => {
    const [value,setValue] = useState(currentuser);
const handleFormSubmit = (e) => {
  e.preventDefault();
   if(!value){return;}
   updateTodo({id:currentuser.id, text:value,isCompleted: currentuser.isCompleted});
   setValue("");
};

useEffect(() => {
  setValue(currentuser);
},[currentuser]);


    return ( <Form onSubmit={handleFormSubmit}>
        <Form.Field>
          <input placeholder='enter text' 
           value={value.text}
           onChange={e => setValue(e.target.value)}
          />
        </Form.Field>

        <Button type='submit'>Submit</Button>
      </Form>)
}

export default UpdateForm;