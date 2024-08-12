import * as React from 'react';
import Button from '@mui/material/Button';
import RefreshIcon from '@mui/icons-material/Refresh';
import { update_schedule } from '../utils/GemApi';

export default function Refresh(props) {
    const {story, setStory, setSf, textInput} = props

    const update = async () => {
        if(!story) return
        
        setSf(true)
        try {
            const generatedStory = await update_schedule(story, textInput);
            setStory(generatedStory);
        } catch (err) {
            console.error('Failed to generate story:', err);
            setError('Failed to generate story. Please try again.');
        }
        setSf(false)
    }

    return (
        <Button onClick={update} variant="outlined" endIcon={<RefreshIcon />}>
        Update
        </Button>
    );
}
