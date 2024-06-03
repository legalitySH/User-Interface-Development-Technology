import React, {useState, useEffect}  from 'react';
import Board from './Board';
import {useHotkeys} from 'react-hotkeys-hook';

function cloneMatrix(matrix: (number | null)[][]): (number | null)[][] {
  return matrix.map((row) => [...row]);
}

function generateSudoku(): [(number | null)[][], (number | null)[][]] {
  const matrix: (number | null)[][] = Array.from({ length: 9 }, () => Array(9).fill(null));
  fillSudoku(matrix, 0, 0);

  const filledMatrix: (number | null)[][] = cloneMatrix(matrix);
  removeCells(matrix, 0.7);
  const sudokuMatrix: (number | null)[][] = cloneMatrix(matrix);
  return [filledMatrix, sudokuMatrix];
}

function fillSudoku(matrix: (number | null)[][], row: number, col: number): boolean {
  if (row === 9) {
    return true;
  }

  const [nextRow, nextCol] = getNextPosition(row, col);
  const numbers = shuffle([1, 2, 3, 4, 5, 6, 7, 8, 9]);

  for (const num of numbers) {
    if (isValidPlacement(matrix, row, col, num)) {
      matrix[row][col] = num;

      if (fillSudoku(matrix, nextRow, nextCol)) {
        return true;
      }

      matrix[row][col] = null;
    }
  }

  return false;
}

function getNextPosition(row: number, col: number): [number, number] {
  if (col === 8) {
    return [row + 1, 0];
  } else {
    return [row, col + 1];
  }
}

function isValidPlacement(matrix: (number | null)[][], row: number, col: number, num: number | null): boolean {
  return (
      isRowValid(matrix, row, col, num) &&
      isColumnValid(matrix, row, col, num) &&
      isBoxValid(matrix, row, col, num)
  );
}

function isRowValid(matrix: (number | null)[][], row: number, col: number, num: number | null): boolean {
  for (let c = 0; c < 9; c++) {
    if (c !== col && matrix[row][c] === num) {
      return false;
    }
  }
  return true;
}

function isColumnValid(matrix: (number | null)[][], row: number, col: number, num: number | null): boolean {
  for (let r = 0; r < 9; r++) {
    if (r !== row && matrix[r][col] === num) {
      return false;
    }
  }
  return true;
}

function isBoxValid(matrix: (number | null)[][], row: number, col: number, num: number | null): boolean {
  const boxStartRow = Math.floor(row / 3) * 3;
  const boxStartCol = Math.floor(col / 3) * 3;

  for (let r = boxStartRow; r < boxStartRow + 3; r++) {
    for (let c = boxStartCol; c < boxStartCol + 3; c++) {
      if (r !== row && c !== col && matrix[r][c] === num) {
        return false;
      }
    }
  }
  return true;
}

