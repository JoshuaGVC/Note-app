import AddButton from "./components/AddButton";
import CardList from "./components/CardList";
import WrapperGeneral from "./components/WrapperGeneral";
import Sidebar from "./components/Sidebar";
import { RigthColumn } from "./components/RigthColumn";
import TitleEdit from "./components/TitleEdit";
import Paragraph from "./components/Paragraph";
import { useEffect, useState } from "react";
import { ICardApp } from "./App.d";
import moment from "moment";
import { TAction } from "./components/Card/Card.d";

const App = () => {
  const [cardsList, setCardsList] = useState<ICardApp[]>([]);
  const [isSelected, setIsSelected] = useState(true);

  const addCard = () => {
    const newCard = {
      id: crypto.randomUUID(),
      title: "Una simple nota",
      paragraph:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed nemo labore aliquam doloremque exercitationem necessitatibus voluptates ex quia porro iure eius sequi, consequuntur veniam, libero ullam vero iste. Vero, maiores.",
      date: moment().format("dddd, Do of MMMM  YYYY, h:mm:ss a"),
      selected: isSelected,
    };

    const addedNote = (prev: ICardApp[]) => {
      return [newCard, ...prev];
    };

    setCardsList(addedNote);
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

  const selectNote = (id: string) => {
    const newCardArray = [...cardsList];
    const cardSelected = newCardArray.map((item) => {
      return {
        ...item,
        selected: item.id === id ? true : false,
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

  useEffect(() => {
    if (cardsList.length > 0) {
      saveInLocal(cardsList);
    }
  }, [cardsList]);

  useEffect(() => {
    let myNote = localStorage.getItem("notes");
    if (myNote !== null) {
      setCardsList(JSON.parse(myNote));
    }
  }, []);

  return (
    <WrapperGeneral>
      <Sidebar>
        <AddButton onClick={addCard} />
        <CardList actionNote={onActionCard} items={cardsList} />
      </Sidebar>
      <RigthColumn>
        <TitleEdit />
        <Paragraph />
      </RigthColumn>
    </WrapperGeneral>
  );
};

export default App;
