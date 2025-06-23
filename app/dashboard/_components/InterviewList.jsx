"use client"
import { db } from '@/utils/db';
import { MockInterview } from '@/utils/schema';
import { useUser } from '@clerk/nextjs'
import { desc, eq } from 'drizzle-orm';
import React, { useEffect, useState } from 'react'
import InterviewItemCard from './InterviewItemCard';
import { History, TrendingUp } from 'lucide-react';

function InterviewList() {
    const {user}=useUser();
    const [interviewList,setInterviewList]=useState([]);

    useEffect(()=>{
        user&&GetInterviewList();
    },[user])

    const GetInterviewList=async()=>{
        const result=await db.select()
        .from(MockInterview)
        .where(eq(MockInterview.createdBy,user?.primaryEmailAddress?.emailAddress))
        .orderBy(desc(MockInterview.id));

        console.log(result);
        setInterviewList(result);
    }

   return (
    <div className="space-y-6">
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-8">
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-3 rounded-2xl shadow-lg">
                <History className="w-6 h-6 text-white" />
            </div>
            <div>
                <h2 className='text-2xl font-bold bg-gradient-to-r from-gray-800 to-gray-600
                bg-clip-text text-transparent'>
                    Previous Mock Interviews
                </h2>
                <p className="text-gray-600 text-sm mt-1">
                    Review your interview history and track your progress
                </p>
            </div>
            {interviewList?.length > 0 && (
                <div className="ml-auto flex items-center gap-2 bg-green-50 px-4 py-2 rounded-xl border border-green-200">
                    <TrendingUp className="w-4 h-4 text-green-600" />
                    <span className="text-sm font-medium text-green-700">
                        {interviewList.length} Interview{interviewList.length !== 1 ? 's' : ''} Completed
                    </span>
                </div>
            )}
        </div>

        {/* Interview Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {interviewList?.length > 0 ?
                interviewList.map((interview, index) => (
                    <InterviewItemCard
                        interview={interview}
                        key={index}
                    />
                ))
            :
                // Loading skeleton with modern design
                [1, 2, 3, 4, 5, 6].map((item, index) => (
                    <div key={index} className='group relative bg-white rounded-3xl shadow-lg border border-gray-100
                    p-6 overflow-hidden animate-pulse'>
                        {/* Skeleton header */}
                        <div className="flex items-start justify-between mb-4">
                            <div className="w-10 h-10 bg-gradient-to-r from-gray-200 to-gray-300 rounded-xl"></div>
                            <div className="w-16 h-6 bg-gray-200 rounded-lg"></div>
                        </div>

                        {/* Skeleton title */}
                        <div className="space-y-3 mb-4">
                            <div className="h-6 bg-gray-200 rounded-lg w-3/4"></div>
                            <div className="h-4 bg-gray-200 rounded-lg w-1/2"></div>
                            <div className="h-4 bg-gray-200 rounded-lg w-2/3"></div>
                        </div>

                        {/* Skeleton tech stack */}
                        <div className="mb-4 p-3 bg-gray-50 rounded-xl">
                            <div className="h-3 bg-gray-200 rounded w-1/4 mb-2"></div>
                            <div className="h-4 bg-gray-200 rounded w-full"></div>
                        </div>

                        {/* Skeleton buttons */}
                        <div className="flex gap-3 mt-6">
                            <div className="flex-1 h-11 bg-gray-200 rounded-xl"></div>
                            <div className="flex-1 h-11 bg-gradient-to-r from-gray-200 to-gray-300 rounded-xl"></div>
                        </div>

                        {/* Animated shimmer effect */}
                        <div className="absolute inset-0 -translate-x-full bg-gradient-to-r
                        from-transparent via-white/20 to-transparent animate-[shimmer_2s_ease-in-out_infinite]"></div>
                    </div>
                ))
            }
        </div>

        {/* Empty state message for no interviews */}
        {interviewList?.length === 0 && (
            <div className="text-center py-12">
                <div className="bg-gradient-to-r from-gray-100 to-gray-200 w-24 h-24 rounded-full
                flex items-center justify-center mx-auto mb-4">
                    <History className="w-10 h-10 text-gray-400" />
                </div>
                <h3 className="text-lg font-semibold text-gray-600 mb-2">No interviews yet</h3>
                <p className="text-gray-500 text-sm">
                    Create your first mock interview to get started with your preparation journey
                </p>
            </div>
        )}
    </div>
   )
}

export default InterviewList

/* Add this CSS to your global styles for the shimmer animation */
/*
@keyframes shimmer {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
}
*/
