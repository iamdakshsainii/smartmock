'use client'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import Webcam from 'react-webcam'
import useSpeechToText from 'react-hook-speech-to-text'
import { Mic, StopCircle } from 'lucide-react'
import { toast } from 'sonner'
import { chatSession } from '@/utils/GeminiAIModal'
import { db } from '@/utils/db'
import { UserAnswer } from '@/utils/schema'
import { useUser } from '@clerk/nextjs'
import moment from 'moment'

function RecordAnswerSectionInner({ mockInterviewQuestion, activeQuestionIndex, interviewData }) {
  const [userAnswer, setUserAnswer] = useState('')
  const { user } = useUser()
  const [loading, setLoading] = useState(false)

  const {
    error,
    interimResult,
    isRecording,
    results,
    startSpeechToText,
    stopSpeechToText,
    setResults
  } = useSpeechToText({
    continuous: false,
    useLegacyResults: false
  })

  useEffect(() => {
    if (results?.length > 0) {
      const finalAnswer = results.map((r) => r.transcript).join(' ')
      setUserAnswer(finalAnswer)
    }
  }, [results])

  useEffect(() => {
    if (!isRecording && userAnswer?.length > 10) {
      UpdateUserAnswer()
    }
  }, [userAnswer])

  const StartStopRecording = async () => {
    try {
      if (isRecording) {
        stopSpeechToText()
      } else {
        startSpeechToText()
      }
    } catch (err) {
      console.error("Speech error:", err)
    }
  }

  const UpdateUserAnswer = async () => {
    setLoading(true)
    const feedbackPrompt = `Question: ${mockInterviewQuestion[activeQuestionIndex]?.question},
    User Answer: ${userAnswer}. Based on the question and answer,
    give a short feedback in JSON with fields: "rating" and "feedback".`

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
        toast('User Answer recorded successfully ✅')
        setUserAnswer('')
        setResults([])
      }
    } catch (err) {
      console.error("Feedback processing failed:", err)
      toast.error("Failed to process feedback 😓")
    }

    setLoading(false)
  }

  return (
    <div className="flex items-center justify-center flex-col">
      <div className="flex flex-col mt-20 justify-center items-center bg-black rounded-lg p-5">
        <Image src="/webcam.png" width={200} height={200} className="absolute" alt="Webcam" />
        <Webcam
          mirrored={true}
          style={{
            height: 500,
            width: 500,
            zIndex: 10
          }}
        />
      </div>

      <Button
        disabled={loading}
        variant="outline"
        className="my-10"
        onClick={StartStopRecording}
      >
        {isRecording ? (
          <h2 className="text-red-600 animate-pulse flex gap-2 items-center">
            <StopCircle /> Stop Recording
          </h2>
        ) : (
          <h2 className="text-primary flex gap-2 items-center">
            <Mic /> Record Answer
          </h2>
        )}
      </Button>
    </div>
  )
}

export default RecordAnswerSectionInner
