"use client" // for client side
import React, { useState } from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { chatSession } from '@/utils/GeminiAIModal'
import { LoaderCircle, Plus, Sparkles } from 'lucide-react'
import { db } from '@/utils/db'
import { MockInterview } from '@/utils/schema'
import { v4 as uuidv4 } from 'uuid';
import { useUser } from '@clerk/nextjs'
import moment from 'moment'
import { useRouter } from 'next/navigation'

function AddNewInterview() {
    const [openDailog,setOpenDailog]=useState(false)
    const [jobPosition,setJobPosition]=useState();
    const [jobDesc,setJobDesc]=useState();
    const [jobExperience,setJobExperience]=useState();
    const [loading,setLoading]=useState(false);
    const [jsonResponse,setJsonResponse]=useState([]);
    const router=useRouter();
    const {user}=useUser();

    const onSubmit=async(e)=>{
        setLoading(true)
        e.preventDefault()
        console.log(jobPosition,jobDesc,jobExperience);

        const InputPrompt="Job position: "+jobPosition+", Job Description: "+jobDesc+", Years of Experience : "+jobExperience+" , Depends on Job Position, Job Description & Years of Experience give us "+process.env.NEXT_PUBLIC_INTERVIEW_QUESTION_COUNT+" Interview question along with Answer in JSON format, Give us question and answer field on JSON"

        const result=await chatSession.sendMessage(InputPrompt);
        const MockJsonResp=(result.response.text()).replace('```json','').replace('```','')
        console.log(JSON.parse(MockJsonResp));
        setJsonResponse(MockJsonResp);

        if(MockJsonResp)
        {
        const resp=await db.insert(MockInterview)
        .values({
            mockId:uuidv4(),
            jsonMockResp:MockJsonResp,
            jobPosition:jobPosition,
            jobDesc:jobDesc,
            jobExperience:jobExperience,
            createdBy:user?.primaryEmailAddress?.emailAddress,
            createdAt:moment().format('DD-MM-yyyy')
        }).returning({mockId:MockInterview.mockId});

        console.log("Inserted ID:",resp)
        if(resp)
        {
            setOpenDailog(false);
            router.push('/dashboard/interview/'+resp[0]?.mockId)
        }
    }
    else{
        console.log("error");
    }
        setLoading(false);
    }

  return (
    <div>
        <div className='group relative overflow-hidden bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50
        border-2 border-dashed border-blue-200 rounded-3xl p-8 cursor-pointer
        hover:border-blue-400 hover:shadow-2xl hover:shadow-blue-100/50
        transition-all duration-500 ease-out hover:scale-[1.02] hover:-translate-y-1
        backdrop-blur-sm'
         onClick={()=>setOpenDailog(true)}
         >
            {/* Animated background gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400/10 via-purple-400/10 to-pink-400/10
            opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            {/* Floating particles effect */}
            <div className="absolute top-4 right-4 w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
            <div className="absolute bottom-6 left-6 w-1 h-1 bg-purple-400 rounded-full animate-pulse delay-300"></div>
            <div className="absolute top-1/2 left-1/4 w-1.5 h-1.5 bg-pink-400 rounded-full animate-pulse delay-700"></div>

            <div className="relative z-10 flex flex-col items-center justify-center space-y-4">
                <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-4 rounded-2xl
                group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Plus className="w-8 h-8 text-white" />
                </div>
                <div className="text-center">
                    <h2 className='text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600
                    bg-clip-text text-transparent group-hover:from-blue-700 group-hover:to-purple-700
                    transition-all duration-300'>
                        Create New Interview
                    </h2>
                    <p className="text-sm text-gray-600 mt-2 group-hover:text-gray-700 transition-colors">
                        Start your AI-powered mock interview
                    </p>
                </div>
            </div>
        </div>

        <Dialog open={openDailog}>
        <DialogContent className="max-w-2xl border-0 bg-white/95 backdrop-blur-xl shadow-2xl rounded-3xl">
            <DialogHeader className="space-y-4 pb-6">
                <div className="flex items-center gap-3">
                    <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-2 rounded-xl">
                        <Sparkles className="w-6 h-6 text-white" />
                    </div>
                    <DialogTitle className="text-2xl font-bold bg-gradient-to-r from-gray-800 to-gray-600
                    bg-clip-text text-transparent">
                        Create Your Interview Experience
                    </DialogTitle>
                </div>
                <DialogDescription className="text-gray-600">
                    <form onSubmit={onSubmit} className="space-y-6">
                        <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-2xl border border-blue-100">
                            <h3 className="text-lg font-semibold text-gray-800 mb-4">Interview Details</h3>
                            <p className="text-sm text-gray-600 mb-6">
                                Provide information about your target position and experience level
                            </p>

                            <div className='space-y-5'>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                                        Job Role/Position
                                    </label>
                                    <Input
                                        placeholder="e.g., Full Stack Developer, Data Scientist"
                                        required
                                        className="border-gray-200 focus:border-blue-500 focus:ring-blue-500/20
                                        rounded-xl h-12 bg-white/70 backdrop-blur-sm transition-all duration-300"
                                        onChange={(event)=>setJobPosition(event.target.value)}
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                                        <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                                        Tech Stack & Skills
                                    </label>
                                    <Textarea
                                        placeholder="e.g., React, Node.js, Python, AWS, Docker, MongoDB..."
                                        required
                                        className="border-gray-200 focus:border-purple-500 focus:ring-purple-500/20
                                        rounded-xl min-h-[100px] bg-white/70 backdrop-blur-sm transition-all duration-300 resize-none"
                                        onChange={(event)=>setJobDesc(event.target.value)}
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                                        <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                                        Years of Experience
                                    </label>
                                    <Input
                                        placeholder="e.g., 2"
                                        type="number"
                                        max="50"
                                        required
                                        className="border-gray-200 focus:border-pink-500 focus:ring-pink-500/20
                                        rounded-xl h-12 bg-white/70 backdrop-blur-sm transition-all duration-300"
                                        onChange={(event)=>setJobExperience(event.target.value)}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className='flex gap-4 justify-end pt-4'>
                            <Button
                                type="button"
                                variant="ghost"
                                onClick={()=>setOpenDailog(false)}
                                className="px-6 py-3 rounded-xl hover:bg-gray-100 transition-all duration-300"
                            >
                                Cancel
                            </Button>
                            <Button
                                type="submit"
                                disabled={loading}
                                className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600
                                hover:from-blue-600 hover:to-purple-700 text-white rounded-xl
                                shadow-lg hover:shadow-xl transition-all duration-300
                                disabled:opacity-70 disabled:cursor-not-allowed"
                            >
                                {loading ? (
                                    <div className="flex items-center gap-2">
                                        <LoaderCircle className='animate-spin w-4 h-4' />
                                        <span>Generating Questions...</span>
                                    </div>
                                ) : (
                                    <div className="flex items-center gap-2">
                                        <Sparkles className="w-4 h-4" />
                                        <span>Start Interview</span>
                                    </div>
                                )}
                            </Button>
                        </div>
                    </form>
                </DialogDescription>
            </DialogHeader>
        </DialogContent>
        </Dialog>
    </div>
  )
}

export default AddNewInterview
