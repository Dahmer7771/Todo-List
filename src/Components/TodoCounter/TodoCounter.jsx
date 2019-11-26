import React from "react";
import "./TodoCounter.css";

function TodoCounter(props) {
    const {
        toDo,
        done,
    } = props;
    return (
        <div>
            <span className="text-muted todo-counter">
                {`${toDo} more to do, ${done} done`}
            </span>
        </div>
    );
}

export default TodoCounter;
