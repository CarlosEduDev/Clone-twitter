import { FormEvent, KeyboardEvent, useState } from "react"
import { Header } from "../components/Header"
import { Separator } from "../components/Separator"
import { Tweet } from "../components/Tweet"

import './Timeline.css'

/**
 * Fluxo de renderização:
 * 1. Toda vez que alterar o estado do componente, TODO componente é recalculado.
 * 2. Toda vez que o componente PAI renderizar.
 * 3. Toda vez que alguma de suas propriedades mudarem.
 * 
 * Toda vez que alteramos o estado de um componete, TODO COMPONENTE é recalculado.
 * 
 *  Algoritmo de reconciliação
 * 1. Criar em memória a nova versão do HTML do componente
 * 2. Compara essa nova versão com a versão anterior do HTML(DIFF)
 * 3. Aplicar as operações JS para alterar somente o necessário no HTML
 */


export function Timeline(){


  const [newTweet, setNewTweet] = useState('')
  
  const [tweets, setTweets] = useState([
      'Deu certo',
      'Testando',
      'Amo programar!'
    ]
  )


  function createNewTweet(event: FormEvent){
    event.preventDefault()

    setTweets([newTweet, ...tweets])
    setNewTweet('')
  }

  function handleHotKeySubmit(event: KeyboardEvent){
    if(event.key === 'Enter' && (event.ctrlKey || event.metaKey)){
      // submit
      setTweets([newTweet, ...tweets])
      setNewTweet('')
    }
  }

    return(
        <main className='timeLine'>
          <Header title='Home'/>


          <form onSubmit={createNewTweet} className='new-tweet-form'>
            <label htmlFor="tweet">
              <img src="https://avatars.githubusercontent.com/u/127114935?v=4" alt="Carlos Eduardo" />
              <textarea
               id='tweet'
                placeholder="What's happening?"
                value={newTweet}
                onKeyDown={handleHotKeySubmit}
                onChange={(event) => {
                  setNewTweet(event.target.value)
                }}
                />
            </label>
            <button type='submit'>Tweet</button>
          </form>

          <Separator/>

          {tweets.map(tweet => {
            return <Tweet key={tweet} content={tweet}/>
          })}
        </main>
    )
}