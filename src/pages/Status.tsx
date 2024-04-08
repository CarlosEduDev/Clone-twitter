import { FormEvent, KeyboardEvent, useState } from 'react'
import { Header } from '../components/Header'
import { Separator } from '../components/Separator'
import { Tweet } from '../components/Tweet'
import './Status.css'
import { PaperPlaneRight } from 'phosphor-react'

export function Status(){

  const [newAnswer, setNewAnswer] = useState('')
  
  const [answers, setAnswers] = useState([
    'Concordo.',
    'Faz sentido.',
    'Falou tudo.'
    ]
  )


  function createNewAnswer(event: FormEvent){
    event.preventDefault()

    setAnswers([newAnswer, ...answers])
    setNewAnswer('')
  }

  function handleHotKeySubmit(event: KeyboardEvent){
    // submit
    if(event.key === 'Enter' && (event.ctrlKey || event.metaKey)){
      setAnswers([newAnswer, ...answers])
      setNewAnswer('')
    }
  }

    return(
        <main className='status'>
        <Header title='Tweet'/>

        
        <Tweet content="Acabei de criar um projeto em REACT incrível e aprendi muita coisa, o resultado foi: Apliquei responsividade, Adquiri novos conhecimentos, Me aprofundei nos conhecimentos que já sei.
        Na minha opinião, React é um framework/Lib incrível!
        "/>

        <Separator/>
        
        <form onSubmit={createNewAnswer} className='answer-tweet-form'>
          <label htmlFor="tweet">
            <img src="https://avatars.githubusercontent.com/u/127114935?v=4" alt="Carlos Eduardo" />
            <textarea
             id='tweet' 
             placeholder="Tweet your answer"
             value={newAnswer}
             onKeyDown={handleHotKeySubmit}
             onChange={(event) => {
              setNewAnswer(event.target.value)
             }}
             />
          </label>
          <button type='submit'>
            <PaperPlaneRight/>
            <span>Answer</span>
          </button>
        </form>


        {answers.map(answer => {
          return <Tweet key={answer} content={answer}/>
        })}
      </main>
    )
}