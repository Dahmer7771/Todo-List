import React, { Component } from "react";
import "./ItemAddPanel.css";

class ItemAddPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            label: "",
        };
    }

    onLabelChange = (e) => {
        const label = e.target.value;
        this.setState({
            label,
        });
    };

    onSubmit = (e) => {
        e.preventDefault();

        const { onItemAdd } = this.props;
        const { label } = this.state;

        onItemAdd(label);

        this.setState({
            label: "",
        });
    };

    render() {
        const { label } = this.state;

        return (
            <form
                className="item-add-panel"
                onSubmit={this.onSubmit}
            >
                <div className="input-group">
                    <input
                        type="text"
                        className="form-control"
                        onChange={this.onLabelChange}
                        placeholder="Input title of your task"
                        value={label}
                    />
                    <div className="input-group-append">
                        <button
                            type="submit"
                            className="btn btn-success btn-item-add"
                        >
                            Add Item
                        </button>
                    </div>
                </div>
            </form>
        );
    }
}

export default ItemAddPanel;
