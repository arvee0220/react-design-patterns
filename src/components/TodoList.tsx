import type { Todo } from "../definitions/todo";

interface TodoListProps {
    todos: Todo[];
}

export default function TodoList({ todos }: TodoListProps) {
    return (
        <ul>
            {todos.map(function (todo) {
                return <li key={todo.id}>{todo.title}</li>;
            })}
        </ul>
    );
}
