import { Input } from 'antd';
import { useState } from 'react';

function InputConfig({ value = '', title, id, placeholder = '', percent = false }) {
    const [input, setInput] = useState(value);

    const handleChange = (e) => {
        setInput(e.target.value);
    };

    return (
        <div>
            <label className="cursor-pointer" htmlFor={id}>
                {title}
            </label>
            <div className='flex items-end'>
                <Input
                    className={`mt-2 h-[40px] ${percent && 'rounded-r-none'}`}
                    onChange={(e) => handleChange(e)}
                    id={id}
                    value={input}
                    placeholder={placeholder}
                />

                {percent && <div className='h-[40px] bg-[#edebeb] border-t border-r border-b border-[#bebebe] flex items-center px-4 rounded-r-md'><span>%</span></div>}
            </div>
        </div>
    );
}

export default InputConfig;
