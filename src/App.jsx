import { useState, useCallback } from 'react'
import GanttChart from './components/Ganttchart'
import Chatinput from './components/Chatinput'
import Submit from './components/Submit'
import ButtonAppBar from './components/ButtonAppBar'
import test_call from './utils/GemApi' 
import LoaderInd from './components/LoaderInd'
import Refresh from './components/Refresh'
import TextInput from './components/TextInput'
import Placeholder from './components/PlaceHolder'
import ApiDialog from './components/ApiDialog'



function App() {
  const [apiKey, setApiKey] = useState('');

  const [story, setStory] = useState('');
  const [error, setError] = useState(null);
// loader
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
    (apiKey.length == 0) ? <ApiDialog /> : 
    <div className='flex-container'>
      <div className='flex-item'><ButtonAppBar/></div>
      <div className='flex-item' style={{width:"100%",height:"70vh",overflow:"scroll",
      // display:"flex"
        
      }}>
        {/* <GanttChart res={story}/> */}
        {(story.length > 0) ? <GanttChart res={story}/> : <Placeholder/>}
      </div>
      <div className='flex-item' style={{height:"5vh"}}>
        <div className='flex-container-row'>
          <div className='text-input'>
            <TextInput onChange={handleTextInputChange}/>
          </div>
          <div className='button-stack'>
          {(story.length <= 0) ? 
            <div className='button'>
              <Submit func={generateStory} display={"Submit"} />
            </div>:
            <div className='button'>
              <Refresh story={story} setStory={setStory} setSf={setSf} textInput={textInput}/>
            </div>}
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
