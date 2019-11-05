import React, { Component } from 'react'


export default class Navigation extends Component {
    render() {
        return (
            <nav class="navbar navbar-expand-lg navbar navbar-dark bg-primary">
                <a class="navbar-brand" href="/">NotesApp</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarText">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item active">
                            <a class="nav-link" href="/">Notes <span class="sr-only">(current)</span></a>
                            
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/Create">Create Note</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/user">Create User</a>
                        </li>
                    </ul>
                    <span class="navbar-text">
                        
                        
    </span>
                              
                </div>
                
            </nav>
            
        )
    }
}
