import React from 'react'
import { main } from '../../API/GEMINI';
import styles from './Testing.module.css'

function Testing() {
  const [prompt, setPrompt] = React.useState("Give Greeting to the visitor");
  const [response, setResponse] = React.useState("Welcome how may i help you");
  return (
    <section className={styles.testingSection}>
      <p className={styles.responseText}>{response}</p>
      <input className={styles.promptInput} type="text" value={prompt} onChange={(e) => setPrompt(e.target.value)} />
      <button className={styles.submitButton} onClick={() => setResponse(main(prompt))} >Click Me</button>
    </section>
  )
}

export default Testing
