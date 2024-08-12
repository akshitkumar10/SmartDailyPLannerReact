import { useState, useCallback } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import GanttChart from './components/Ganttchart'
import Chatinput from './components/Chatinput'
import Submit from './components/Submit'
import ButtonAppBar from './components/ButtonAppBar'
import test_call from './utils/GemApi' 
import LoaderInd from './components/LoaderInd'
import Refresh from './components/Refresh'
import TextInput from './components/TextInput'
import Placeholder from './components/PlaceHolder'



function App() {
  const [count, setCount] = useState(0)

  const [story, setStory] = useState('');
  const [error, setError] = useState(null);
  const [story_fetching, setSf] = useState(false);

  const [textInput, setTextInput] = useState('');
  const handleTextInputChange = (value) => {
    setTextInput(value);
  };

  const generateStory = async () => {
    if(textInput.length == 0){
      return
    }
    setSf(true)
    try {
        const generatedStory = await test_call(textInput);
        setStory(generatedStory);
    } catch (err) {
        console.error('Failed to generate story:', err);
        setError('Failed to generate story. Please try again.');
    }
    setSf(false)
  };

  return (
    <div className='flex-container'>
      <div className='flex-item'><ButtonAppBar/></div>
      <div className='flex-item'>
        {(story.length > 0) ? <GanttChart res={story}/> : <Placeholder/>}
      </div>
      <div className='flex-item'>
        <div className='flex-container-row'>
          <div className='text-input'>
            <TextInput onChange={handleTextInputChange}/>
          </div>
          <div className='button-stack'>
            <div className='button'>
              <Submit func={generateStory}/>
            </div>
            <div className='button'>
              <Refresh story={story} setStory={setStory} setSf={setSf} textInput={textInput}/>
            </div>
          </div>
        </div>
        <div>
            {/* {error && <p style={{ color: 'red' }}>{error}</p>} */}
            {(story_fetching) ? <LoaderInd/> : <p>{/* story */}</p>}
        </div>
      </div>
    </div>
  )
}

export default App
