import React, { useState } from 'react'

export interface IGameProps {
  currentPlayer: string
  setCurrentPlayer: React.Dispatch<React.SetStateAction<string>>
  score: number[]
  setScore: React.Dispatch<React.SetStateAction<number[]>>
}

const initialBoardState = [
  [
    ['01-A'],
    // ['01-A', '02-A', '03-A', '04-A'],
    // ['05-A', '06-A', '07-A', '08-A'],
    // ['09-A', '10-A', '11-A', '12-A'],
    // ['13-A', '14-A', '15-A', '16-A'],
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

  const scale3dSwitcher = (id: number): string => {
    switch (id) {
      case 0:
        return `scale3d-150 -translate-y-80 perspective-250`
      case 1:
        return `scale3d-125 -translate-y-20`
      case 2:
        return `scale3d-100 translate-y-20`
      default:
        return `scale3d-75 translate-y-52`
    }
  }

  return (
    <div className="flex w-screen flex-col justify-center">
      <div className="relative flex flex-col justify-center container">
        {boardValues.map((boardLayer, boardId) => (
          <div
            key={`Board ${boardId}`}
            // className={`rotate-x-60 rotate-z-45 translate-z-10 scale-z-75 transform-style-3d absolute block self-center ${scale3dSwitcher(
            //   boardId
            // )}`}
          >
            {boardLayer.map((row, rowId) => (
              <div key={`Board ${boardId} row ${rowId}`} className={`flex`}>
                {row.map((cell, cellId) => (
                  <div
                    key={`Board ${boardId} row ${rowId} cell ${cellId}`}
                    className={``}
                  >
                    <div className="cube rotate-x-60 rotate-z-45">
                      <div className="face top -translate-y-[100px] rotate-x-90">Top</div>
                      <div className="face bottom translate-y-[100px] -rotate-x-90">Bottom</div>
                      <div className="face left -translate-x-[100px] -rotate-y-90">Left</div>
                      <div className="face right translate-x-[100px] rotate-y-90">Right</div>
                      <div className="face front translate-z-[100px]">Front</div>
                      <div className="face back -translate-z-[100px] rotate-y-180">Back</div>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
