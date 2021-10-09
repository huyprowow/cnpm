// import './styles/App.scss';
import { useState } from "react";
import Form from "./components/Form";
import { nanoid } from "nanoid";
import TasksLists from "./components/TaskLists";
import FilterButton from "./components/FilterButton";
import './styles/dist/App.css'


//sprint2------------
//hàm lọc
const FILTER_MAP = {
  "Tất cả": () => true,
  "Chưa xong": (task) => !task.completed,
  "Đã xong": (task) => task.completed,
}
//mảng tên filter
const FILTER_NAMES = Object.keys(FILTER_MAP);
//---------------------------

const App = (props) => {
  const [tasks, setTasks] = useState(props.tasks);
  const [filter, setFilter] = useState('Tất cả'); //sprint2
  const [error, setError] = useState(false);

  const toggleTaskCompleted = (id) => {

    const updatedTasks = tasks.map(task => {
      if (id === task.id) {
        return { ...task, completed: !task.completed }
      }
      return task;
    });
    setTasks(updatedTasks);
  }

  const addTask = (name) => {
    console.log(name)
    let isExiting = false;
    tasks.forEach(task => {
      if (task.name === name) {
        isExiting = true;
        setError(true);
      }
    });

    if (!isExiting) {
      const newTask = {
        id: "item-" + nanoid(),
        name: name,
        completed: false
      }

      setTasks([...tasks, newTask]);
    }
  }
  const deleteTask = (id) => {
    console.log(id);
    console.log(tasks.filter(task => task.id !== id))
    const remainingTasks = tasks.filter(task => id !== task.id);
    setTasks(remainingTasks)
  }
  const editTask = (id, newName) => {
    const editedTask = tasks.map(task => {
      if (task.id === id) {
        return { ...task, name: newName };
      }
      return task;
    })
    setTasks(editedTask);
  }
  //sprint2--------------------------
  const filterList = FILTER_NAMES.map(
    name => <FilterButton key={name}
      name={name}
      isPressed={name === filter}
      setFilter={setFilter}
    />
  );
  //---------------------------------

  return (
    <div className="App">
      <Form addTask={addTask}
      isExitError={error}
       />
      {filterList}
      <TasksLists tasks={tasks}
        filter={filter}
        filterFunction={FILTER_MAP}
        toggleTaskCompleted={toggleTaskCompleted}
        deleteTask={deleteTask}
        editTask={editTask} />
    </div>
  );
}

export default App;
