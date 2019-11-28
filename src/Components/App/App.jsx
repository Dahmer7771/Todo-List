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
            term: "",
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

    onToggleProperty = (arr, id, propName) => {
        const index = arr.findIndex((el) => el.id === id);

        const oldItem = arr[index];
        const newItem = {
            ...oldItem,
            [propName]: !oldItem[propName],
        };

        return [
            ...arr.slice(0, index),
            newItem,
            ...arr.slice(index + 1),
        ];
    };

    onToggleDone = (id) => {
        this.setState(({ todoData }) => ({
            todoData: this.onToggleProperty(todoData, id, "done"),
        }));
    };

    onToggleImportant = (id) => {
        this.setState(({ todoData }) => ({
            todoData: this.onToggleProperty(todoData, id, "important"),
        }));
    };

    createTodoItem = (label) => ({
        label,
        important: false,
        done: false,
        id: this.maxId++,
    });

    search = (items, term) => {
        if (term.length === 0) {
            return items;
        }

        return items.filter((item) => item.label.indexOf(term) > -1);
    };

    onSearchChange = (term) => {
        this.setState({
            term,
        });
    };

    render() {
        const { todoData, term } = this.state;
        const doneCount = todoData.filter((el) => el.done).length;
        const todoCount = todoData.length - doneCount;
        const visibleItems = this.search(todoData, term);

        return (
            <div className="container">
                <div className="row">
                    <div className="col-xl-12 col-12">
                        <div className="header-container">
                            <AppHeader />
                            <TodoCounter
                                toDo={todoCount}
                                done={doneCount}
                            />
                        </div>
                        <SearchPanel
                            onSearchChange={this.onSearchChange}
                        />
                        <TodoList
                            todos={visibleItems}
                            onDeleted={this.deleteItem}
                            onToggleImportant={this.onToggleImportant}
                            onToggleDone={this.onToggleDone}
                        />
                        <ItemAddPanel
                            onItemAdd={this.addItem}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
