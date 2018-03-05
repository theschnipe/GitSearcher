import React, { Component } from 'react';
import {connect} from 'react-redux';
import logo from '/logo.svg';
import './App.css';

ReactDOM.render(
  <Provider store={store}>
  <App />
  </Provider>, document.getElementById('root'));


class App extends Component {
    onHandleChange = (e) => {
    var {dispatch} = this.props;
    dispatch({type: 'UPDATE_USERNAME', username: e.target.value})
}
onUserSearch = () => {
    var {dispatch} = this.props;
    var {username} = this.props;

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
    var {dispatch} = this.props;
    var {repos_url} = this.props.usergit;

    fetch(repos_url)
    .then (res => {
      return res.json()
    })
    .then(res => {
        dispatch({type: 'UPDATE_REPO', repo: res })
    })
}

render() {
    var {usergit} = this.props;
    var repo = this.props.repos.map((repo, i) => {
        return <li key={i}>{repo.name}></li>
    })
        return (
            <div>
                Search for your Repos!
                <input type="text" 
                        onChange={this.onHandleChange}
                        value={this.props.user} />
                        <button onClick = {this.onUserSearch}>search</button>
                        <hr/>
                        <h3>{this.props.usergit.login}</h3>
                        <img src={usergit.avatar_url} alt=""/>
                        <button onClick={this.onRepoFetch}>Fetch Repos </button>
                {repo}
                </div>
        );
    }
}

const mapStateToprops = (state) => {
    return {
        username: state.username,
        usergit: state.usergit,
        repo: state.repo
    }
}

export default connect();
