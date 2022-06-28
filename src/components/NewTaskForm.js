import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {

  const [text, setText] = useState("")
  const [category, setCategory] = useState("")

  const addNewTask = (e) => {
    e.preventDefault()
    onTaskFormSubmit({text, category})
  }

  return (
    <form className="new-task-form" onSubmit={(e) => addNewTask(e)}>
      <label>
        Details
        <input type="text" onChange = {(e) => setText(e.target.value)} name="text" value={text}/>
      </label>
      <label>
        Category
        <select name="category" onChange = {(e) => setCategory(e.target.value)} value={category}>
          <option></option>

          {categories.map(category => (
            <option>{category}</option>
          ))}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}


export default NewTaskForm;
