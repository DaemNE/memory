import React, { useEffect, useState } from 'react'
import Card from './Card'

function Main({score, setScore, highScore, setHighScore}) {

  
  const [currentList, setCurrentList] = useState([
    "Jakke", "Niko", "Simon",
    "Joleen", "Nele", "Veronica",
    "Ashley", "Sam","Louise", 
    "Kelly", "Mo", "Alex"]);

  const personList = [
    "Jakke", "Niko", "Simon",
    "Joleen", "Nele", "Veronica",
    "Ashley", "Sam","Louise", 
    "Kelly", "Mo", "Alex"]
  

  function shuffle(pictures) {
    let currentIndex = pictures.length,  randomIndex;
  
    while (currentIndex !== 0) {
  
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      [pictures[currentIndex], pictures[randomIndex]] = [
        pictures[randomIndex], pictures[currentIndex]];
    }
  
    return pictures;
  }

  const onClickhandler = (person) => {

    if (currentList.includes(person)) {
      const index = currentList.indexOf(person)
      currentList.splice(index, 1)
    setCurrentList(currentList)
    setScore(score + 1)
    console.log("gained a point")
    } else {
      if (score > highScore) {
        setHighScore(score)
      } 
      setScore(0)
      setCurrentList([
        "Jakke", "Niko", "Simon",
        "Joleen", "Nele", "Veronica",
        "Ashley", "Sam","Louise", 
        "Kelly", "Mo", "Alex"])
      console.log("You lost!")
    }
  }

  useEffect(() => {
    shuffle(personList)
    
  }, [currentList, score, highScore]);

  shuffle(personList)

  const listItems = personList.map((person, id) => {
    return (
      <React.Fragment>
        <Card key={id} altImage={`Image ${person} not found`} person={person} onClickhandler={() => onClickhandler(person)}/>
      </React.Fragment>)
  })

  return (
    <div className='main'>
      <div className="card-container">
        {listItems}
      </div>
    </div>
  )
}

export default Main