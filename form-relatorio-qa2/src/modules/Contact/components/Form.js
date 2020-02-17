import React from 'react'
import {Field, reduxForm} from 'redux-form'

const Form = props => {
  const {handleSubmit, pristine, reset, submitting} = props
  return (
    <form onSubmit={handleSubmit} className="form-horizontal">

      <div className="form-group">
        <label>Nome do Projeto</label>
        <Field
          name="name-project"
          component="input"
          type="text"
          placeholder="Informe o nome do projeto"
          className="form-control"
        />
      </div>

      <div className="form-group">
        <label>Solicitante</label>
        <Field
          name="solicitante"
          component="input"
          type="text"
          placeholder="Informe o nome do projeto"
          className="form-control"
        />
      </div>

      <div className="form-group">
        <label>E-mail</label>
        <Field
          name="email"
          component="input"
          type="email"
          placeholder="E-mail do Solicitante do teste"
          className="form-control"
        />
      </div>

      <div className="form-group">
        <label>Requisitos de negócio</label>
        <Field
          name="requisitos"
          component="input"
          type="text"
          placeholder="Identificar o thoughput máximo do projeto"
          className="form-control"
        />
      </div>

      <div className="form-group">
        <label>Requisitos de Hardhare</label>
        <Field
         name="hardware" 
         component="textarea" 
         className="form-control" 
         placeholder="Informar tecnologias utilizadas na infra do projeto"
         />
      </div>

      <h4>Colaboradores</h4>
      <div className="form-group">
        <label>Desenvolvedor</label>
        <Field
          name="dev"
          component="input"
          type="text"
          placeholder="Informe o nome do projeto"
          className="form-control"
        />
      </div>

      <div className="form-group">
        <label>Infra</label>
        <Field
          name="infra"
          component="input"
          type="text"
          placeholder="Informe o nome do projeto"
          className="form-control"
        />
      </div>
      <div className="form-group">
        <label>DB</label>
        <Field
          name="db"
          component="input"
          type="text"
          placeholder="Informe o nome do projeto"
          className="form-control"
        />
      </div>

      <div className="form-group">
        <label>Nome do Analista de teste</label>
        <Field
          name="analista"
          component="input"
          type="text"
          placeholder="Informar o nome do Analista do teste"
          className="form-control"
        />
      </div>

      

      <div>
      <h4>A seguinte configuração do Load da ferramenta foi usada neste cenário:</h4>
        <ul>
          <li>1º passo (delay): 5 segundos para calibrar o Avalanche;</li>
          <li>2º passo (ramp up): Subida rápida de 250 transações em 60 segundos;</li>
          <li>3º passo (steady state): Mantém o número de transações por 5 minutos;</li>
          <li>4º passo (ramp down): Saída total das transações mais um tempo de 60 segundos ocioso para liberar os recursos alocados e finalizar o teste."
</li>
            </ul>

            <h4>Durante todo o teste será observado:</h4>
        <ul>
          <li>Throughput (requisições/seg);</li>
          <li>Tempo de resposta;</li>
          <li>% CPU idle</li>
          <li>% Memória free</li>
          <li>Load average</li>
          <li>TCP connection;</li>
            </ul>
      </div>

      
      <div className="form-group">
        <button
          type="submit"
          className="btn btn-primary"
          disabled={pristine || submitting}>
          Salvar
        </button>{' '}
        <button
          type="button"
          className="btn btn-default"
          disabled={pristine || submitting}
          onClick={reset}>
          Reset
        </button>
      </div>


    </form>
  )
}

export default reduxForm({
  form: 'contactForm'
})(Form)
