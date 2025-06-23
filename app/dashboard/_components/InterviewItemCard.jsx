"use client";
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import React from 'react';
import { Play, MessageSquare, Calendar, Briefcase, Clock } from 'lucide-react';

function InterviewItemCard({ interview }) {
  const router = useRouter();

  const onStart = () => {
    router.push('/dashboard/interview/' + interview?.mockId);
  };

  const onFeedbackPress = () => {
    router.push('/dashboard/interview/' + interview.mockId + "/feedback");
  };

  return (
    <div className="group relative bg-white/80 backdrop-blur-lg rounded-3xl shadow-lg border border-gray-100
    p-6 hover:shadow-2xl hover:shadow-blue-100/50 transition-all duration-500 ease-out
    hover:scale-[1.02] hover:-translate-y-2 overflow-hidden">

      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-purple-50/50 to-pink-50/50
      opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

      {/* Decorative elements */}
      <div className="absolute top-4 right-4 w-3 h-3 bg-gradient-to-r from-blue-400 to-purple-500
      rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>
      <div className="absolute bottom-6 right-6 w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-500
      rounded-full opacity-40 group-hover:opacity-80 transition-opacity duration-300"></div>

      <div className="relative z-10">
        {/* Header with job position */}
        <div className="mb-4">
          <div className="flex items-start justify-between mb-3">
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-2 rounded-xl
            group-hover:scale-110 transition-transform duration-300">
              <Briefcase className="w-5 h-5 text-white" />
            </div>
            <div className="text-xs font-medium text-gray-400 bg-gray-100 px-2 py-1 rounded-lg">
              #{interview?.mockId?.slice(-6).toUpperCase()}
            </div>
          </div>

          <h2 className="text-xl font-bold text-gray-800 group-hover:text-gray-900
          transition-colors duration-300 line-clamp-2 mb-2">
            {interview?.jobPosition}
          </h2>

          <div className="space-y-2">
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Clock className="w-4 h-4 text-blue-500" />
              <span className="font-medium">{interview?.jobExperience} Years Experience</span>
            </div>

            <div className="flex items-center gap-2 text-xs text-gray-500">
              <Calendar className="w-4 h-4 text-purple-500" />
              <span>Created: {interview.createdAt}</span>
            </div>
          </div>
        </div>

        {/* Tech stack preview (if available) */}
        {interview?.jobDesc && (
          <div className="mb-4 p-3 bg-gray-50 rounded-xl">
            <p className="text-xs font-medium text-gray-600 mb-1">Tech Stack:</p>
            <p className="text-sm text-gray-700 line-clamp-2">
              {interview.jobDesc.length > 60
                ? interview.jobDesc.substring(0, 60) + "..."
                : interview.jobDesc}
            </p>
          </div>
        )}

        {/* Action buttons */}
        <div className="flex gap-3 mt-6">
          <Button
            size="sm"
            variant="outline"
            className="flex-1 h-11 border-2 border-gray-200 hover:border-purple-300
            hover:bg-purple-50 text-gray-700 hover:text-purple-700 rounded-xl
            transition-all duration-300 group-hover:shadow-md"
            onClick={onFeedbackPress}
          >
            <MessageSquare className="w-4 h-4 mr-2" />
            <span className="font-medium">Feedback</span>
          </Button>

          <Button
            size="sm"
            className="flex-1 h-11 bg-gradient-to-r from-blue-500 to-purple-600
            hover:from-blue-600 hover:to-purple-700 text-white rounded-xl
            shadow-lg hover:shadow-xl transition-all duration-300
            group-hover:scale-105"
            onClick={onStart}
          >
            <Play className="w-4 h-4 mr-2 fill-current" />
            <span className="font-medium">Start</span>
          </Button>
        </div>
      </div>

      {/* Subtle border glow effect */}
      <div className="absolute inset-0 rounded-3xl border border-transparent
      bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20
      opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
    </div>
  );
}

export default InterviewItemCard;