function shuffle(array: (number | null)[]): (number | null)[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

function removeCells(matrix: (number | null)[][], percentage: number): void {
  const totalCells = 81;
  const cellsToRemove = Math.floor(totalCells * percentage);

  for (let i = 0; i < cellsToRemove; i++) {
    let row = getRandomNumber(0, 8);
    let col = getRandomNumber(0, 8);

    while (matrix[row][col] === null) {
      row = getRandomNumber(0, 8);
      col = getRandomNumber(0, 8);
    }

    matrix[row][col] = null;
  }
}

function createBooleanMatrix(matrix: (number | null)[][]): boolean[][] {
  const booleanMatrix: boolean[][] = [];

  for (let row = 0; row < matrix.length; row++) {
    const booleanRow: boolean[] = [];

    for (let col = 0; col < matrix[row].length; col++) {
      booleanRow.push(matrix[row][col] === null);
    }

    booleanMatrix.push(booleanRow);
  }

  return booleanMatrix;
}


function getRandomNumber(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


function isValidSudoku(matrix: (number | null)[][]): boolean {
  for (let submatrix of matrix) {
    if(submatrix.includes(null))
    {
      return false;
    }
  }
  for (let row = 0; row < 9; row++) {
    const rowSet = new Set<number>();
    for (let col = 0; col < 9; col++) {
      const num = matrix[row][col];
      if (num !== null) {
        if (rowSet.has(num)) {
          return false;
        }
        rowSet.add(num);
      }
    }
  }

  for (let col = 0; col < 9; col++) {
    const colSet = new Set<number>();
    for (let row = 0; row < 9; row++) {
      const num = matrix[row][col];
      if (num !== null) {
        if (colSet.has(num)) {
          return false;
        }
        colSet.add(num);
      }
    }
  }

  for (let blockRow = 0; blockRow < 3; blockRow++) {
    for (let blockCol = 0; blockCol < 3; blockCol++) {
      const blockSet = new Set<number>();
      for (let row = blockRow * 3; row < blockRow * 3 + 3; row++) {
        for (let col = blockCol * 3; col < blockCol * 3 + 3; col++) {
          const num = matrix[row][col];
          if (num !== null) {
            if (blockSet.has(num)) {
              return false;
            }
            blockSet.add(num);
          }
        }
      }
    }
  }

  return true;
}

export enum typeOfErrors{
  ErrorRow,
  ErrorColumn,
  ErrorBox
}

function getErrorsArray(matrix: (number | null)[][], row: number, col: number, num: number | null): typeOfErrors[] {
  let errors: typeOfErrors[] = [];

  if (!isRowValid(matrix, row, col, num)) {
    errors.push(typeOfErrors.ErrorRow);
  }

  if (!isColumnValid(matrix, row, col, num)) {
    errors.push(typeOfErrors.ErrorColumn);
  }

  if (!isBoxValid(matrix, row, col, num)) {
    errors = [];
    errors.push(typeOfErrors.ErrorBox);
  }

  return errors;
}






const Game: React.FC = () => {
  const [fillMatrix, sudokuMatrix] = generateSudoku();
  const [lastChangeCell, setLastChangedCell] = useState<[number, number] | null>(null);
  const [matrix, setMatrix] = useState<(number | null)[][]>(sudokuMatrix);
  const [filledMatrix, setFilledMatrix] = useState<(number | null)[][]>(fillMatrix);
  const [readOnlyMatrix, setReadOnlyMatrix] = useState<boolean[][]>(createBooleanMatrix(sudokuMatrix));
  const [wrongCell, setWrongCell] = useState<[number, number] | null>(null);
  const [errorsArray , setErrorsArray] = useState<typeOfErrors[] | null> (null);
  const [isComplete, setIsComplete] = useState<boolean>(false);
  const [helpCount , setHelpCount] = useState<number>(5);

  useHotkeys('r', () => newGame());
  useHotkeys('h', () => getHelp());

  console.table(filledMatrix);

  const handleChange = (row: number, col: number, value: number) => {
    const newMatrix = [...matrix];
    newMatrix[row][col] = value;
    setMatrix(newMatrix);
    setLastChangedCell([row, col]);
    checkValidity(newMatrix, readOnlyMatrix, [row, col]);
  };

  const newGame = () => {
    const [newFillMatrix, newSudokuMatrix] = generateSudoku();
    setMatrix(newSudokuMatrix);
    setFilledMatrix(newFillMatrix);
    setReadOnlyMatrix(createBooleanMatrix(newSudokuMatrix));
    setWrongCell(null);
    setIsComplete(false);
    setLastChangedCell(null);
    setErrorsArray(null)
    console.table(filledMatrix);
    setHelpCount(5);
  };


  const getHelp = () => {
    if(helpCount > 0)
    {
      console.log(helpCount);
      for (let row = 0; row < matrix.length; row++) {
        for (let column = 0; column < matrix[row].length; column++) {
          if (matrix[row][column] !== filledMatrix[row][column]) {
            handleChange(row, column, filledMatrix[row][column] as number);
            setHelpCount(helpCount-1);
            return;
          }
        }
      }
    }
  };

  const checkValidity = (matrix: (number | null)[][], readOnlyMatrix: boolean[][], lastChangeCell: [number, number] | null) => {
    for (let row = 0; row < 9; row++) {
      for (let col = 0; col < 9; col++) {
        const cellValue = matrix[row][col];
        if (cellValue !== null && !isValidPlacement(matrix, row, col, cellValue) && readOnlyMatrix[row][col]) {
          setErrorsArray(getErrorsArray(matrix,row,col,cellValue));
          setWrongCell(lastChangeCell);
          setIsComplete(false);
          return;
        }
      }
    }
    setIsComplete(isValidSudoku(matrix));
    setWrongCell(null);
  };

  useEffect(() => {
    checkValidity(matrix, readOnlyMatrix, lastChangeCell);
  }, [matrix, readOnlyMatrix, lastChangeCell]);

  return (
      <>
        <div className="game">
          <h1 className="title">Sudoku Game</h1>
          <Board  errorsArray={errorsArray} isComplete={isComplete} invalidCell={wrongCell} matrix={matrix} readonlyMatrix={readOnlyMatrix} onChange={handleChange} />
        </div>
        <div className="buttonsContainer">
          <button className="btn" onClick={newGame}>
            Новая игра
          </button>
          <h2 className={'helps'}>Количество подсказок: {helpCount}</h2>
        </div>
      </>
  );
};

export default Game;