import React, {useState} from "react";

function App() {
  // const [fName, setFName] = useState("");
  // const [lName, setLName] = useState("");

  // function updateFName(event){
  // setFName(event.target.value);
  // }

  // function updateLName(event){
  // setLName(event.target.value);
  // }

  //Insted of writing repetative code two times write ones

  const [fullName, setFullName] = useState({
    fName:"",
    lName:""
  });

function handleChange(event){
// const newValue = event.target.value;
// const inputName = event.target.name;

const [value, name] = event.target;

setFullName((prevValue)=>{
if(name === "fName"){
  return { 
    fName:value,
    lName:prevValue.lName
  };
}
else if(name=== "lName"){
  return {
    fName:prevValue.fName,
    lName: value
  };
}
});
}

  return (
    <div className="container">
      <h1>
        Hello {fullName.fName} {fullName.lName}
      </h1>
      <form>
        <input
          onChange={handleChange}
          name="fName"
          placeholder="First Name"
          value={fullName.fName}
        />
        <input
          onChange={handleChange}
          name="lName"
          placeholder="Last Name"
          value={fullName.lName}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
