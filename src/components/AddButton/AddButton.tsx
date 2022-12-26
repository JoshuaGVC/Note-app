import { FC } from 'react'
import { Button } from './AddButton.styled'
import { IAddButton } from './AddButton.d';


const AddButton: FC<IAddButton> = ({ onClick }) => {
  return (
    <Button onClick={onClick}>Add Note</Button>
  )
}

export default AddButton