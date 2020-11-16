import React,{useState} from "react";
import {Container,Divider} from "semantic-ui-react";
import TodoForm from "./todoForm";
import Todos from "./todos";
import UpdateForm from "./updateform";
const App = () => {
    const [editing,setediting] = useState(false);
     const [currentUser,setcurrentUser] = useState({text:'', isCompleted:''})
 const [todos,setTodos] = useState([{
     id:1,
   text:"Learn about react",
   isCompleted:false
 },
 {  id:2,
     text:"Meet friend for lunch",
     isCompleted:false
 },
 {  id:3,
     text:"welcome here..",
     isCompleted:false
 }
]);

const addTodo = (text) => {
//  console.log(data);
const newtodos = [...todos, {text}];
setTodos(newtodos);
};

const completeTodo = (index) => {
    // console.log(index);
 const alltodos = [...todos];
 alltodos[index].isCompleted = true;
 setTodos(alltodos);
};

const removeTodo = (index) => {
 const allTodos = [...todos];
  allTodos.splice(index,1);
  setTodos(allTodos);

};

const filterTodo = (data) => {
    setediting(true);
  setcurrentUser({id:data.id,text:data.text, isCompleted: data.isCompleted});
};

const updateTodo = (data) => {
    setediting(false);
    //FIND INDEX
    let index =  todos.findIndex((item) => item.id === data.id);
    //UPDATE todos index
   setTodos([...todos.slice(0,index), data, ...todos.slice(index + 1)]);
   
};

return (
   <React.Fragment>
<Container style={{paddingTop:"20px"}}>
        {
  todos.map((data, index) => {
   return <Todos key={index}
     index={index}
   d={data} completeTodo={completeTodo} removeTodo={removeTodo}
    updateTodo={filterTodo}
   />
})
}
<Divider horizontal>TODOFORM</Divider>
{
 editing ?
   <UpdateForm currentuser={currentUser} updateTodo={updateTodo}/>
   :
   <TodoForm addTodo={addTodo} />
}

</Container>
   </React.Fragment>
    
)
}

export default App;