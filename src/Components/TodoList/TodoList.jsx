import React from "react";
import TodoListItem from "../TodoListItem/TodoListItem";

function TodoList({ todos }) {
    const todoItems = todos.map((item) => {
        const { id, ...itemProps } = item;
        return <TodoListItem key={id} {...itemProps} />;
    });

    return (
        <ul className="list-group">
            { todoItems }
        </ul>
    );
}

export default TodoList;
