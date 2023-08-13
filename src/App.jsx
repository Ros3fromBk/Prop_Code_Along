import { useState } from 'react'

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import ToggleExample from './components/ToggleExample'
import './App.css'

import Card from "./components/Card"
import ProductPage from "./components/ProductPage"

import UseStateWithArrays from "./components/UseStateWithArrays"


export default App


// const myProducts = []

// // const reusingCard = <Card />


function App() {
  //////// js 

  const adiasUltra = "Ultra Boost - Adidas - $160"
  const airForceOnes = "Air Force One Low - Nike - $100"

  ////////  js
  return (
    <>
      {/* JSX */}
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>    <h1>Veet/Vite/Veetay + React</h1>

      {/* COMPONENT SYNTAX  */}

      <Card />
      <ProductPage />

      {/* <ToggleExample /> */}

      {/* <li>{adiasUltra}</li> */}

      {/* <li>{airForceOnes}</li> */}



      {/* JSX */}

    </>
  )
  }

  //       {/* {reusingCard} */}  VARIABLE SYNTAX




  //       {/* 
  // }



  // }


  // // A "refresh" is a RE-SET ; A rerender, remembers  - Sam 🙏🏾🧘🏾‍♂️🪷💫


  // // const myVar = "Yur"

  //          📗            react📚



  // function App( ) {

  // const [someVariable, someSetterFunctionForSomeVariable] = useState( initalValue )
  // const [count, setCount] = useState( 100 )
  // const count = 100   // initializing value of useState Variable

  // const [countAgain, setCountAgain] = useState( 4000 )  // yes - you can
  //// you can make another/multiple States






  // const onlyButton = document.querySelector("button")
  //   onlyButton.addEventListener( "click" , (event)=>{} )





  // const theResultOfUseState = useState(":)")
  // console.log( "theResultOfUseState: ", theResultOfUseState )


  // function showUseStateExample(){ 

  // const someVariable = "Y'all Are Doing Great!"

  // const someSetterFunctionForSomeVariable =()=> { 
  // some magic / some functionality
  // }

  // return [someVariable, someSetterFunctionForSomeVariable]
  // return ["firstThing", "secondThing"]
  // } 
  // console.log( showUseStateExample() )






  // count = 11;  // no bueno  :(


  //// Array Destructuring

  // const [christine, mike, jeremy] = ["christine :)", "mike :)", "jeremy :)"]
  // const christine = "christine :)"
  // const mike = "mike :)"
  // const jeremy = "jeremy :)"

  // console.log("christine: ", christine)
  // console.log("mike: ", mike)
  // console.log("jeremy: ", jeremy)




  ////  Object Destructuring

  // let sam = {
  //   name: "Sammay :)"
  // }
  // console.log(sam.name)

  // const { name } = sam
  // console.log("Destructured Key 'name' :" , name)



  //////// js
  // return (
      // {/* Toggle Feature Compoenent */}
// {/* <ToggleExample> */}




      // <div className="card">

        // <button onClick={(sythEvent) => { setCount(count + 1) }}>
        //   count is {count}
        // </button>
        //  <button onClick={ (newDog) => { console.log("youwishthiwasadoglol: ", newDog )} }>
          // no bueno
        // </button> 

      // </div>

  
