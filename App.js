import React, { Component } from 'react';
import {connect} from 'react-redux';
import logo from '/logo.svg';
import './App.css';

class App extends Component {
    onHandleChange = (e) => {
    let {dispatch} = this.prop;
    dispatch({type: 'UPDATE_USERNAME', username: e.target.value})
}
onUserSearch = () => {
    let {dispatch} = this.prop;
    let {username} = this.prop;

    fetch(`https://api.github.com/users/${username}`)
    .then(git => {
        return git.json()
        return console.log(git)
    })
    .then(git => {
        dispatch({type: 'UPDATE_USERPROFILE', usergit: git })
    })
}
 
onRepoFetch = () => {
    let {dispatch} = this.prop;
    let {repos_url} = this.prop.usergit;

    fetch(repos_url)
    .then (res => {

    })
    .then(res => {
        dispatch({type: 'UPDATE_REPO', repo: res })
    })
}

render() {
    let {usergit} = this.prop;
    let repo = this.props.repo.map(repo, i) => {
        return <li key={i}>{repo.name}></li>
    }
        return (
            <div>
                Search for your Repos!
                <input type="text" 
                        onChange={this.onHandleChange}
                        value={this.prop.user} />
                        <button onClick = {this.onUserSearch}>search</button>
                        <hr/>
                        <h3>{this.prop.usergit.login}</h3>
                        <img src={usergit.avatar_url} alt=""/>
                        <button onClick={this.onRepoFetch}>Fetch Repos </button>
                {repo}
                </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        username: state.username,
        usergit: state.usergit,
        repo: state.repo
    }
}

export default connect();
