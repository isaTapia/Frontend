import React, { Component } from 'react'
import axios from 'axios'

export default class CreateUser extends Component {
    state = {
        users: [],
        username: '',
        email: ""
    }
    async componentDidMount(){
        this.getUsers();
        console.log(this.state.users);
    }

    getUsers = async () => {
        const res = await axios.get('http://localhost:4000/api/users');
        this.setState({users: res.data});
    }

    onSubmit = async e => {
        e.preventDefault();
        await axios.post('http://localhost:4000/api/users', {
            username: this.state.username,
            email: this.state.email
        })
        this.setState({username: ''});
        this.setState({email: ''});
        this.getUsers();
    }

    onChangeUsername = (e) => {
        this.setState({
            username: e.target.value
        })
    }
    onChangeEmial = (e) => {
        this.setState({
            email: e.target.value
        })
    }
    deleteUser = async (id) => {
        await axios.delete('http://localhost:4000/api/users/' + id);
        this.getUsers();
    }


    render() {
        return (
            <div className="row">
                <div className="col-md-4">
                    <div className="card card-body">
                        <h3>Create New User</h3>
                        <form onSubmit={this.onSubmit}>
                        <div class="input-group input-group-sm mb-3">
                            
                        <div class="input-group-prepend">
    <span class="input-group-text" id="inputGroup-sizing-sm">username</span>
  </div>
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    value={this.state.username}
                                    onChange={this.onChangeUsername}
                                />
                                
                            </div>

                            <div class="input-group input-group-sm mb-3">
                            
                            <div class="input-group-prepend">
        <span class="input-group-text" id="inputGroup-sizing-sm">Email</span>
      </div>
                                    <input 
                                        type="text" 
                                        className="form-control" 
                                        value={this.state.email}
                                        onChange={this.onChangeEmial}
                                    />
                                    
                                </div>
                            
                            
                            
                            <button type="submit" className="btn btn-primary">
                                Save
                            </button>
                        </form>
                    </div>
                </div>
                <div className="col-md-8">
                    <ul className="list-group">
                        {
                            this.state.users.map(user => (
                                <li 
                                className="list-group-item list-group-item-action" 
                                key={user._id}
                                onDoubleClick={() => this.deleteUser(user._id)}
                                >
                                {"Username:   "+user.username +"            //           "+"Email:  " +user.email}
                            </li>)
                            

                            )
                        }
                        
                    </ul>
                </div>
           </div>
           

        )
    }
}

