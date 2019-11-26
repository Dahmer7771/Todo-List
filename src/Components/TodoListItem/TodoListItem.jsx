import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faTrashAlt,
    faExclamation,
} from "@fortawesome/free-solid-svg-icons";
import "./TodoListItem.css";

class TodoListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const {
            label,
            done,
            important,
            onDeleted,
            onToggleImportant,
            onToggleDone,
        } = this.props;

        let spanClasses = ["span-style list-item"];
        if (done === true) {
            spanClasses.push("completed-task");
        }
        if (important === true) {
            spanClasses.push("important-list-item");
        }
        spanClasses = spanClasses.join(" ");

        return (
            <li className="list-group-item todo-list-item list-item">
                <span
                    className={`${spanClasses}`}
                    onClick={onToggleDone}
                >
                    {label}
                </span>
                <button
                    type="button"
                    className="btn btn-outline-danger btn-delete"
                    onClick={onDeleted}
                >
                    <FontAwesomeIcon icon={faTrashAlt} />
                </button>
                <button
                    type="button"
                    className="btn btn-outline-success btn-complete"
                    onClick={onToggleImportant}
                >
                    <FontAwesomeIcon icon={faExclamation} />
                </button>
            </li>
        );
    }
}

export default TodoListItem;
