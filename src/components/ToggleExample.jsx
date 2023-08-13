// import { useState } from "react"

// const ToggleExample = (props) => {

//     // const [v,f]= useState( startingValueForVar)
//     const [hiOrBye, setHiOrBye]= useState(false)
//     // const hiOrBye= false
//     console.log("state:", hiOrBye)

//     const [h1Text, setH1Text]= useState("Hello")
    
//     function handleToggleText() {
//         if (hiOrBye=== false){
//             setH1Text("hello")
//         }else {
//             setH1Text("Rock on")

//         }
//     }


//     return ( 
//         <h1
//          onClick={ () => {setHiOrBye(!hiOrBye)} }
//         >
//         🌹🌹🌹🌹🌹🌹🌹 
//         </h1> 
        
//  )
// }

// export default ToggleExample
//     // Conditonal rendering 



// // export default function 


import { useState } from 'react'


const ToggleExample =( props )=>{

    //  const [v, f] = useState( startingValueForVariable )
    const [hiOrBye, setHiOrBye] = useState(false)  //  🚚
    console.log("State of  hiOrBye: " , hiOrBye)


    //  const [v, f] = useState( startingValueForVariable )
    const [h1Text, setH1Text] = useState( "Hello!" )
    console.log("State of  h1Text: " , h1Text)



    function handleToggleText(){
        // setH1Text(!hiOrBye)
        h1Text ? 'Hello' : 'Have a blessed Weekend!'


        // if(hiOrBye === false){
        //     setH1Text( "Hello!" )
        // } else {
        //     setH1Text( "Have a Blessed Weekend!" )
        // }

    }
    // BONUS: Rewrite this as a ternary

    
    // BONUS++: Recreate the Sam/Gary Toggle from Module 2 - Repo Below Incase ⏳🌀💫
    //// https://github.com/10-1-pursuit/P_Mod2__Cohort_App_Application_Planning_and_Design


        // setH1Text( "Don't Do It Fam" )  // NO BUENO
  

    return(<>
        <h1 
            onClick={  
                
                (sythEvent)=>{ 

                    setHiOrBye( !hiOrBye )

                    handleToggleText()

                }  
            
            }    
        >
                {h1Text}
        </h1>
    </>)
}

export default ToggleExample



  // Conditional Rendering


