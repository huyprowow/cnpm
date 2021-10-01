import { useState } from 'react';
import { useForm } from 'react-hook-form'
const Form = (props) => {
    const [name, setName] = useState('');
    const { register, handleSubmit, formState: { errors } } = useForm();//
    const handleNewTask = (e) => {
        setName(e.target.value);
    }

    const onSubmit = (e) => {
        // e.preventDefault();
        props.addTask(name);
        setName('');
    }
    
    const handleKeyDown = (e) => {
        if(e.key==='Enter'){
            if(name){
                props.addTask(name);
                setName('')
                e.target.blur();
            }
        }
        // if (e.key === 'Enter') {
        //     if (name) {
        //         setName('');
        //     }
        // }
    }
    return (
        <form id="form-add" action="#" onSubmit={handleSubmit(onSubmit)} >
            <h1>hôm nay bạn có những việc gì ?</h1>
            <div className="form-group">
                <input
                    type="text"
                    id="input-new-task"
                    placeholder="Thêm nhiệm vụ ?"
                    className="form-field"
                    value={name}
                    {...register("name", {
                        required: true
                    })}
                    onChange={handleNewTask}
                    onKeyDown={handleKeyDown}
                />
                <label htmlFor="input-new-task" className="form-label">Thêm nhiệm vụ ?</label>
                <button className="btn btn-dark" id="btn-add" type="submit">Thêm</button>
                <br />
                {errors.name &&
                    <span className="text-warning">
                        <i className="fas fa-exclamation-triangle"></i>
                        không thể thêm công việc rỗng
                    </span>}
            </div>
        </form>
    );
}

export default Form;