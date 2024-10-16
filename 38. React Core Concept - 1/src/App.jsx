import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './todo'
import Actor from './Actor'
import Singer from './Singer'

function App() {
  const actors = ['Sakib', 'Shoriful raj', 'Jasim', 'Rubel'];
  const singers = [
    {name: 'mahfuzur rahman', age: 63},
    {name: 'Eva', age: 39},
    {name: 'Shuvro', age : 59},
    {name: 'Pritom', age : 28},
]
  return (
    <>
      <h1>React</h1>
      {
        singers.map(singer => <Singer singer={singer}></Singer>)
      }
      <Actor name={"Bappa Raz"}></Actor>
      {
        actors.map(actor => <Actor name={actor}></Actor>) 
      }
      {/* <Person></Person>
      <Todo 
      task="Learn React" 
      isDone ={true}> </Todo>

      <Todo 
      task="Explore Core Concept" 
      isDone={false}></Todo>

      <Todo 
      task="Try JSX" 
      isDone={true}></Todo> */}
    </>
  )
}

function Person(){
  const age = 22;
  return <h2>I am a Person with age : {age}</h2>
}

function Device(){
  
}


export default App
