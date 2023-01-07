import { describe, expect, test, vi } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import TitleEdit from './Title';

const titleText = 'texto ingresado';

describe('<TitleEdit/>', () => {
  test('should find the text when the textcontent is done', () => {
    render(<TitleEdit textTitle={titleText} onBlur={() => {}}></TitleEdit>);
    const title = screen.queryByText(titleText);
    expect(title).toBeInTheDocument();
  });

  test('should change the text when you enter a different text than the default text', async () => {
    const titleText = 'un texto';
    render(<TitleEdit textTitle={titleText} onBlur={() => {}}></TitleEdit>);
    const title = screen.queryByText(titleText);
    await userEvent.type(title as Element, 'este es otro texto');
    expect(title).toHaveTextContent('este es otro texto');
  });

  test('should executed the function when click outside the element', async () => {
    const handlerOnBlur = vi.fn();
    render(<TitleEdit textTitle={titleText} onBlur={handlerOnBlur}></TitleEdit>);
    const title = screen.queryByText(titleText);
    await userEvent.type(title as Element, 'este es otro texto');
    fireEvent.blur(title as Element);
    expect(handlerOnBlur).toHaveBeenCalledTimes(1);
  });

  test('should change the textContent when you click outside the element', async () => {
    const handlerOnBlur = vi.fn();
    render(<TitleEdit textTitle="a" onBlur={handlerOnBlur} />);
    const title = screen.queryByText('a');
    await userEvent.click(title as Element);
    await userEvent.keyboard('{backspace}');
    fireEvent.blur(title as Element);

    expect(title?.textContent).toEqual('Una simple nota');
  });

  test('should cleaning the content when the text is equal the default text', async () => {
    const handlerOnBlur = vi.fn();
    render(<TitleEdit textTitle="Una simple nota" onBlur={handlerOnBlur} />);
    const title = screen.queryByText('Una simple nota');
    await userEvent.click(title as Element);
    expect(title?.textContent).toEqual('');
  });
});
