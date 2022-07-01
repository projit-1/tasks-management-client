import { format } from 'date-fns';
import React, { useState } from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
const Calander = () => {
    const [date, setDate] = useState(new Date());

    return (
        <div>
            <h2 className='text-2xl text-center'>Calander</h2>
            <div className='flex items-center justify-center'>
                <DayPicker
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                />
                <p className='text-xl'>You have Selected : {format(date, 'PP')}</p>
            </div>
        </div>
    );
};

export default Calander;