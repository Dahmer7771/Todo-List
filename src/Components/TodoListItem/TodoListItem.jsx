import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faTrashAlt,
    faExclamation,
} from "@fortawesome/free-solid-svg-icons";
import "./TodoListItem.css";

function TodoListItem({ label, important }) {
    const liStyle = {
        color: important ? "#17a2b8" : "black",
        fontWeight: important ? "700" : "400",
        display: "flex",
    };
    const spanStyle = {
        flexGrow: 1,
        fontSize: "24px",
    };
    return (
        <li className="list-group-item todo-list-item" style={liStyle}>
            <span style={spanStyle}>
                {label}
            </span>
            <button type="button" className="btn btn-outline-danger btn-delete">
                <FontAwesomeIcon icon={faTrashAlt} />
            </button>
            <button type="button" className="btn btn-outline-success btn-complete">
                <FontAwesomeIcon icon={faExclamation} />
            </button>
        </li>
    );
}

export default TodoListItem;
