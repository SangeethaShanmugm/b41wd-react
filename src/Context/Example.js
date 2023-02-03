import { useState, createContext,useContext } from 'react';
import { Sample2 } from './Sample2';

const NameContext = createContext()

export function Example() {
    //js starts
    // const nameList = ["Satish","Likith","Dibakar"];
     

    const [nameList, setNameList] = useState(["Satish","Likith","Dibakar"])
    const [name, setName] = useState("Deeksha")
    // const name1 = "Likith";
    const age = 20;


     
    function sayHello() {
        alert("You Clicked Me 😀")   
     }
    //js ends
    //jsx starts
    return (
      <NameContext.Provider value={name}>
        <div>
        {/* <h1>{name}</h1> */}
        <Sample />
        <Sample1 />
        <Sample2 />

 
        {/* //mapping */}
        {/* {nameList.map((nm, index) => <Sample key={index} name={nm}/>)}        
        <button onClick={sayHello}>Click Me!!!</button><br></br>
        <input
         onChange={(event) => setName(event.target.value)}
         value={name}
         type="text" 
         placeholder="Enter name" />
         {/* // copy the nameList and add newName */}
       {/* <button
         onClick={() => setNameList([...nameList, name ])}
         >Change Name</button>  */}
        </div>
      </NameContext.Provider>
        
     )
       //jsx ends
  }
  
      
 export const useGlobalContext = () => {
  return useContext(NameContext);
};


  function Sample() {

    const name = useContext(NameContext);

    return (
        <div>
              <h1> Hi,{name}🥳🥳🎆🎇</h1>
              {/* <Sample1 name={name} /> */}
        </div>
    )
  }

  function Sample1() {

    const name = useContext(NameContext);
    
      return (
        <div>
          <h1> Hi,{name}🥳🥳🎆🎇</h1>
    
        </div>
      );
    }