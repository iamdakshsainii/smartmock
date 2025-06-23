'use client';

import Header from '@/app/dashboard/_components/Header';
import Link from 'next/link';
import { useState } from 'react';
import { Button } from '@/components/ui/button'; // Assuming this is your shadcn/ui Button
import {
  ChevronDown,
  ChevronUp,
  Star,
  Play,
  MessageCircle,
  TrendingUp,
  Users,
  Award,
  Target
} from 'lucide-react';
import Image from 'next/image';

export default function Home() {
  const [openFAQ, setOpenFAQ] = useState(null);
  const toggleFAQ = (i) => setOpenFAQ(openFAQ === i ? null : i);

  const faqData = [
    {
      question: 'How do I start a mock interview?',
      answer: 'Click on Start Mock Interview and follow the instructions.'
    },
    {
      question: 'Is SmartMock free to use?',
      answer: 'Yes, SmartMock is completely free for all users.'
    },
    {
      question: 'How do I get feedback on my performance?',
      answer: 'You will receive AI-generated feedback immediately after the interview.'
    },
    {
      question: 'Can I use SmartMock on mobile?',
      answer: 'Yes, SmartMock is fully responsive and works on all devices.'
    }
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white py-24 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10" // Reduced opacity for background pattern
          style={{
            backgroundImage:
              'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.03\'%3E%3Ccircle cx=\'30\' cy=\'30\' r=\'2\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'
          }}
        />
        <div className="max-w-6xl mx-auto text-center px-6 relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight drop-shadow-lg"> {/* Added drop shadow for h1 */}
            Welcome to <span className="text-blue-200">SmartMock</span>
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-4xl mx-auto leading-relaxed opacity-90"> {/* Slight opacity for p */}
            Master your interview skills with AI-powered mock interviews and personalized feedback
          </p>
          <div className="flex justify-center flex-wrap gap-6 mb-12">
            <Link href="/dashboard">
              <Button
                size="lg"
                className="bg-white text-blue-700 hover:bg-blue-50 px-8 py-4 text-lg font-semibold rounded-xl shadow-lg transition-transform hover:scale-105 duration-300"
              >
                <Play className="w-5 h-5 mr-2" />
                Start Mock Interview
              </Button>
            </Link>
            <Link href="https://t.me/smartmock" target="_blank">
              <Button
                size="lg"
                className="bg-blue-700 border-2 border-blue-700 text-white hover:bg-white hover:text-blue-700 px-8 py-4 text-lg font-semibold rounded-xl transition-transform hover:scale-105 duration-300"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Ask Queries
              </Button>
            </Link>
          </div>
          <div className="flex justify-center items-center gap-8 text-blue-200 text-sm opacity-90"> {/* Slight opacity for stats */}
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4" />
              <span>1000+ Users</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-4 h-4" />
              <span>95% Success Rate</span>
            </div>
            <div className="flex items-center gap-2">
              <Target className="w-4 h-4" />
              <span>500+ Interviews</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-12 text-blue-800">Why Choose SmartMock?</h2> {/* Added text-blue-800 */}
          <div className="grid md:grid-cols-3 gap-10">
            <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow transform hover:-translate-y-1"> {/* Added hover effect */}
              <TrendingUp className="w-10 h-10 mx-auto mb-4 text-blue-600" />
              <h3 className="text-xl font-semibold mb-2">Real-Time AI Feedback</h3>
              <p className="text-gray-700">Get instant feedback on your performance to improve faster.</p> {/* Added text-gray-700 */}
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow transform hover:-translate-y-1"> {/* Added hover effect */}
              <Star className="w-10 h-10 mx-auto mb-4 text-yellow-500" />
              <h3 className="text-xl font-semibold mb-2">Customized Questions</h3>
              <p className="text-gray-700">Questions tailored to your role, level, and preferences.</p> {/* Added text-gray-700 */}
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow transform hover:-translate-y-1"> {/* Added hover effect */}
              <Users className="w-10 h-10 mx-auto mb-4 text-green-600" />
              <h3 className="text-xl font-semibold mb-2">Peer Learning</h3>
              <p className="text-gray-700">Practice with peers and share insights within the community.</p> {/* Added text-gray-700 */}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-800 mb-4">Success Stories</h2>
            <p className="text-xl text-blue-600">See how SmartMock helped professionals land their dream jobs</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                name: 'Daksh Saini',
                title: 'Software Engineer',
                company: 'Google',
                rating: 5,
                photo: '/owner.jpg',
                text: 'SmartMock transformed my interview preparation. The AI feedback helped me identify my weak points and improve significantly!'
              },
              {
                name: 'Fraz',
                title: 'Product Manager',
                company: 'Amazon',
                rating: 4,
                photo: '/fraz-team.jpg',
                text: 'I felt completely prepared for my interviews. The real-time insights and practice sessions were game-changers!'
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="bg-blue-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="flex items-center mb-6">
                  <Image
                    src={testimonial.photo}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full border-4 border-white shadow-lg"
                    width={64}
                    height={64}
                  />
                  <div className="ml-4">
                    <h3 className="text-xl font-bold text-blue-800">{testimonial.name}</h3>
                    <p className="text-blue-600">{testimonial.title} @ {testimonial.company}</p>
                  </div>
                </div>

                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, idx) => (
                    <Star key={idx} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>

                <p className="text-gray-700 leading-relaxed italic">"{testimonial.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-4">SmartMock Impact</h2>
          <p className="text-xl text-blue-200 mb-12">Join thousands of successful professionals</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              ['500+', 'Mock Interviews Completed', 'interviews-icon'],
              ['95%', 'Success Rate', 'success-icon'],
              ['1000+', 'Users Trained', 'users-icon']
            ].map(([value, label, icon], index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20">
                <h3 className="text-5xl font-bold text-white mb-2">{value}</h3>
                <p className="text-xl text-blue-200">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id='faq' className="py-20 bg-blue-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-800 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-blue-600">Everything you need to know about SmartMock</p>
          </div>

          <div className="space-y-4">
            {faqData.map((faq, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg border border-blue-100 overflow-hidden">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex justify-between items-center p-6 text-left text-blue-800 font-semibold text-lg hover:bg-blue-50 transition-colors duration-200"
                >
                  <span>{faq.question}</span>
                  <div className="flex-shrink-0 ml-4">
                    {openFAQ === index ?
                      <ChevronUp className="w-5 h-5 text-blue-600" /> :
                      <ChevronDown className="w-5 h-5 text-blue-600" />
                    }
                  </div>
                </button>
                {openFAQ === index && (
                  <div className="px-6 pb-6 border-t border-blue-100">
                    <p className="text-gray-700 leading-relaxed pt-4">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-4xl font-bold mb-6">Ready to Ace Your Next Interview?</h2>
          <p className="text-xl text-blue-200 mb-10 leading-relaxed">
            Join SmartMock today and transform your interview preparation with AI-powered practice sessions
          </p>
          <Link href="/dashboard">
            <Button className="bg-white text-blue-700 hover:bg-blue-50 px-10 py-4 text-xl font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <Play className="w-6 h-6 mr-3" />
              Start Your Journey
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
