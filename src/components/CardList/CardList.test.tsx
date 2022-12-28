import {describe, expect, test, vi} from 'vitest';
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import CardList from './CardList';

describe('<CardNote/>', () => {
    test('Exists button', async () => {
        render(<CardList items={[]} actionNote={()=>{}}/>);
        const button = screen.queryByText(/Add Note/i)
        expect(button).toBeInTheDocument();
    })

})