import * as React from 'react'

export interface IScoreBoardProps {
  allPlayers: string[]
  currentPlayer: string
  score: number[]
}

export default function ScoreBoard({ currentPlayer, score, allPlayers }: IScoreBoardProps) {
  return (
    <div className={`m-auto flex h-auto w-fit items-center justify-center gap-8 rounded-xl bg-background-div1 p-12`}>
      <div className={`flex`}>
        <h1>SCOREBOARD</h1>
      </div>
    </div>
  )
}
