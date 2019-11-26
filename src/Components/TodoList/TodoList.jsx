import React from "react";
import TodoListItem from "../TodoListItem/TodoListItem";

function TodoList({
    todos,
    onDeleted,
    onToggleImportant,
    onToggleDone,
}) {
    const todoItems = todos.map((item) => {
        const { id, ...itemProps } = item;
        return (
            <TodoListItem
                key={id}
                onDeleted={() => onDeleted(id)}
                onToggleImportant={() => onToggleImportant(id)}
                onToggleDone={() => onToggleDone(id)}
                {...itemProps}
            />
        );
    });

    return (
        <ul className="list-group">
            { todoItems }
        </ul>
    );
}

export default TodoList;
