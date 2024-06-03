import React from 'react';
import Cell from './Cell';
import {typeOfErrors} from "./Game";

interface FieldProps {
    cords : [number,number]
    matrix: (number | null)[][];
    readonlyMatrix: boolean[][];
    onChange: (row: number, column: number, value: number) => void;
    invalidCell : [number, number] | null;
    isComplete : boolean
    errorsArray : typeOfErrors[] | null;
}

function isCellInBox(cellCords: [number, number], invalidCell: [number, number]): boolean {
    const boxStartRow = Math.floor(invalidCell[0] / 3) * 3;
    const boxStartCol = Math.floor(invalidCell[1] / 3) * 3;

    const cellRow = cellCords[0];
    const cellCol = cellCords[1];

    return (
        cellRow >= boxStartRow &&
        cellRow < boxStartRow + 3 &&
        cellCol >= boxStartCol &&
        cellCol < boxStartCol + 3
    );
}

const Field: React.FC<FieldProps> = ({ errorsArray, isComplete, invalidCell, cords, matrix, readonlyMatrix, onChange }) => {
    const fieldSize = 3;

    const renderCells = () => {
        const cells = [];

        for (let i = 0; i < fieldSize; i++) {
            const row = [];
            for (let j = 0; j < fieldSize; j++) {
                const value = matrix[i][j];
                const editable = readonlyMatrix[i][j];
                const cellCords : [number,number] = [cords[0] * 3 + i, cords[1] * 3 + j];

                let isInvalid = false;

                if (errorsArray && invalidCell) {

                    if (errorsArray.includes(typeOfErrors.ErrorRow) && cellCords[0] === invalidCell[0]) {
                        isInvalid = true;
                    } else if (errorsArray.includes(typeOfErrors.ErrorColumn) && cellCords[1] === invalidCell[1]) {
                        isInvalid = true;
                    } else if (errorsArray.includes(typeOfErrors.ErrorBox) && isCellInBox(cellCords, invalidCell)) {
                        isInvalid = true;
                    }
                }

                row.push(
                    <Cell
                        cords={[cords[0] * 3 + i, cords[1] * 3 + j]}
                        value={value}
                        editable={editable}
                        onChange={onChange}
                        isInvalid={isInvalid}
                        isComplete={isComplete}
                    />
                );
            }
            cells.push(<div key={`row-${i}`} className="cell-row">{row}</div>);
        }

        return cells;
    };

    return <div className="field">{renderCells()}</div>;
};

export default Field;