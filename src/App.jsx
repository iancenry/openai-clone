import { useState } from 'react'
import { Configuration, OpenAIApi} from 'openai'

function App() {
  const [prompt, setPrompt] = useState("")
  const [result, setResult] = useState("")

  const configuration = new Configuration({
    apiKey: import.meta.env.VITE_OPENAI_API_KEY,
  });  

  const openai = new OpenAIApi(configuration);

  const generateImage = async ()=>{
    const res = await openai.createImage({
      prompt: prompt,
      n: 1,
      size: "1024x1024"
    });

    setResult(res.data.data[0].url)

  }


  return (
    <div className='main'>
      <h1>Generate an AI  Image</h1>
      <input type="text" placeholder='Type Image Query' className='main-input' name='prompt' value={prompt} onChange={(e) => setPrompt(e.target.value)} />
      <button onClick={generateImage}>Generate an Image</button>

      {result.length > 0 && <img src={result} alt="result" className='result-image' />}
    </div>
  )
}

export default App
