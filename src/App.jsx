import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './Todo'
import Actor from './Actor'
import Singer from './Singer'
import BookStore from './BookStore'

function App() {

  const actors = ['Sakib khan', 'Shariful Raj', 'Siyam', "Arefin Shuvo", 'Ananto Jalil']
  
  const singers = [
    { name: 'Dr. Mahfujur Rahman', age: 68 },
    { name: 'Eva Rahman', age: 44 },
    { name: 'Asif Khan', age: 45 },
    { name: 'Agun', age: 47 },
    { name: 'Habib', age: 38 }

  ]

const books = [
{id: 1, name: 'physics', price:100 },
{id: 2, name: 'history', price:110 },
{id: 3, name: 'biology', price:120 },
{id: 4, name: 'chemistry', price:90 },
{id: 5, name: 'Math', price:80 }

]


  return (
    <>
      <h1>Vite + React</h1>
    <BookStore books={books}></BookStore>


      {
        singers.map(singer => <Singer singer = {singer}></Singer>)
      }


      {/* // amra chaile aivabe hard code name na likhe array declare kare dynamically name dite pari
      // ar jonno curley bracket die suru karsi and map karbo jehetu akta array retrun karbe
      // r map function ar vitore component k pass kare dibo */}
      <Actor name={"Bappa Raj"}></Actor>
      {
        actors.map(actor => <Actor name={actor}></Actor>)
      }



      {/* <Todo
       task="Learn React" isDone="true"></Todo>
      <Todo
       task="Core Concepts" isDone="false"></Todo>
      <Todo
       task="Try JSX"></Todo> */}

      {/* //tumi chaile isse moto tumar property ar nam die pathaite paro, and ai full jinista nicher function ar 
      // moddhe object hisebe ase
      <Device name="laptop" price="45000"></Device>
      <Device name="mobile" price="25000"></Device>
      <Person></Person>

      //akhane destructuring ar maddhome kivabe acceess kara jai ta dekhno hobe
      <Student grade="7" score="99" ></Student>
      <Student grade="9" score="89" ></Student>
      <Student></Student>
      <Developer></Developer> */}

    </>
  )
}


// akhane uporer property name gulo akhane object akare ase ai parameter ar moddhe. so object hisebe 
// asle object hisebe access karte parbo
function Device(props) {
  // console.log(props)
  // jehetu object akare astese sehetu hardcode ar laptop ba mobile na likhe dyanamically likhte paro
  // tokhon laptop and mobile akhane dynamically chole asbe
  // amra besir vag somoi destructuring ar maddhome acceess karbo, seta student ar oikhane dekhano holo
  return <h2>This device : {props.name} price: {props.price}</h2>
}

function Person() {
  const person = { name: 'Nazrul Islam', id: 107 }
  const age = 35;
  return <h3>I am {person.name}. My age {age} and my id number {person.id}</h3>

}

//  akhane amra j code gulo likhtesi ta dekthe html ar moto mone holoe ara kintu html na ara holo jsx file
// file. aikhen niche return ar pore bracket ar modhe div take return kara hoese. imean return keyword
// ar por jodi ak line a same line return kara hoi then first bracket lagena but multiple line hoi then 
// brcket ar modhe likhte hoi and 
// ai function Student k atake component bola hoi, function App ar vitor theke call kara hoese as well as person component keo 
// ai khane class use kara jabe na, className use karte hobe. class hosse js ar reserved keyword, class use karleo kaj hobe but amra 
// className use karbo ba atai use karte hoi,  aikhane student namer akta className nea hoese ja naki App.css a ar moddhe lekha hoese

//akhane student function ar moddhe amra destructuring karbo and default value 1, 0 die dibo aivabe ->{grade=1, score=0} 
function Student({ grade = 1, score = 0 }) {
  console.log(grade, score)
  return (
    <div className='student'>
      <h3>This is a student</h3>
      <p>Name:</p>
      <p>Class: {grade}</p>
      <p>Score: {score}</p>
    </div>
  )
}




// aikhane amra css ar kaj korbo object ar moto kare then oi variable take pass kare dibo. akhane property name gulo camelCase ar moto kare likhte hobe
// value gulo cottation ar moddhe likhte hobe then coma dite hobe
// amra variable take pass na koreo full object takeo style ar vitore pass kare dite pari
function Developer() {
  const developerStyle = {
    backgroundColor: 'purple',
    padding: '20px',
    margin: '20px',
    borderRadius: '10px',
    color: 'white'
  }
  return (
    <div style={developerStyle}>
      <h4>Developer</h4>
      <p>Coding:</p>
      <p>Tools:</p>
      <p>Skills:</p>
    </div>
  )
}



export default App
