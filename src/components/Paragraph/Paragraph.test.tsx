import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, test, vi } from 'vitest';
import Paragraph from './Paragraph';

const paragraphText = 'texto ingresado';

describe('<Paragraph/>', () => {
  test('should find the text when the textcontent is done', () => {
    render(<Paragraph onBlur={() => {}}>{paragraphText}</Paragraph>);
    const paragraph = screen.queryByText(paragraphText);
    expect(paragraph).toBeInTheDocument();
  });

  test('should find the text when the textcontent is done', async () => {
    const paragraphText = 'un texto';
    render(<Paragraph onBlur={() => {}}>{paragraphText}</Paragraph>);
    const paragraph = screen.queryByText(paragraphText);
    await userEvent.type(paragraph as Element, 'este es otro texto');
    expect(paragraph).toHaveTextContent('este es otro texto');
  });

  test('should change the textContent when you click outside the element', async () => {
    const handlerOnBlur = vi.fn();
    render(<Paragraph onBlur={handlerOnBlur}>{paragraphText}</Paragraph>);
    const paragraph = screen.queryByText(paragraphText);
    await userEvent.type(paragraph as Element, 'este es otro texto');
    fireEvent.blur(paragraph as Element);
    expect(handlerOnBlur).toHaveBeenCalledTimes(1);
  });

  test('should change the textContent when you click outside the element', async () => {
    const handlerOnBlur = vi.fn();
    render(<Paragraph onBlur={handlerOnBlur}>a</Paragraph>);
    const paragraph = screen.queryByText('a');
    await userEvent.click(paragraph as Element);
    await userEvent.keyboard('{backspace}');
    fireEvent.blur(paragraph as Element);

    expect(paragraph?.textContent).toEqual(
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed nemo labore aliquam doloremque exercitationem necessitatibus voluptates ex quia porro iure eius sequi, consequuntur veniam, libero ullam vero iste. Vero, maiores'
    );
  });

  test('should cleaning the content when the text is equal the default text', async () => {
    const handlerOnBlur = vi.fn();
    render(
      <Paragraph onBlur={handlerOnBlur}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed nemo labore aliquam doloremque
        exercitationem necessitatibus voluptates ex quia porro iure eius sequi, consequuntur veniam,
        libero ullam vero iste. Vero, maiores
      </Paragraph>
    );
    const paragraph = screen.queryByText(
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed nemo labore aliquam doloremque exercitationem necessitatibus voluptates ex quia porro iure eius sequi, consequuntur veniam, libero ullam vero iste. Vero, maiores'
    );
    await userEvent.click(paragraph as Element);
    expect(paragraph?.textContent).toEqual('');
  });
});
