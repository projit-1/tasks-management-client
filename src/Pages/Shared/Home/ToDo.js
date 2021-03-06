import React, { useEffect, useState } from 'react';
import Task from './Task';


const ToDo = ({ task }) => {
    const [tasks, setTasks] = useState([])
    useEffect(() => {
        fetch('https://upper-lumberjack-54611.herokuapp.com/task')
            .then(res => res.json())
            .then(data => setTasks(data))
    }, [])
    return (
        <div>
            <h2 className='text-center text-2xl text-primary'>To-DoTasks: {tasks.length}</h2>
            <div className='grid lg:grid-cols-2 grid-cols-1 gap-5'>
                {
                    tasks.map(task => <Task
                        key={task._id}
                        task={task}
                    ></Task>)
                }
            </div>
        </div>
    );
};

export default ToDo;