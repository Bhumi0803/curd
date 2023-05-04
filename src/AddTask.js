import React from 'react';
import { useState } from 'react';




export default function AddTask({ onAddTask }) {

  const [text, setText] = useState('text');

  
    localStorage.setItem('data', JSON.stringify(text));

    const item=window.localStorage.getItem('data');
    console.log(item);

  return (
    <React.Fragment>
      <input
        placeholder="Add task"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={() => {
        setText('');
        onAddTask(text);
      }}>Add</button>
      <br /><br />
      <input type="radio" name="task" id="female" />
      <label htmlFor="female">female</label> <br />
      <input type="radio" name="task" id="male" />
      <label htmlFor="male">male</label> <br />
      <input type="radio" name="task" id="other" />
      <label htmlFor="other">other</label> 
      <br /><br />
      <input type="checkbox" name="data1" id="data1" />
      <label htmlFor="data1">task1</label> <br />
      <input type="checkbox" name="data2" id="data2" />
      <label htmlFor="data">task2</label> <br />
      <input type="checkbox" name="data3" id="data3" />
      <label htmlFor="data3">task3</label> <br />
      <input type="checkbox" name="data4" id="data4" />
      <label htmlFor="data4">task4</label> <br />
      <br />

      <label for="task">Choose a car:</label>

      <select name="task" id="task">
        <option value="task1">task1</option>
        <option value="task2">task2</option>
        <option value="task3">task3</option>
        <option value="task4">task4</option>
      </select>
      <br /><br />
    </React.Fragment>
  )
}
