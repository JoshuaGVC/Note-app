import {describe, expect, test, vi} from 'vitest';
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import CardNote from './CardNote';

describe('<CardNote/>', () => {
    test('Exists button', async () => {
        render(<CardNote title=''  date='' description=''/>);
        const button = screen.queryByText(/Add Note/i)
        expect(button).toBeInTheDocument();
    })

})