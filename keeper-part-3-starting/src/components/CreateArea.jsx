import React,{useState} from "react";

function CreateArea(props) {

const [note, setNote] = useState({
  title: "",
  content:""
});

function handleChange(event){
const {name, value} = event.target;

setNote(prevNote => {
  return {
    ...prevNote,
    [name]:value
};
});
}

function SubmitNote(event){
props.onAdd(note);
setNote({
  title:"",
  content:""
})

  //Stop Reloading of page
  event.preventDefault();
}

  return (
    <div>
      <form>
        <input
          name="title"
          onChange={handleChange}
          placeholder="Title"
          value={note.title}
        />
        <textarea
          name="content"
          onChange={handleChange}
          placeholder="Take a note..."
          rows="3"
          value={note.content}
        />
        <button onClick={SubmitNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
