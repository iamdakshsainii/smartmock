"use client"

import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React, { useEffect, useState, useRef } from 'react'
import Webcam from 'react-webcam'
import useSpeechToText from 'react-hook-speech-to-text'
import { Mic, StopCircle, Camera, Settings, Volume2 } from 'lucide-react'
import { toast } from 'sonner'
import { chatSession } from '@/utils/GeminiAIModal'
import { db } from '@/utils/db'
import { UserAnswer } from '@/utils/schema'
import { useUser } from '@clerk/nextjs'
import moment from 'moment'

function RecordAnswerSection({ mockInterviewQuestion, activeQuestionIndex, interviewData }) {
  const [userAnswer, setUserAnswer] = useState('')
  const { user, isLoaded } = useUser()
  const [loading, setLoading] = useState(false)
  const [isSpeaking, setIsSpeaking] = useState(false)
  const webcamRef = useRef(null)

  const {
    isRecording,
    results,
    startSpeechToText,
    stopSpeechToText,
    setResults
  } = useSpeechToText({
    continuous: false,
    useLegacyResults: false
  })

  // Initialize component
  useEffect(() => {
    // Component ready
  }, [])

  // Collect transcripts
  useEffect(() => {
    if (results?.length > 0) {
      const finalAnswer = results.map(r => r.transcript).join(' ')
      setUserAnswer(finalAnswer)
    }
  }, [results])

  // Auto-save when recording stops and answer is long enough
  useEffect(() => {
    if (!isRecording && userAnswer?.length > 10 && isLoaded && user) {
      UpdateUserAnswer()
    }
  }, [userAnswer, isRecording, isLoaded, user])

  const StartStopRecording = async () => {
    try {
      if (!isLoaded || !user) {
        toast.error("Please sign in to record answers")
        return
      }

      if (isRecording) {
        stopSpeechToText()
        toast.success("Recording stopped")
      } else {
        startSpeechToText()
        toast.success("Recording started - speak now!")
      }
    } catch (err) {
      console.error("Speech error:", err)
      toast.error("Speech recognition failed. Please try again.")
    }
  }

  // Read question aloud with stop functionality
  const speakQuestion = () => {
    const question = mockInterviewQuestion[activeQuestionIndex]?.question
    if (question) {
      if (isSpeaking) {
        // Stop speaking
        speechSynthesis.cancel()
        setIsSpeaking(false)
      } else {
        // Start speaking
        const utterance = new SpeechSynthesisUtterance(question)
        utterance.rate = 0.8
        utterance.pitch = 1
        utterance.onstart = () => setIsSpeaking(true)
        utterance.onend = () => setIsSpeaking(false)
        utterance.onerror = () => setIsSpeaking(false)
        speechSynthesis.speak(utterance)
      }
    }
  }

  const UpdateUserAnswer = async () => {
    if (!user || !isLoaded) {
      toast.error("Authentication required")
      return
    }

    if (!mockInterviewQuestion[activeQuestionIndex]) {
      toast.error("No question found")
      return
    }

    setLoading(true)

    const feedbackPrompt = `Question: ${mockInterviewQuestion[activeQuestionIndex]?.question},
    User Answer: ${userAnswer}. Based on the question and answer,
    give a short feedback in JSON format with fields: "rating" (number 1-10) and "feedback" (string).`

    try {
      const result = await chatSession.sendMessage(feedbackPrompt)
      const mockJsonResp = result.response.text().replace('```json', '').replace('```', '')
      const JsonFeedbackResp = JSON.parse(mockJsonResp)

      const resp = await db.insert(UserAnswer).values({
        mockIdRef: interviewData?.mockId,
        question: mockInterviewQuestion[activeQuestionIndex]?.question,
        correctAns: mockInterviewQuestion[activeQuestionIndex]?.answer,
        userAns: userAnswer,
        feedback: JsonFeedbackResp?.feedback,
        rating: JsonFeedbackResp?.rating,
        userEmail: user?.primaryEmailAddress?.emailAddress,
        createdAt: moment().format('DD-MM-yyyy')
      })

      if (resp) {
        toast.success('Answer saved successfully! ✅')
        setUserAnswer('')
        setResults([])
      }
    } catch (err) {
      console.error("Feedback processing failed:", err)
      toast.error("Failed to process feedback 😓")
    }

    setLoading(false)
  }

  // Webcam constraints
  const videoConstraints = {
    width: 1280,
    height: 720
  }

  if (!isLoaded) {
    return <div className="flex justify-center items-center p-10">Loading...</div>
  }

  if (!user) {
    return (
      <div className="flex justify-center items-center p-10">
        <p>Please sign in to record your answers</p>
      </div>
    )
  }

  return (
    <div className="flex items-center justify-center flex-col w-full">
      {/* Audio Control */}
      <div className="mb-4">
        <Button
          variant="outline"
          size="sm"
          onClick={speakQuestion}
          className={isSpeaking ? "text-red-600" : "text-blue-600"}
        >
          <Volume2 size={16} className="mr-2" />
          {isSpeaking ? 'Stop Reading' : 'Read Question'}
        </Button>
      </div>

      {/* Webcam Container */}
      <div className="relative bg-black rounded-lg overflow-hidden" style={{ width: '500px', height: '400px' }}>
        {/* Remove the webcam.png overlay - it's covering your video! */}
        <Webcam
          ref={webcamRef}
          mirrored={true}
          videoConstraints={videoConstraints}
          className="w-full h-full object-cover"
          style={{ zIndex: 1 }}
          onUserMediaError={(error) => {
            console.error('Webcam error:', error)
            toast.error('Failed to access camera')
          }}
        />

        {/* Recording indicator */}
        {isRecording && (
          <div className="absolute top-4 right-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-medium animate-pulse z-10">
            ● REC
          </div>
        )}
      </div>

      {/* Current Status */}
      <div className="mt-2 text-sm text-gray-600 text-center">
        📹 Camera Active
      </div>

      {/* Recording Button */}
      <Button
        disabled={loading}
        variant={isRecording ? "destructive" : "default"}
        className="my-6 px-8 py-3 text-lg"
        onClick={StartStopRecording}
      >
        {isRecording ? (
          <div className="flex gap-2 items-center">
            <StopCircle className="w-6 h-6" />
            Stop Recording
          </div>
        ) : (
          <div className="flex gap-2 items-center">
            <Mic className="w-6 h-6" />
            Record Answer
          </div>
        )}
      </Button>

      {/* Recording Status */}
      {isRecording && (
        <div className="text-center p-4 bg-red-50 rounded-lg mb-4">
          <p className="text-red-700 font-medium">🎤 Recording in progress...</p>
          <p className="text-sm text-red-600">Speak clearly into your microphone</p>
        </div>
      )}

      {/* Live Transcript */}
      {isRecording && results.length > 0 && (
        <div className="w-full max-w-2xl p-4 bg-yellow-50 rounded-lg mb-4">
          <h3 className="font-medium mb-2 text-yellow-800">Live Transcript:</h3>
          <p className="text-sm text-yellow-700">
            {results.map(r => r.transcript).join(' ')}
          </p>
        </div>
      )}

      {/* Final Answer Preview */}
      {userAnswer && !isRecording && (
        <div className="w-full max-w-2xl p-4 bg-green-50 rounded-lg">
          <h3 className="font-medium mb-2 text-green-800">Your Answer:</h3>
          <p className="text-sm text-green-700">{userAnswer}</p>
          <div className="mt-3 flex gap-2">
            <Button
              size="sm"
              onClick={() => {
                setUserAnswer('')
                setResults([])
              }}
              variant="outline"
            >
              Clear Answer
            </Button>
            <Button
              size="sm"
              onClick={UpdateUserAnswer}
              disabled={loading}
            >
              {loading ? 'Saving...' : 'Save Answer'}
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}

export default RecordAnswerSection
