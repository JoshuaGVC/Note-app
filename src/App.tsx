import AddButton from './components/AddButton'
import CardNote from './components/CardNote'
import  WrapperGeneral from './components/WrapperGeneral'
import Sidebar from './components/Sidebar'
import {RigthColumn} from './components/RigthColumn'

const App = () => {
  return (
    <>
    <WrapperGeneral>
      <Sidebar>
        <AddButton onClick={() => alert('se me aclickeado')}/>
        <CardNote
          title="Una simple nota"
          description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed nemo labore aliquam doloremque exercitationem necessitatibus voluptates ex quia porro iure eius sequi, consequuntur veniam, libero ullam vero iste. Vero, maiores."
          date="Viernes, 8 de Diciembre 2022 a las 01:57 am"
          onClick={ () => alert('dasdasd')}
          selected
        />
        <CardNote
          title="Una simple nota"
          description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed nemo labore aliquam doloremque exercitationem necessitatibus voluptates ex quia porro iure eius sequi, consequuntur veniam, libero ullam vero iste. Vero, maiores."
          date="Viernes, 8 de Diciembre 2022 a las 01:57 am"
          onClick={ () => alert('dasdasd')}
          selected={false}
        />
      </Sidebar>
      <RigthColumn>
      <h1>hola soy un titulo</h1>
      </RigthColumn>
    </WrapperGeneral>
    </>
  )
}

export default App