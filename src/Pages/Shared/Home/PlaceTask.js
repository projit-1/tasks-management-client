import React from 'react';
import { useForm } from "react-hook-form";

const PlaceTask = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = (data) => console.log(data);
    return (
        <div>
            <h2 className='text-center text-2xl'>Please Place your task</h2>
            <div className='flex items-center justify-center'>
                <form onSubmit={handleSubmit(onSubmit)}>

                    <div class="form-control w-full max-w-xs">
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
                        <textarea
                            type=
                            "text"
                            placeholder="Uses tools to build the task"
                            class="textarea textarea-accent"
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
                        >
                        </textarea>
                        <label class="label">
                            {errors.usesTools?.type === 'required' && <span class="label-text-alt text-red-500">{errors.usesTools.message}</span>}
                            {errors.usesTools?.type === 'pattern' && <span class="label-text-alt text-red-500">{errors.usesTools.message}</span>}
                        </label>
                    </div>



                    {/* <div class="form-control w-full max-w-xs">
    <label class="label">
        <span class="label-text">Uses Tools</span>
    </label>
    <input type=
        "text" placeholder="Uses tools to build the task"
        class="input input-bordered w-full max-w-xs"
        {...register("usesTools", {
            required: {
                value: true,
                message: 'Uses Tools name is reqiured'
            },
            pattern: {
                value: /[A-Za-z]{50}/,
                message: 'Provide valid Uses Tools name'
            }
        })}
    />
    <label class="label">
        {errors.usesTools?.type === 'required' && <span class="label-text-alt text-red-500">{errors.usesTools.message}</span>}
        {errors.usesTools?.type === 'pattern' && <span class="label-text-alt text-red-500">{errors.usesTools.message}</span>}

    </label>
</div> */}

                    <div class="form-control w-96">
                        <label class="label">
                            <span class="label-text">Description</span>
                        </label>
                        <textarea
                            type=
                            "text"
                            placeholder="Description"
                            class="textarea textarea-accent"
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
                        >
                        </textarea>
                        <label class="label">
                            {errors.Description?.type === 'required' && <span class="label-text-alt text-red-500">{errors.Description.message}</span>}
                            {errors.Description?.type === 'pattern' && <span class="label-text-alt text-red-500">{errors.Description.message}</span>}
                        </label>
                    </div>

                    <div class="form-control w-96">
                        <label class="label">
                            <span class="label-text">Description2</span>
                        </label>
                        <textarea
                            type=
                            "text"
                            placeholder="Description2"
                            class="textarea textarea-accent"
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
                        >
                        </textarea>
                        <label class="label">
                            {errors.Description2?.type === 'required' && <span class="label-text-alt text-red-500">{errors.Description2.message}</span>}
                            {errors.Description2?.type === 'pattern' && <span class="label-text-alt text-red-500">{errors.Description2.message}</span>}
                        </label>
                    </div>






                    <input type="submit" />
                </form>
            </div>
        </div>
    );
};

export default PlaceTask;