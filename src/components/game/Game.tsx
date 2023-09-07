import React, { useState } from 'react'

export interface IGameProps {
  currentPlayer: string
  setCurrentPlayer: React.Dispatch<React.SetStateAction<string>>
  score: number[]
  setScore: React.Dispatch<React.SetStateAction<number[]>>
}

const initialBoardState = [
  [
    ['01-A', '02-A', '03-A', '04-A'],
    ['05-A', '06-A', '07-A', '08-A'],
    ['09-A', '10-A', '11-A', '12-A'],
    ['13-A', '14-A', '15-A', '16-A'],
  ],
  // [
  //   ['01-B', '02-B', '03-B', '04-B'],
  //   ['05-B', '06-B', '07-B', '08-B'],
  //   ['09-B', '10-B', '11-B', '12-B'],
  //   ['13-B', '14-B', '15-B', '16-B'],
  // ],
  // [
  //   ['01-C', '02-C', '03-C', '04-C'],
  //   ['05-C', '06-C', '07-C', '08-C'],
  //   ['09-C', '10-C', '11-C', '12-C'],
  //   ['13-C', '14-C', '15-C', '16-C'],
  // ],
  // [
  //   ['01-D', '02-D', '03-D', '04-D'],
  //   ['05-D', '06-D', '07-D', '08-D'],
  //   ['09-D', '10-D', '11-D', '12-D'],
  //   ['13-D', '14-D', '15-D', '16-D'],
  // ],
]

export default function Game({ currentPlayer, setCurrentPlayer }: IGameProps) {
  const [boardValues, setBoardValues] = useState<string[][][]>(initialBoardState)

  return (
    <div className="flex w-screen flex-col justify-center">
      <div className="container relative flex flex-col justify-center">
        {boardValues.map((board, boardId) => (
          <div className="cube rotate-x-60 rotate-z-45" key={`board-${boardId}`}>
            <div className={`board-face flex flex-col translate-z-[50px]`}>
              {board.map((row, rowId) => (
                <div key={`board-${boardId} row-${rowId}`} className={`cell-container flex flex-row relative justify-center`}>
                  {row.map((cell, cellId) => (
                    <div className="group flex flex-col" key={`board-${boardId} row-${rowId} cell-${cellId}`}>
                      <div className={`cell-face`}>{boardValues[boardId][rowId][cellId]}</div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className={`board-face -translate-z-[50px] rotate-y-180`}></div>
            <div className={`top-bottom-face -translate-y-[50px] rotate-x-90`}></div>
            <div className={`top-bottom-face translate-y-[350px] -rotate-x-90`}>
              {boardValues[boardId][3].map((bottomRowCell, bottomRowCellId) => (
                <div
                  className={`flex h-[100px] w-[100px] items-center justify-center border-[2px] border-black opacity-50`}
                >
                  {boardValues[boardId][3][bottomRowCellId]}
                </div>
              ))}
            </div>
            <div className={`right-left-face -translate-x-[50px] -rotate-y-90`}></div>
            <div className={`right-left-face translate-x-[350px] rotate-y-90`}>{boardValues[boardId][0][3]}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
