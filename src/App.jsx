import { useState } from 'react'
import { Configuration, OpenAIApi} from 'openai'
import ImageAI from './components/ImageAI'
import { arrayItems } from './AIOptions'
import Translation from './components/Translation'
import Options from './components/Options'


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
    <div>
      <ImageAI generateImage={generateImage} prompt={prompt} setPrompt={setPrompt} result={result} />
      <Options arrayItems={arrayItems}/>
      
    </div>
  )
}

export default App
