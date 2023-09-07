import * as React from 'react'

export interface IBoardsProps {
  values: string[][];
  boardId: number;
}

export default function Board({values, boardId}: IBoardsProps) {
  return (
    <div className='container'>
      {values.map((row, rowId) => (
        <div key={`Board ${boardId} row ${rowId}`} className={`flex`}>
          {row.map((cell, cellId) => (
            <div key={`Board ${boardId} row ${rowId} cell ${cellId}`} className={``}>
              <div className="cube">
                <div className="face top rotate-x-90 -translate-y-[100px]">01 02 03 04</div>
                <div className="face bottom -rotate-x-90 translate-y-[100px]">{cell}</div>
                <div className="face left -rotate-y-90 -translate-x-[100px]">{cell}</div>
                <div className="face right rotate-y-90 translate-x-[100px]">{cell}</div>
                <div className="face front translate-z-[50px]">{cell}</div>
                <div className="face back -translate-z-[50px] rotate-y-180">{cell}</div>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}
