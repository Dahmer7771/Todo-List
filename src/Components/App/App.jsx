import React from "react";
import "./App.css";
import AppHeader from "../AppHeader/AddHeader";
import SearchPanel from "../SearchPanel/SearchPanel";
import TodoList from "../TodoList/TodoList";
import TodoCounter from "../TodoCounter/TodoCounter";

function App() {
    const todoData = [
        { id: 1, label: "Make coffee", important: false },
        { id: 2, label: "Create react app", important: true },
        { id: 3, label: "Poop", important: false },
    ];
    return (
        <div className="container">
            <div className="header-container">
                <AppHeader />
                <TodoCounter />
            </div>
            <SearchPanel />
            <TodoList todos={todoData} />
        </div>
    );
}

export default App;
