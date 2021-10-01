
import { useState } from 'react'
import { useForm } from 'react-hook-form'

export const Task = (props) => {
  const [isEditing, setEditing] = useState(false);
  const [newName, setNewName] = useState('');
  const { register, handleSubmit, formState: { errors } } = useForm()
  const handleChange = (e) => {
    setNewName(
      e.target.value
    );
  }
  const onSubmit = (e) => {
    // e.preventDefault();
    if (newName) {
      props.editTask(props.id, newName);
      setNewName('');
      setEditing(false);
    }
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      if (newName) {
        onSubmit();
      }
    }
  }

  const viewTemplate = (<form>
    <input
      type="checkbox"
      id={props.id}
      className="form-check-input"
      defaultChecked={props.completed}
      onChange={() => props.toggleTaskCompleted(props.id)}
    />
    <label htmlFor={props.id} className="form-check-label" id="task-label">{props.name}</label>
    <div className="contain-btn">

      <button className="btn btn-light btn-large"
        onClick={() => setEditing(true)}
      >Sửa</button>
      <button className="btn btn-danger btn-large"
        type="button"
        onClick={() => props.deleteTask(props.id)}
      >Xóa</button>
    </div>
  </form>);

  const editTemplate = (<form onSubmit={handleSubmit(onSubmit)} onKeyDown={handleKeyDown} >
    <div className="form-group" >
      <input
        type="text"
        className="form-field"
        placeholder={`sửa nhiệm vụ: ${props.name}`}
        {...register("nameEdit", { required: true })}
        id={props.id}
        value={newName}
        onChange={handleChange}
      />
      <label htmlFor={props.id} className="form-label">sửa nhiệm vụ: {props.name}</label>
      <br />
      {errors.nameEdit && <span className="text-warning">
        <i className="fas fa-exclamation-triangle"></i>
        không thể thay "{props.name}" bằng công việc rỗng
      </span>}
    </div >
    <div className="contain-btn">
      <button className="btn btn-dark btn-large"
        onClick={() => setEditing(false)}
      >Hủy</button>
      <button className="btn btn-success btn-large"
        type="submit"
      >Lưu</button>
    </div>
  </form>)

  return <li className="task" >{isEditing ? editTemplate : viewTemplate}</li>;
};