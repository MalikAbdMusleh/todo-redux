import React, { useState,useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment,decrement ,edit} from "./counterSlice";
import "./Counter.module.css";

export default function TodoListContainer() {
  const list =useSelector((state)=>state.todo.list)
  const dispatch = useDispatch();
  const [title, setTitle] = useState('No Title');
  const [descreption, setDescreption] = useState('No Descreption');

// useEffect(()=>{alert(JSON.stringify(list))},[])
  return (
    <div className=" flex-column d-flex justify-content-center m-5" >
      <div className="d-flex justify-content-around m-5 mb-1">
      <button type="button" className="btn btn-primary"     onClick={() => dispatch(increment({id:0,title:title,description:descreption}))} >New </button>

      </div>
      <div className=" d-flex justify-content-center">
      <div class="input-group input-group-sm mb-3">
  <div class="input-group-prepend">
    <span class="input-group-text" id="inputGroup-sizing-sm">Title</span>
  </div>
  <input type="text" class="form-control" onChange={(e)=>setTitle(e.target.value)} aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"/>
</div>

<div class="input-group mb-3">
  <div class="input-group-prepend">
    <span class="input-group-text" id="inputGroup-sizing-default">Descreption</span>
  </div>
  <input type="text" class="form-control" onChange={(e)=>setDescreption(e.target.value)}  aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
</div>
      </div>

      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Title</th>
            <th scope="col">Discreption</th>
            <th scope="col">Operations</th>
          </tr>
        </thead>
        <tbody>
          {list.map((e,i)=><tr key={i}>
            <th scope="row">{i}</th>
            <td>{e.title}</td>
            <td>{e.description}</td>
          <td>    <button type="button" className="btn btn-outline-success"   onClick={() => dispatch(edit({id:e.id,title:title,description:descreption}))}>Edit</button>
      <button type="button" className="btn btn-outline-danger"  onClick={()=>dispatch(decrement(e.id))} >Delete</button></td>  
          </tr>)}
   
        </tbody>
      </table>
    </div>
  );
}
