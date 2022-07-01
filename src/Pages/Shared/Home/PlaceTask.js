import React from 'react';
import { useForm } from "react-hook-form";
import Button from '../Button';

const PlaceTask = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = (data) => console.log(data);
    return (
        <div>
            <h2 className='text-center text-2xl'>Please Place your task</h2>
            <div className='flex items-center justify-center'>
                <form onSubmit={handleSubmit(onSubmit)}>

                    <div class="form-control w-96">
                        <label class="label">
                            <span class="label-text">Task Name</span>
                        </label>
                        <input type=
                            "text" placeholder="Task name"
                            class="input input-bordered w-96"
                            {...register("taskName", {
                                required: {
                                    value: true,
                                    message: 'Task Name is reqiured'
                                },
                                pattern: {
                                    value: /[A-Za-z]{10}/,
                                    message: 'Provide valid Task Name'
                                }
                            })}
                        />
                        <label class="label">
                            {errors.taskName?.type === 'required' && <span class="label-text-alt text-red-500">{errors.taskName.message}</span>}
                            {errors.taskName?.type === 'pattern' && <span class="label-text-alt text-red-500">{errors.taskName.message}</span>}

                        </label>
                    </div>
                    <div class="form-control w-96">
                        <label class="label">
                            <span class="label-text">Uses Tools</span>
                        </label>
                        <input type=
                            "text" placeholder="Uses tools to build the task"
                            class="input input-bordered w-96"
                            {...register("usesTools", {
                                required: {
                                    value: true,
                                    message: 'Uses Tools name is reqiured'
                                },
                                pattern: {
                                    value: /[A-Za-z]{10}/,
                                    message: 'Provide valid Uses Tools name'
                                }
                            })}
                        />
                        <label class="label">
                            {errors.usesTools?.type === 'required' && <span class="label-text-alt text-red-500">{errors.usesTools.message}</span>}
                            {errors.usesTools?.type === 'pattern' && <span class="label-text-alt text-red-500">{errors.usesTools.message}</span>}

                        </label>
                    </div>

                    <div class="form-control w-96">
                        <label class="label">
                            <span class="label-text">Description</span>
                        </label>
                        <input type=
                            "text" placeholder="Task name"
                            class="input input-bordered w-96"
                            {...register("Description", {
                                required: {
                                    value: true,
                                    message: 'Description is reqiured'
                                },
                                pattern: {
                                    value: /[A-Za-z]{10}/,
                                    message: 'Provide valid Description'
                                }
                            })}
                        />
                        <label class="label">
                            {errors.Description?.type === 'required' && <span class="label-text-alt text-red-500">{errors.Description.message}</span>}
                            {errors.Description?.type === 'pattern' && <span class="label-text-alt text-red-500">{errors.Description.message}</span>}

                        </label>
                    </div>

                    <div class="form-control w-96">
                        <label class="label">
                            <span class="label-text">Description2</span>
                        </label>
                        <input type=
                            "text" placeholder="Task name"
                            class="input input-bordered w-96"
                            {...register("Description2", {
                                required: {
                                    value: true,
                                    message: 'Description2 is reqiured'
                                },
                                pattern: {
                                    value: /[A-Za-z]{10}/,
                                    message: 'Provide valid Description2'
                                }
                            })}
                        />
                        <label class="label">
                            {errors.Description2?.type === 'required' && <span class="label-text-alt text-red-500">{errors.Description2.message}</span>}
                            {errors.Description2?.type === 'pattern' && <span class="label-text-alt text-red-500">{errors.Description2.message}</span>}

                        </label>
                    </div>
                    <Button className='w-96'><input type="submit" /></Button>

                </form>
            </div>
        </div>
    );
};

export default PlaceTask;