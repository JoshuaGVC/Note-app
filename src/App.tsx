import AddButton from './components/AddButton'
import CardList, { ICardList } from './components/CardList'
import  WrapperGeneral from './components/WrapperGeneral'
import Sidebar from './components/Sidebar'
import {RigthColumn} from './components/RigthColumn'
import TitleEdit from './components/TitleEdit'
import Paragraph from './components/Paragraph'
import { useState } from 'react'
import {ICardApp} from './App.d'
import moment from 'moment';
import useDoubleClick from 'use-double-click';

const App = () => {
  const [cardsList, setCardsList] = useState<ICardApp[]>([])
  
  const addCard = ()=>{
    const newCard = {
      id:crypto.randomUUID(),
      title : "Una simple nota",
      paragraph : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed nemo labore aliquam doloremque exercitationem necessitatibus voluptates ex quia porro iure eius sequi, consequuntur veniam, libero ullam vero iste. Vero, maiores.",
      date : moment().format('dddd, Do of MMMM  YYYY, h:mm:ss a'),
      selected: false,
    }

    const addedNote = (prev:ICardApp[])=>{
      return [...prev, newCard]
    }

    setCardsList(addedNote)
  }

  const selectNote = (id:string)=>{
   const newCardArray = [...cardsList];
   const cardSelected = newCardArray.map((item)=>{
      return {
        ...item,
        selected: item.id === id ? true : false 
      }
      
   })

   setCardsList(cardSelected)
  }

  return (
    <WrapperGeneral>

      <Sidebar>
        <AddButton onClick={addCard}/>
        <CardList
          actionNote={selectNote}
          items={cardsList}
        />
      </Sidebar>

      <RigthColumn>
        <TitleEdit/>
        <Paragraph/> 
      </RigthColumn>
      
    </WrapperGeneral>
  )
}

export default App