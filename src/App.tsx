import AddButton from "./components/AddButton";
import CardList from "./components/CardList";
import WrapperGeneral from "./components/WrapperGeneral";
import Sidebar from "./components/Sidebar";
import { RigthColumn } from "./components/RigthColumn";
import { useEffect, useState } from "react";
import { ICardApp } from "./App.d";
import moment from "moment";
import { TAction } from "./components/Card/Card.d";
import RenderNote from "./components/RenderNote";

const App = () => {
  const [cardsList, setCardsList] = useState<ICardApp[]>([]);
  const [cardFount, setCardFount] = useState<ICardApp>();

  const addCard = () => {
    const prevList = cardsList.map((item) => {
      return {
        ...item,
        selected: false,
      };
    });

    const newCard = {
      id: crypto.randomUUID(),
      title: "Una simple nota",
      paragraph:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed nemo labore aliquam doloremque exercitationem necessitatibus voluptates ex quia porro iure eius sequi, consequuntur veniam, libero ullam vero iste. Vero, maiores",
      date: moment().format("dddd, Do of MMMM  YYYY, h:mm:ss a"),
      selected: true,
    };

    setCardsList([newCard, ...prevList]);
  };

  const deleteNote = (id: string) => {
    const isConfirmed = confirm("¿Seguro que quieres borrar esta nota?");
    if (isConfirmed) {
      const myNotes = [...cardsList];
      const newsNotes = myNotes.filter((item) => item.id !== id);
      setCardsList(newsNotes);
    }
  };

  const saveInLocal = (list: ICardApp[]) => {
    const toSave = JSON.stringify(list);
    localStorage.setItem("notes", toSave);
  };

  const renderContentCard = () => {
    const cardInTrue = cardsList.find((item) => item.selected);
    setCardFount(cardInTrue);
  };

  const selectNote = (id: string) => {
    const newCardArray = [...cardsList];
    const cardSelected = newCardArray.map((item) => {
      return {
        ...item,
        selected: item.id === id,
      };
    });

    setCardsList(cardSelected);
  };

  const onActionCard = (id: string, action: TAction) => {
    if (action === "seleccionar") {
      selectNote(id);
    }
    if (action === "borrar") {
      deleteNote(id);
    }
  };

  const itsOnBlur = (data: string) => {
    console.log(data);
  };

  useEffect(() => {
    let myNote = localStorage.getItem("notes");
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
        {!!cardFount && (
          <RenderNote
            insertDate={() => {}}
            title={cardFount.title}
            paragraph={cardFount.paragraph}
            id={cardFount.id}
            handlerOnBlur={itsOnBlur}
          />
        )}
      </RigthColumn>
    </WrapperGeneral>
  );
};

export default App;
