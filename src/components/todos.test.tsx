import { screen, render } from '@testing-library/react';
import Todos from './todos.component';

describe("Todos", () => {
    it("shoud show my tasks message", () => {
        render(<Todos />);
        expect(screen.getByText("Minhas Tarefas")).toBeInTheDocument();
    });
});