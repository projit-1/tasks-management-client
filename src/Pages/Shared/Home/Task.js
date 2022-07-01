import React from 'react';

const Task = ({ task }) => {
    return (
        <div>
            <div class="card  bg-base-100 shadow-xl h-80">
                <div class="card-body">
                    <h2 class="card-title"> Task Name: {task.taskName}</h2>
                    <h4> Uses Tools:{task.usesTools}</h4>
                    <p> Description: {task.Description}</p>
                    <p>Description2:{task.Description2}</p>
                    <div class="card-actions justify-end">
                        <button class="btn btn-primary">Completed</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Task;