
import React, { Component } from 'react'
import { fetchRepos } from '../../service/repos-api'
import ReposList from './ReposList'

class ReposContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      repos: [],
      username: ''
    }
    this.changeHandler = this.changeHandler.bind(this)
    this.submitHandler = this.submitHandler.bind(this)
  }

  //
  changeHandler(ev) {
    this.setState({ username: ev.target.value })
  }

  //
  submitHandler(ev) {
    ev.preventDefault()
    fetchRepos(this.state.username).then(res => this.setState({ repos: res.data }))
  }

  //
  render() {
    return (
      <div>
        <h1>Lista de Repositórios do Usuário</h1>
        <p>App verifica a lista de repositório de um usuário no GITHUB.</p>
        <form action="#" onSubmit={this.submitHandler}>
          <input
            onChange={this.changeHandler}
            style={{width: '300px'}}
            type="search"
            placeholder="Informe usuário do GITHUB e tecle ENTER"/>
        </form>
        <ReposList repos={this.state.repos}></ReposList>
      </div>
    )
  }
}

export default ReposContainer
