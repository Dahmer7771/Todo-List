import React, { Component } from "react";
import "./App.css";
import AppHeader from "../AppHeader/AddHeader";
import SearchPanel from "../SearchPanel/SearchPanel";
import TodoList from "../TodoList/TodoList";
import TodoCounter from "../TodoCounter/TodoCounter";
import ItemAddPanel from "../ItemAddPanel/ItemAddPanel";

class App extends Component {
    constructor(props) {
        super(props);
        this.maxId = 1;
        this.state = {
            todoData: [
                this.createTodoItem("Drink Coffee"),
                this.createTodoItem("Make Awesome App"),
                this.createTodoItem("Poop"),
            ],
        };
    }

    deleteItem = (id) => {
        this.setState(({ todoData }) => {
            const index = todoData.findIndex((el) => el.id === id);

            const before = todoData.slice(0, index);
            const after = todoData.slice(index + 1);

            const newArray = [...before, ...after];

            return {
                todoData: newArray,
            };
        });
    };

    addItem = (text) => {
        const newItem = this.createTodoItem(text);

        this.setState(({ todoData }) => {
            const newArray = [
                ...todoData,
                newItem,
            ];

            return {
                todoData: newArray,
            };
        });
    };

    onToggleDone = (id) => {
        this.setState(({ todoData }) => {
            const index = todoData.findIndex((el) => el.id === id);

            const oldItem = todoData[index];
            const newItem = {
                ...oldItem,
                done: !oldItem.done,
            };

            const newArray = [
                ...todoData.slice(0, index),
                newItem,
                ...todoData.slice(index + 1),
            ];

            return {
                todoData: newArray,
            };
        });
    };

    onToggleImportant = (id) => {
        console.log("important", id);
    };

    createTodoItem = (label) => ({
        label,
        important: false,
        done: false,
        id: this.maxId++,
    });

    render() {
        const { todoData } = this.state;
        const doneCount = todoData.filter((el) => el.done).length;
        const todoCount = todoData.length - doneCount;

        return (
            <div className="container">
                <div className="header-container">
                    <AppHeader />
                    <TodoCounter toDo={todoCount} done={doneCount} />
                </div>
                <SearchPanel />
                <TodoList
                    todos={todoData}
                    onDeleted={this.deleteItem}
                    onToggleImportant={this.onToggleImportant}
                    onToggleDone={this.onToggleDone}
                />
                <ItemAddPanel
                    onItemAdd={this.addItem}
                />
            </div>
        );
    }
}

export default App;
