import React, {useState} from 'react';
import Button from './components/Button'
import Text from './components/Text'
function App() {
  const [playerOneTurn, setPlayerOneTurn] = useState(true)
  const toggleTurn = () => {
    setPlayerOneTurn(!playerOneTurn)
  }
  return (
    <div>
     <Button onClick = {toggleTurn} text = "Mark"/>
     <Button onClick = {toggleTurn} text = "Carrie"/>
    It is player {playerOneTurn? "1" : "2"}'s turn
    </div>
  );
}

export default App;
