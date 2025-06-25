import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const [stats, setStats] = useState({
    total: 0,
    pending: 0,
    inProgress: 0,
    resolved: 0,
  });

  const [username, setUsername] = useState('User');

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    if (user.name) setUsername(user.name);

    const complaints = JSON.parse(localStorage.getItem('complaints') || '[]');
    const pending = complaints.filter(c => c.status === 'Pending').length;
    const inProgress = complaints.filter(c => c.status === 'In Progress').length;
    const resolved = complaints.filter(c => c.status === 'Resolved').length;

    setStats({
      total: complaints.length,
      pending,
      inProgress,
      resolved,
    });
  }, []);

  const cards = [
    {
      title: 'Total Complaints',
      value: stats.total,
      icon: 'fa-circle-exclamation',
      color: 'bg-blue-500',
      textColor: '',
      link: '/complaints/all',
    },
    {
      title: 'Pending',
      value: stats.pending,
      icon: 'fa-clock',
      color: 'bg-yellow-200',
      textColor: 'text-yellow-500',
      link: '/complaints/pending',
    },
    {
      title: 'In Progress',
      value: stats.inProgress,
      icon: 'fa-spinner',
      color: 'bg-pink-200',
      textColor: 'text-fuchsia-600',
      link: '/complaints/in-progress',
    },
    {
      title: 'Resolved',
      value: stats.resolved,
      icon: 'fa-circle-check',
      color: 'bg-green-300',
      textColor: 'text-green-500',
      link: '/complaints/resolved',
    },
  ];

  return (
    <div className="min-h-screen bg-[#f9fafc] px-4 py-6 flex justify-center">
      <div className="w-full max-w-7xl space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">Welcome back, {username}!</h1>
          <Link to="/write" className="bg-blue-600 text-white px-4 py-2 rounded hover:shadow">
            + Submit New Complaint
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {cards.map(({ title, value, icon, color, textColor, link }) => (
            <Link to={link} key={title}>
              <div className="flex items-center justify-between p-4 bg-white rounded shadow border hover:shadow-lg transition">
                <div className="text-center">
                  <p className="text-base font-medium">{title}</p>
                  <h2 className={`text-xl font-bold ${textColor}`}>{value}</h2>
                </div>
                <div className={`w-10 h-10 flex items-center justify-center rounded-full ${color}`}>
                  <i className={`fa-solid ${icon} text-white`}></i>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
