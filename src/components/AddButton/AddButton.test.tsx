import {describe, expect, test, vi} from 'vitest';
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import AddButton from './AddButton';

describe('<AddButton/>', () => {
    test('Exists button', async () => {
        render(<AddButton/>);
        const button = screen.queryByText(/Add Note/i)
        expect(button).toBeInTheDocument();
    })

    test('Not Exits button', async () => {
        render(<AddButton/>);
        const button = screen.queryByText(/dasdasdasdasd/i)
        expect(button).not.toBeInTheDocument();
    })

    test('Click function', async () => {
        const handleClick = vi.fn();
        render(<AddButton onClick={handleClick}/>);
        const button = screen.getByText('Add Note');
        await userEvent.click(button);
        expect(handleClick).toBeCalled()
    })

    test('Click function dont called', async () => {
        const handleClick = vi.fn();
        render(<AddButton onClick={() => {}}/>);
        const button = screen.getByText('Add Note');
        await userEvent.click(button);
        expect(handleClick).not.toBeCalled()
    }) 
})