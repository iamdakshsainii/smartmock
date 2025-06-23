'use client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import Header from '@/app/dashboard/_components/Header';  // Ensure Header import from correct location

const HowItWorks = () => {
  const router = useRouter();

  const steps = [
    {
      title: 'Step 1: Create New Mock Interview',
      description: 'Click on the "+ Add New" button on your dashboard to initiate a new interview session.',
      image: '/add-new.png',
    },
    {
      title: 'Step 2: Fill Out Interview Details',
      description: 'Provide your Job Role, Tech Stack, and Years of Experience in the form shown.',
      image: '/fill-form.png',
    },
    {
      title: 'Step 3: Enable Webcam & Microphone',
      description: 'Enable your webcam and microphone. Your video is never recorded and can be disabled anytime.',
      image: '/enable-camera.png',
    },
    {
      title: 'Step 4: Navigate Questions & Record Responses',
      description: 'Use the record button to answer questions. Respond confidently.',
      image: '/navigate-questions.png',
    },
    {
      title: 'Step 5: Submit & Get Feedback',
      description: 'Finish to receive ratings and personalized feedback.',
      image: '/feedback.png',
    },
    {
      title: 'Step 6: Upgrade for More Features',
      description: 'Access analytics, custom templates, and more with premium.',
      image: '/upgrade.png',
    },
  ];

  return (
    <div>
      <Header /> {/* Add the Header component to keep the navbar visible */}

      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <h1 className="text-3xl font-bold text-center mb-6">How to Use SmartMock</h1>

        <p className="text-center text-lg text-gray-600 mb-10">
          Get ready to ace your interviews with SmartMock! Follow these steps to master the process.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-white p-6 rounded-xl shadow-md transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
            >
              <div className="relative w-full h-48 mb-6">
                <Image
                  src={step.image}
                  layout="fill"
                  objectFit="cover"
                  alt={step.title}
                  className="rounded-lg"
                />
              </div>
              <h2 className="text-lg font-semibold text-gray-800 mb-3">{step.title}</h2>
              <p className="text-gray-600 text-center">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button
            className="px-8 py-4 text-white bg-gradient-to-r from-pink-500 to-yellow-500 rounded-full text-lg font-semibold shadow-lg hover:from-pink-600 hover:to-yellow-600 transition-all"
            onClick={() => router.push('/auth/sign-in')}
          >
            Start Your First Mock Interview
          </button>
        </div>
      </main>
    </div>
  );
};

export default HowItWorks;
