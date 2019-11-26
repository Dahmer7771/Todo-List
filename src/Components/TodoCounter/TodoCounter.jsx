import React from "react";
import "./TodoCounter.css";

function TodoCounter() {
    return (
        <div>
            <span className="text-muted todo-counter">
                {1}
                {" "}
                more to do,
                {4}
                {" "}
                done
            </span>
        </div>
    );
}

export default TodoCounter;
