import React from "react";
import {Card,Button} from "semantic-ui-react";

const Todos = ({d,completeTodo,removeTodo,index,updateTodo}) => {
    // console.log(d);
    return(
        <Card.Group style={{display:"flex",
         "justifyContent":"space-evenly",
        }}>
            <Card 
             style={{textDecoration: d.isCompleted ? "line-through": "",
              width:"60rem"
            }}
            fluid color="blue" header={d.text}/>
            <div style={{display:'flex', alignItems:"center"}}>
            <Button primary
             onClick={() => completeTodo(index)}
            >complete</Button>
            <Button info
             onClick={() => updateTodo(d,index)}
            >update</Button>
    <Button color="red"
                 onClick={() => removeTodo(index)}
    >x</Button>
            </div>


        </Card.Group>
    )
}

export default Todos;