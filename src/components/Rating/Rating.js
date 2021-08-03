import React, {useState} from "react";

const Rate = ({callback}) => {
    const [value, setValue] = useState(5)
    const rateHandler = (e) => {
        return setValue(e.currentTarget.value)
    }

    return (
        <div style={{color: '#fff'}}>
            <input
                type="range"
                min='1'
                max='10'
                value={value}
                onChange={rateHandler}
            />
            {value}
            <p>
                <button onClick={() => callback(value)}>Rate</button>
            </p>
        </div>
    )
}

export default Rate