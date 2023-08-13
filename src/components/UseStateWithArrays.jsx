import { useState } from "react"



const UseStateWithArrays = () => {

    const [arrayOfNums, setArrayOfNum] = useState()

    /*
    
        const [someBoolean,setSomeSBoolean] =useState(false)
        const [someString,setSomeString] =useState("")
        const [someNumber,setSomeNumber] =useState(0)
    
        const[someObj,setSomeObject] = useState(null)
    */
    return (
        <div>
            <h1>show me the nums </h1>
            {
                arrayOfNums.map((eachNum) => {
                    return (<h2>{eachNum}</h2>)})
})
            
                    </div >
                    )
                }

export default UseStateWithArrays