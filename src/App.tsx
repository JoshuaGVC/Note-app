import AddButton from './components/AddButton';
import CardList from './components/CardList';
import WrapperGeneral from './components/WrapperGeneral';
import Sidebar from './components/Sidebar';
import { RigthColumn } from './components/RigthColumn';
import { useEffect, useState } from 'react';
import { ICardApp } from './App.d';
import moment from 'moment';
import { TAction } from './components/Card/Card.d';
import RenderNote from './components/RenderNote';
import { TType } from './components/RenderNote/RenderNote.d';

const dateNow = Date.now();
const App = () => {
  const [cardsList, setCardsList] = useState<ICardApp[]>([]);
  const [cardFound, setCardFound] = useState<ICardApp>();

  const addCard = () => {
    const prevList = cardsList.map((item) => {
      return {
        ...item,
        selected: false
      };
    });

    const newCard = {
      id: crypto.randomUUID(),
      title: 'Una simple nota',
      paragraph:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed nemo labore aliquam doloremque exercitationem necessitatibus voluptates ex quia porro iure eius sequi, consequuntur veniam, libero ullam vero iste. Vero, maiores',
      date: dateNow,
      //  moment().format('dddd, Do of MMMM  YYYY, h:mm:ss a'),
      selected: true
    };

    setCardsList([newCard, ...prevList]);
  };

  const orderNotes = (list: ICardApp[]) => {
    const notesOrder = list.sort((a, b) => (b.date as number) - (a.date as number));
    return notesOrder;
  };

  const deleteNote = (id: string) => {
    const isConfirmed = confirm('¿Seguro que quieres borrar esta nota?');
    if (isConfirmed) {
      const myNotes = [...cardsList];
      const newsNotes = myNotes.filter((item) => item.id !== id);
      setCardsList(orderNotes(newsNotes));
    }
  };

  const saveInLocal = (list: ICardApp[]) => {
    const toSave = JSON.stringify(list);
    localStorage.setItem('notes', toSave);
  };

  const renderContentCard = () => {
    const cardInTrue = cardsList.find((item) => item.selected);
    setCardFound(cardInTrue);
  };

  const selectNote = (id: string) => {
    const cardSelected = cardsList.map((item) => {
      return {
        ...item,
        selected: item.id === id
      };
    });

    setCardsList(orderNotes(cardSelected));
  };

  const onActionCard = (id: string, action: TAction) => {
    if (action === 'seleccionar') {
      selectNote(id);
    }
    if (action === 'borrar') {
      deleteNote(id);
    }
  };

  const dataChange = (data: ICardApp, action: TType) => {
    const myCard = cardFound as ICardApp;
    const cardEditable = {
      ...myCard,
      [action]: data[action],
      date: Date.now()
    };
    const cardId = myCard.id;
    const cardIndex = cardsList.findIndex((item) => item.id === cardId);
    const arrayModify = [...cardsList];
    arrayModify.splice(cardIndex, 1, cardEditable);
    setCardsList(orderNotes(arrayModify));
  };

  const itsOnBlur = (data: string, type: TType) => {
    const myCard = cardFound as ICardApp;
    if (type === 'title') {
      const editTitle = { ...myCard, title: data };
      if (data !== cardFound?.title) {
        dataChange(editTitle, type);
      }
    }
    if (type === 'paragraph') {
      const editParagraph = { ...myCard, paragraph: data };
      if (data !== cardFound?.paragraph) {
        dataChange(editParagraph, type);
      }
    }
  };

  useEffect(() => {
    let myNote = localStorage.getItem('notes');
    if (myNote !== null) {
      setCardsList(JSON.parse(myNote));
    }
  }, []);

  useEffect(() => {
    saveInLocal(cardsList);
    renderContentCard();
  }, [cardsList]);

  return (
    <WrapperGeneral>
      <Sidebar>
        <AddButton onClick={addCard} />
        <CardList actionNote={onActionCard} items={cardsList} />
      </Sidebar>
      <RigthColumn>
        {!!cardFound && (
          <RenderNote
            title={cardFound.title}
            paragraph={cardFound.paragraph}
            id={cardFound.id}
            onBlur={itsOnBlur}
          />
        )}
      </RigthColumn>
    </WrapperGeneral>
  );
};

export default App;
