import React from 'react';

const features = [
  {
    icon: "fa-regular fa-clock",
    color: "bg-blue-200 text-blue-600",
    title: "Real-Time Tracking",
    desc: "Track complaints in real-time with instant notifications and status updates throughout the resolution process."
  },
  {
    icon: "fa-regular fa-comment",
    color: "bg-green-200 text-green-600",
    title: "Direct Communication",
    desc: "Chat directly with assigned agents for faster resolution and clear communication throughout the process."
  },
  {
    icon: "fa-regular fa-shield-halved",
    color: "bg-purple-200 text-purple-600",
    title: "Secure & Confidential",
    desc: "Your data is protected with enterprise-grade security and confidentiality measures."
  },
  {
    icon: "fa-solid fa-users",
    color: "bg-yellow-200 text-yellow-600",
    title: "Multi-Role Support",
    desc: "Support for users, agents, and administrators with role-based access and permissions."
  },
  {
    icon: "fa-solid fa-chart-line",
    color: "bg-pink-200 text-pink-600",
    title: "Analytics Dashboard",
    desc: "Comprehensive analytics and reporting to track performance and identify improvement areas."
  },
  {
    icon: "fa-regular fa-circle-check",
    color: "bg-blue-100 text-blue-500",
    title: "Smart Assignment",
    desc: "Automated complaint routing and assignment based on category, priority, and agent availability."
  }
];

const Page1 = () => {
  return (
    <div className="py-12 px-6">
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Why Choose ResolveNow?</h1>
        <p className="text-gray-600 max-w-xl mx-auto">
          Our platform provides everything you need to manage complaints efficiently and transparently.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {features.map((item, i) => (
          <div key={i} className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className={`text-2xl p-4 inline-block rounded-full mb-4 ${item.color}`}>
              <i className={item.icon}></i>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h3>
            <p className="text-gray-600 text-sm">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page1;
