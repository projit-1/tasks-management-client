import React from 'react';

const Task = ({ task }) => {
    return (
        <div>
            <div class="card  bg-base-100 shadow-xl">
                <div class="card-body">
                    <h2 class="card-title"> Task Name: {task.name}</h2>
                    <h4> Uses Tools:{task.usedtools}</h4>
                    <p> Description: {task.description1}</p>
                    <p>Description2:{task.description2}</p>
                    <div class="card-actions justify-end">
                        <button class="btn btn-primary">Completed</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Task;