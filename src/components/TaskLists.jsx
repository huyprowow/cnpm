import { Task } from './Task'

const TasksLists = (props) => {

  console.log(props)
  //sprint2--------------
  // const taskList = props.tasks.filter(props.filterFunction[props.filter]).map(
  //   (task, i) => <Task
  //     id={task.id}
  //     key={task.id}//không được sử dụng chỉ mục mảng(i) làm thuọc tính key, lấy id từ props
  //     name={task.name}
  //     completed={task.completed}
  //     toggleTaskCompleted={props.toggleTaskCompleted}
  //     deleteTask={props.deleteTask}
  //     editTask={props.editTask}
  //   />
  // )
  //-------------------------------

  const taskList = props.tasks.map(
    (task, i) => <Task
      id={task.id}
      key={task.id}//không được sử dụng chỉ mục mảng(i) làm thuọc tính key, lấy id từ props
      name={task.name}
      completed={task.completed}
      toggleTaskCompleted={props.toggleTaskCompleted}
      deleteTask={props.deleteTask}
      editTask={props.editTask}
    />
  )
  return (
    <div id="task-list">
      {taskList.length > 0 ? <h2>Có {taskList.length} việc:</h2> : <h2>không có công việc nào.</h2>}
      <ul>
        {taskList}
      </ul>
    </div>
  );
}
export default TasksLists;