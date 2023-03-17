import { useState } from 'react'
import { Configuration, OpenAIApi} from 'openai'

function App() {
  const configuration = new Configuration({
    apiKey: import.meta.env.VITE_OPENAI_API_KEY,
  });  

  return (
    <div>
    </div>
  )
}

export default App
