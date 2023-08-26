import { useState } from 'react'
import Game from './components/game/Game'
import ScoreBoard from './components/score-board/ScoreBoard'

function App() {
  const allPlayers = ['blue', 'red']
  const [currentPlayer, setCurrentPlayer] = useState<string>(allPlayers[0])
  const [score, setScore] = useState<number[]>([0, 0])

  return (
    <div className="h-screen w-screen bg-neutral-900 font-sans font-bold text-white">
      <ScoreBoard allPlayers={allPlayers} currentPlayer={currentPlayer} score={score}></ScoreBoard>
      <div className="flex h-screen w-screen justify-center">
        <Game currentPlayer={currentPlayer} setCurrentPlayer={setCurrentPlayer} score={score} setScore={setScore}></Game>
      </div>
    </div>
  )
}

export default App
