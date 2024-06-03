import React, { ChangeEvent } from 'react';


interface CellProps {
    cords : [number,number]
    value: number | null,
    editable: boolean,
    isInvalid : boolean
    isComplete : boolean

    onChange: (row: number, column: number, value: number) => void;
}

const Cell: React.FC<CellProps> = ({isComplete, isInvalid, cords,value, editable, onChange}) => {


    const readOnly : string = !editable ? 'readOnly' : '';
    const invalid : string = isInvalid ? 'invalid' : '';
    const complete : String = isComplete ? 'complete' : '';


    const handleChange = (event : ChangeEvent<HTMLInputElement>) => {
        const inputValue = parseInt(event.target.value, 10);
        if ((inputValue >= 1 && inputValue <= 9) || event.target.value === '') {
            if(readOnly !== 'readOnly')
            {
                onChange(cords[0], cords[1], inputValue);
            }
        }
    };




    return (
        <input data-row={cords[0]} data-column = {cords[1]}  type='number' min={'1'} max={'9'} value={value ?? ''} onChange={handleChange} className={`cell ${readOnly} ${invalid} ${complete}`} />
    )

};

export default Cell;

