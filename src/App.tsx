import './App.css'
import {useState} from "react";
import {IBlock} from "./types";

const App = () => {
  const [blocks, setBlocks] = useState<IBlock[]>([]);
  const [tries, setTries] = useState<number>(0);
  const [victory , setVictory] = useState(false);

  const createBoard = () => {
    const blocksArray: IBlock[]  = [];

    for(let i = 0; i < 36; i++) {
      blocksArray.push({
        hasItem: false,
        id: i,
        class: 'block',
      });
    }
    const randomIndex = Math.floor(Math.random() * blocksArray.length);
    blocksArray[randomIndex].hasItem = true;
    setBlocks(blocksArray);
  };


  if(blocks.length === 0){
    createBoard();
  } else {
    console.log(blocks);
  }
  const clickOnBlock = (index: number) =>{
    setBlocks(blocks.map(block => {
      if(block.id === index) {
        if(victory === false) {
          if(block.hasItem === false) {
            if(block.class === 'block') {
              setTries(prevState => prevState + 1);
              return {...block, class: 'clicked'};
            }
          } else if(block.hasItem === true) {
            setVictory(true);
            return {...block, class: 'win'};
          }
        } else {
          alert('You Win!!! Congratulations! \n refresh this site')
        }
      }

      return block;
    }))
  };

  return (
      <>
        <div className="board">
          {blocks.map(block => (
              <div onClick={() => clickOnBlock(block.id)} key={block.id} className={block.class}></div>
          ))};
        </div>
        <h2><strong>Tries:</strong>{tries}</h2>
      </>
  )
};

export default App
