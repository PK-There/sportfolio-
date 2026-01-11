import React, { useState, useRef } from 'react';
import { aiAPI } from '../services/api';

const VoiceInput = ({ onTranscript, placeholder = "Speak now..." }) => {
    const [isRecording, setIsRecording] = useState(false);
    const [transcript, setTranscript] = useState('');
    const [status, setStatus] = useState('');
    const mediaRecorderRef = useRef(null);
    const audioChunksRef = useRef([]);

    const startRecording = async () => {
        try {
            setStatus('Starting microphone...');
            const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
            
            const mediaRecorder = new MediaRecorder(stream);
            mediaRecorderRef.current = mediaRecorder;
            audioChunksRef.current = [];

            mediaRecorder.ondataavailable = (event) => {
                if (event.data.size > 0) {
                    audioChunksRef.current.push(event.data);
                }
            };

            mediaRecorder.onstop = async () => {
                setStatus('Processing audio...');
                
                // Create a blob from the recorded audio
                const audioBlob = new Blob(audioChunksRef.current, { type: 'audio/webm' });
                
                // Create a file object to send to the API
                const audioFile = new File([audioBlob], 'recording.webm', { type: 'audio/webm' });
                
                try {
                    // Send to backend STT service
                    const response = await aiAPI.transcribeAudio(audioFile, 'en');
                    
                    if (response.success) {
                        const text = response.transcription || '';
                        setTranscript(text);
                        if (onTranscript) onTranscript(text);
                        setStatus('Transcription complete');
                    } else {
                        setStatus('Transcription failed: ' + (response.error || 'Unknown error'));
                        console.error('STT API Error:', response);
                    }
                } catch (error) {
                    console.error('Error transcribing audio:', error);
                    setStatus('Error: ' + error.message);
                }
                
                // Stop all tracks to release microphone
                stream.getTracks().forEach(track => track.stop());
                setIsRecording(false);
            };

            mediaRecorder.start();
            setIsRecording(true);
            setStatus('Recording... Speak now');
        } catch (error) {
            console.error('Error accessing microphone:', error);
            setStatus('Microphone access denied: ' + error.message);
            setIsRecording(false);
        }
    };

    const stopRecording = () => {
        if (mediaRecorderRef.current && isRecording) {
            mediaRecorderRef.current.stop();
            setStatus('Stopping...');
        }
    };

    const toggleRecording = () => {
        if (isRecording) {
            stopRecording();
        } else {
            startRecording();
        }
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', width: '100%' }}>
            <div 
                onClick={toggleRecording}
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.5rem',
                    padding: '0.75rem 1rem',
                    border: `2px solid ${isRecording ? 'var(--accent-primary)' : 'var(--border-color)'}`,
                    borderRadius: '8px',
                    background: isRecording ? 'var(--accent-glow)' : 'var(--bg-secondary)',
                    cursor: 'pointer',
                    transition: 'all 0.2s',
                    minHeight: '50px',
                    position: 'relative'
                }}
            >
                <span style={{ fontSize: '1.5rem' }}>
                    {isRecording ? '🔴' : '🎤'}
                </span>
                <div style={{ flex: 1, textAlign: 'center' }}>
                    <div style={{ fontWeight: '500', color: 'var(--text-primary)' }}>
                        {isRecording ? 'Listening...' : placeholder}
                    </div>
                    {status && (
                        <div style={{ fontSize: '0.8rem', color: isRecording ? 'var(--accent-primary)' : 'var(--text-secondary)', marginTop: '0.25rem' }}>
                            {status}
                        </div>
                    )}
                </div>
            </div>
            
            {transcript && (
                <div style={{
                    padding: '1rem',
                    background: 'var(--bg-secondary)',
                    borderRadius: '8px',
                    border: '1px solid var(--border-color)',
                    marginTop: '0.5rem'
                }}>
                    <div style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>
                        Transcription:
                    </div>
                    <div style={{ color: 'var(--text-primary)', lineHeight: '1.5' }}>
                        {transcript}
                    </div>
                </div>
            )}
        </div>
    );
};

export default VoiceInput;