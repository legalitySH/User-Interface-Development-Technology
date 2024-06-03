import React, { useState } from 'react';
import StructuralField from './StructuralField';
import {typeOfErrors} from "./Game";

interface BoardProps {
  matrix: (null | number)[][];
  readonlyMatrix: boolean[][];
  onChange:  (row: number, col: number, value: number) => void;
  invalidCell : [number,number] | null;
  isComplete : boolean
  errorsArray : typeOfErrors[] | null;
}

const Board: React.FC<BoardProps> = ({ errorsArray, isComplete,invalidCell,matrix, readonlyMatrix, onChange }) => {
  const renderFields = () => {
    const fields: React.ReactNode[] = [];
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        const { subMatrix, subReadonlyMatrix } = getSubMatrix(matrix, readonlyMatrix, i, j);

        fields.push(
            <StructuralField
                cords={[i,j]}
                matrix={subMatrix}
                readonlyMatrix={subReadonlyMatrix}
                onChange={onChange}
                invalidCell={invalidCell}
                isComplete = {isComplete}
                errorsArray={errorsArray}
            />
        );
      }
    }

    return fields;
  };

  const getSubMatrix = (matrix: (null | number)[][], readonlyMatrix: boolean[][], row: number, column: number) => {
    const subMatrix: (number | null)[][] = [];
    const subReadonlyMatrix: boolean[][] = [];

    for (let i = row * 3; i < (row + 1) * 3; i++) {
      subMatrix.push(matrix[i].slice(column * 3, (column + 1) * 3));
      subReadonlyMatrix.push(readonlyMatrix[i].slice(column * 3, (column + 1) * 3));
    }

    return { subMatrix, subReadonlyMatrix };
  };

  return <div className="board">{renderFields()}</div>;
};

export default Board;