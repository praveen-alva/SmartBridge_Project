import React from 'react';
import {Link} from 'react-router-dom';
const steps = [
  {
    number: 1,
    title: 'Submit Complaint',
    desc: 'Register and submit your complaint with detailed information and attachments.',
    color: '#306bdf'
  },
  {
    number: 2,
    title: 'Get Assigned',
    desc: 'Your complaint is automatically assigned to the most suitable agent.',
    color: '#1aa244'
  },
  {
    number: 3,
    title: 'Track Progress',
    desc: 'Monitor your complaint status and communicate with our assigned agent.',
    color: '#9633e4'
  },
  {
    number: 4,
    title: 'Get Resolved',
    desc: 'Receive resolution and provide feedback on your experience.',
    color: '#ea580b'
  }
];

const stats = [
  { value: '10,000+', label: 'Complaints Resolved' },
  { value: '24h', label: 'Average Response Time' },
  { value: '98%', label: 'Customer Satisfaction' },
  { value: '500+', label: 'Organizations Trust Us' }
];

const testimonials = [
  {
    initials: 'JD',
    bgColor: '#306bdf',
    name: 'John Doe',
    role: 'Customer',
    feedback: 'ResolveNow made it incredibly easy to track my complaint. The agent was responsive and helpful throughout the process.'
  },
  {
    initials: 'SA',
    bgColor: '#1aa244',
    name: 'Sarah Agent',
    role: 'Support Agent',
    feedback: 'As an agent, this platform helps me manage multiple complaints efficiently. The interface is intuitive and powerful.'
  },
  {
    initials: 'AU',
    bgColor: '#9633e4',
    name: 'Admin User',
    role: 'Administrator',
    feedback: 'The analytics and reporting features help us understand our complaint patterns and improve our services. The interface is user friendly.'
  }
];

const ExperienceSection = () => {
  return (
    <>
      {/* How It Works Section */}
      <section className="bg-gray-100 py-16 px-6 text-center">
        <h1 className="text-3xl font-bold mb-2">How It Works</h1>
        <p className="text-gray-600 mb-10">
          Simple steps to get your complaints resolved quickly and efficiently
        </p>

        <div className="flex flex-wrap justify-center gap-6">
          {steps.map((step, i) => (
            <div key={i} className="w-72 bg-white p-6 rounded-lg text-center shadow-sm">
              <div
                className="w-12 h-12 mx-auto mb-4 flex items-center justify-center rounded-full text-white text-lg font-bold"
                style={{ backgroundColor: step.color }}
              >
                {step.number}
              </div>
              <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600 text-sm">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-blue-700 text-white py-10 flex flex-wrap justify-center gap-10 px-6 text-center">
        {stats.map((item, index) => (
          <div key={index}>
            <h1 className="text-3xl font-bold">{item.value}</h1>
            <p>{item.label}</p>
          </div>
        ))}
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-6 bg-gray-100">
        <h1 className="text-3xl font-bold text-center mb-10">What Our Users Say</h1>
        <div className="flex flex-wrap justify-center gap-6">
          {testimonials.map((item, index) => (
            <div key={index} className="bg-white p-6 w-80 rounded-lg shadow-md">
              <div className="text-yellow-400 mb-2 text-lg">
                {[...Array(5)].map((_, i) => (
                  <i key={i} className="fa-solid fa-star mr-1"></i>
                ))}
              </div>
              <p className="text-gray-600 text-sm mb-4">"{item.feedback}"</p>
              <div className="flex items-center gap-4">
                <div
                  className="w-10 h-10 flex items-center justify-center rounded-full text-white font-semibold"
                  style={{ backgroundColor: item.bgColor }}
                >
                  {item.initials}
                </div>
                <div>
                  <h3 className="text-sm font-bold">{item.name}</h3>
                  <p className="text-xs text-gray-500">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="text-center bg-blue-600 text-white py-16 px-4">
        <h1 className="text-3xl font-bold mb-4">
          Ready to Transform Your Complaint <br /> Management?
        </h1>
        <p className="mb-6 text-sm md:text-base">
          Join thousands of organizations who trust ResolveNow for efficient complaint resolution.
        </p>
       <Link to='/register'>  <button className="bg-white text-blue-600 px-6 py-3 rounded-md font-semibold hover:bg-gray-100 transition">
          Get Started Today <i className="fa-solid fa-arrow-right ml-2"></i>
        </button></Link>
      </section>
    </>
  );
};

export default ExperienceSection;
