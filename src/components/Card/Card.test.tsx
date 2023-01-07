import { describe, expect, test, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import Card from './Card';
import userEvent from '@testing-library/user-event';

describe('<Card/> ', () => {
  test('should display the title, paragraph and date when you define the title paragraph and date property', () => {
    const titleText = 'Una nota simple';
    const paragraphText = 'Este es un parrafo bien extenso y no alcanzo a leerlo todo';
    const dateText = Date.now();
    render(
      <Card
        id="14sds15c62d"
        title={titleText}
        paragraph={paragraphText}
        date={dateText}
        selected
        onClick={() => {}}
      ></Card>
    );
    const title = screen.queryByText(titleText);
    const paragraph = screen.queryByText(`${paragraphText.substring(55, 0)}...`);

    expect(title).toBeInTheDocument();
    expect(paragraph).toBeInTheDocument();
  });

  test('Should execute the function when I add it in the property onClick', async () => {
    const handleClick = vi.fn();
    const idText = '14sds15c62d';
    render(
      <Card
        id={idText}
        title="Una simple nota"
        paragraph="Este es un parrafo extenso que no alcanzo a leerlo"
        date="jueves, 5 enero de 2023"
        selected
        onClick={handleClick}
      ></Card>
    );
    const card = screen.getByText('Una simple nota');
    await userEvent.click(card);
    expect(handleClick).toBeCalledWith(idText, 'seleccionar');
    await userEvent.dblClick(card);
    expect(handleClick).toBeCalledWith(idText, 'borrar');
  });

  test('should change the background color when the selected property is false', () => {
    const { container } = render(
      <Card
        id="14sds15c62d"
        title="Una simple nota"
        paragraph="Este es un parrafo extenso que no alcanzo a leerlo"
        date="jueves, 5 enero de 2023"
        selected={false}
        onClick={() => {}}
      ></Card>
    );
    const styles = window.getComputedStyle(container.firstChild as Element);
    expect(styles.backgroundColor).toEqual('rgb(255, 255, 255)');
  });
});
