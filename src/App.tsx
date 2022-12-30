import AddButton from './components/AddButton'
import CardList from './components/CardList'
import  WrapperGeneral from './components/WrapperGeneral'
import Sidebar from './components/Sidebar'
import {RigthColumn} from './components/RigthColumn'
import TitleEdit from './components/TitleEdit'
import Paragraph from './components/Paragraph'
import { useState } from 'react'
import { ICard } from './components/Card'

interface ICardApp extends Omit<ICard, 'onClick'> {
}

const App = () => {
  const [cardsList, setCardsList] = useState<ICardApp[]>([])

  const addCard = ()=>{
    const newCard = {
      title : "Una simple nota",
      paragraph : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed nemo labore aliquam doloremque exercitationem necessitatibus voluptates ex quia porro iure eius sequi, consequuntur veniam, libero ullam vero iste. Vero, maiores.",
      date : "Viernes, 8 de Diciembre 2022 a las 01:57 am",
      selected: false,
    }

    const addedNote = (prev:ICardApp[])=>{
      return [...prev, newCard]
    }

    setCardsList(addedNote)
  }

  const selectNote = (index:number)=>{
    
  }

  return (
    <WrapperGeneral>

      <Sidebar>
        <AddButton onClick={addCard}/>
        <CardList
          actionNote={()=>{selectNote}}
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