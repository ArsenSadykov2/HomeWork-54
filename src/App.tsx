import './App.css'
import {useState} from "react";
import {IBlock} from "./types";

const App = () => {
  const [blocks, setBlocks] = useState<IBlock[]>([]);

  const createBoard = () => {
    const blocksArray: IBlock[]  = [];

    for(let i = 0; i < 36; i++) {
      blocksArray.push({
        hasItem: false,
        id: i,
        class: 'block',
      });
    }
    let randomIndex = Math.floor(Math.random() * blocksArray.length);
    blocksArray[randomIndex].hasItem = true;
    setBlocks(blocksArray);
  };

  if(blocks.length === 0){
    createBoard();
  } else {
    console.log(blocks);
  }

  return (
    <>

    </>
  )
};

export default App
