// components/UpgradeToAccess.jsx
'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const UpgradeToAccess = () => {
  return (
    <div className="text-center bg-white p-8 rounded-xl shadow-md border">
      <Image
        src="/upgrade.png" // make sure you have this image or replace with any other
        width={400}
        height={250}
        alt="Upgrade to access personalized questions"
        className="mx-auto mb-6 rounded-lg"
      />
      <h1 className="text-2xl font-bold mb-2 text-gray-800">Unlock Personalized Interview Questions</h1>
      <p className="text-gray-600 mb-6">
        Upgrade your plan to access customized mock interview questions based on your job role, experience, and tech stack. Filter, select, and simulate real interviews.
      </p>
      <Link href="/dashboard/upgrade">
        <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg shadow">
          Upgrade Now
        </button>
      </Link>
    </div>
  );
};

export default UpgradeToAccess;
