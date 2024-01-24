import { Select } from "antd";

function SelectConfig({ options, title }) {
    return ( 
        <div>
            <h1>{title}</h1>
            <Select
                className="w-full h-[40px] mt-2"
                defaultValue={options[0].label}
                options={options}
            />
        </div>
    );
}

export default SelectConfig;