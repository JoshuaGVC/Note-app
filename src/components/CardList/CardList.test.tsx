import { describe, expect, test, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import CardList from './CardList';
import userEvent from '@testing-library/user-event';

const noteList = [
  {
    id: '444444444444',
    title: 'Una simple nota',
    paragraph:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed nemo labore aliquam doloremque exercitationem necessitatibus voluptates ex quia porro iure eius sequi, consequuntur veniam, libero ullam vero iste. Vero, maiores',
    date: 'jueves',
    selected: false
  }
];

describe('<CardNote/>', () => {
  test('Exists button', async () => {
    const handleClick = vi.fn();
    render(<CardList items={noteList} actionNote={handleClick} />);
    screen.debug();
    const cardFond = screen.queryByText(noteList[0].title);
    await userEvent.click(cardFond as HTMLElement);
    expect(handleClick).toBeCalledWith(noteList[0].id, 'seleccionar');
  });
});
