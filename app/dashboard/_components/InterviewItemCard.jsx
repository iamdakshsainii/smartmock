<<<<<<< HEAD
"use client";
=======
>>>>>>> 01d016a8d0b4d144e0d05a5adbdc9446c90651b6
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'
import React from 'react'

function InterviewItemCard({interview}) {

    const router=useRouter();

    const onStart=()=>{
        router.push('/dashboard/interview/'+interview?.mockId)
    }

    const onFeedbackPress=()=>{
        router.push('/dashboard/interview/'+interview.mockId+"/feedback")
    }
<<<<<<< HEAD

=======
    
>>>>>>> 01d016a8d0b4d144e0d05a5adbdc9446c90651b6
  return (
    <div className='border shadow-sm rounded-lg p-3'>
        <h2 className='font-bold text-primary'>{interview?.jobPosition}</h2>
        <h2 className='text-sm text-gray-600'>{interview?.jobExperience} Years of Experience</h2>
        <h2 className='text-xs text-gray-400'>Created At:{interview.createdAt}</h2>
        <div className='flex justify-between mt-2 gap-5'>
            <Button size="sm" variant="outline" className="w-full"
            onClick={onFeedbackPress}
            >Feedback</Button>
            <Button size="sm" className="w-full"
            onClick={onStart}
            >Start</Button>

        </div>
    </div>
  )
}

<<<<<<< HEAD
export default InterviewItemCard
=======
export default InterviewItemCard
>>>>>>> 01d016a8d0b4d144e0d05a5adbdc9446c90651b6
