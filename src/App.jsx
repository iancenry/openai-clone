import { useState } from 'react'
import { Configuration, OpenAIApi } from 'openai'
import ImageAI from './components/ImageAI'
import { arrayItems } from './AIOptions'
import Translation from './components/Translation'
import Options from './components/Options'

function App() {
  // image generation states
  const [prompt, setPrompt] = useState('')
  const [result, setResult] = useState('')
  //ai options states
  const [option, setOption] = useState({})
  const [query, setQuery] = useState("")

  const configuration = new Configuration({
    apiKey: import.meta.env.VITE_OPENAI_API_KEY,
  })

  const openai = new OpenAIApi(configuration)

  //generate an image using a given prompt
  const generateImage = async () => {
    const res = await openai.createImage({
      prompt: prompt,
      n: 1,
      size: '1024x1024',
    })

    setResult(res.data.data[0].url)
  }

  //select an option; receives the api request settings of selected option from AIOptions > index.jsx
  const selectOption = (option) => {
    setOption(option)
  }
  //send request to openai API
  const sendQuery = async () => {
    let requestObject = {...option, prompt : query}
    const response = await openai.createCompletion(requestObject)
    console.log(response)
  }

  const resetOptions = () => {}

  return (
    <div>
      <ImageAI
        generateImage={generateImage}
        prompt={prompt}
        setPrompt={setPrompt}
        result={result}
      />

      {Object.values(option).length === 0 ? (
        <Options arrayItems={arrayItems} selectOption={selectOption} />
      ) : (
        <Translation sendQuery={sendQuery} setQuery={setQuery} />
      )}
    </div>
  )
}

export default App
