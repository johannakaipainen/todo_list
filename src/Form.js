import React from 'react'

export default class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            description: ""
        }
    }

    handleSubmit = (event) => {
        this.props.add(this.state.title, this.state.description);
        this.setState({
            title: "",
            description: ""
        })
        event.preventDefault();
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    render() {
        return (
            <form className="container" onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label>Title</label>
                    <input name="title" value={this.state.title} className="form-control" onChange={this.handleChange} />
                </div>
                <div className="form-group">
                    <label>Description</label>
                    <textarea name="description" value={this.state.description} className="form-control" onChange={this.handleChange}></textarea>
                </div>
                <button className="btn btn-primary">Add</button>
            </form>
        )
    }
}
