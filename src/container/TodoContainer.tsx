import { useEffect, useState } from "react";
import TodoList from "../components/TodoList";

interface Todo {
    id: number;
    title: string;
}

// Container Presenter Pattern
export default function TodoContainer() {
    const [todos, setTodos] = useState<Todo[]>([]);

    useEffect(() => {
        const fetchTodosData = async () => {
            const res = await fetch("https://jsonplaceholder.typicode.com/todos");
            const data = await res.json();
            setTodos(data);
        };

        fetchTodosData();
    }, []);

    return (
        <>
            <TodoList todos={todos} />
        </>
    );
}
