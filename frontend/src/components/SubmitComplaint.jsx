import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

const BASE_URL = 'https://smartbridge-project-gvzr.onrender.com';

const ComplaintDetails = () => {
  const { id } = useParams();
  const [complaint, setComplaint] = useState(null);
  const [messages, setMessages] = useState([]);
  const [messageText, setMessageText] = useState('');

  useEffect(() => {
    const fetchComplaint = async () => {
      try {
        const res = await fetch(`${BASE_URL}/api/complaints/${id}`);
        const data = await res.json();
        if (res.ok) setComplaint(data);
        else setComplaint(null);
      } catch (err) {
        console.error('❌ Fetch error:', err);
        setComplaint(null);
      }
    };

    fetchComplaint();
  }, [id]);

  const handleSendMessage = () => {
    if (!messageText.trim()) return;
    const now = new Date();
    const message = {
      sender: 'You',
      text: messageText.trim(),
      date: now.toLocaleDateString(),
      time: now.toLocaleTimeString(),
    };
    setMessages((prev) => [...prev, message]);
    setMessageText('');
  };

  if (!complaint) {
    return (
      <div className="text-center mt-10 text-red-500">
        Complaint not found
        <div>
          <Link to="/dashboard" className="text-blue-500 underline mt-4 block">← Back to Dashboard</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full bg-[#f9fafc] px-4 py-6 flex flex-col gap-6 items-center">
      <div className="w-[90%] flex flex-col lg:flex-row gap-4">
        <div className="w-full lg:w-[75%] bg-white p-6 rounded shadow border space-y-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div className="flex flex-col gap-2">
              <h1 className="text-xl font-bold">{complaint.name}</h1>
              <h1 className="text-xl font-bold">{complaint.title}</h1>
              <div className="flex gap-2">
                <p className="bg-yellow-100 text-red-800 px-3 py-1 rounded">{complaint.status}</p>
                <p className="bg-yellow-100 text-red-800 px-3 py-1 rounded">{complaint.priority} Priority</p>
              </div>
            </div>
            <div className="text-right text-gray-600">
              <p>Complaint #{complaint._id}</p>
              <p>Created {complaint.date}</p>
            </div>
          </div>

          <div className="flex gap-6 flex-wrap text-sm text-gray-700">
            <p>{complaint.name}</p>
            <p>Category: {complaint.category}</p>
            <p>{complaint.location}</p>
          </div>

          <div>
            <h4 className="font-semibold mb-1">Description</h4>
            <p className="text-gray-700">{complaint.description}</p>
          </div>

          <div>
            <h4 className="font-semibold mb-1">Attachments</h4>
            <div className="flex justify-between items-center px-4 py-2 bg-[#f9fafc] rounded border">
              <p>{complaint.attachment || 'None'}</p>
              {complaint.attachment && (
                <i className="fa-solid fa-download text-blue-600 cursor-pointer"></i>
              )}
            </div>
          </div>
        </div>

        <div className="w-full lg:w-[25%] flex flex-col gap-4">
          <div className="bg-white p-4 rounded shadow border">
            <h4 className="font-semibold mb-3">Timeline</h4>
            <ul className="space-y-2 text-sm">
              <li>Complaint Submitted</li>
              <p className="text-gray-600 ml-2">{complaint.createdAt}</p>
            </ul>
          </div>
          <div className="bg-white p-4 rounded shadow border">
            <h4 className="font-semibold mb-3">Quick Actions</h4>
            <ul className="text-sm space-y-2 text-blue-600 cursor-pointer">
              <li>Share complaint</li>
              <li>Download Report</li>
              <li>Print Details</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="w-[90%] bg-white p-6 rounded shadow border">
        <h4 className="font-semibold mb-4">Progress Tracker</h4>
        <ol className="space-y-4">
          <li className="flex items-center gap-4">
            <div className="w-8 h-8 rounded-full bg-green-600 text-white grid place-items-center">
              <i className="fa-regular fa-circle-check"></i>
            </div>
            <p className="font-medium">Pending</p>
            <div className="flex-grow h-1 bg-green-600 rounded ml-4"></div>
          </li>
          <li className="flex items-center gap-4">
            <div className="w-8 h-8 rounded-full border grid place-items-center">2</div>
            <p className="font-medium">Assigned</p>
            <div className="flex-grow h-1 bg-gray-200 rounded ml-4"></div>
          </li>
          <li className="flex items-center gap-4">
            <div className="w-8 h-8 rounded-full border grid place-items-center">3</div>
            <p className="font-medium">In Progress</p>
            <div className="flex-grow h-1 bg-gray-200 rounded ml-4"></div>
          </li>
          <li className="flex items-center gap-4">
            <div className="w-8 h-8 rounded-full border grid place-items-center">4</div>
            <p className="font-medium">Resolved</p>
            <div className="flex-grow h-1 bg-gray-200 rounded ml-4"></div>
          </li>
        </ol>
      </div>

      <div className="w-[90%] bg-white rounded shadow border">
        <h4 className="font-semibold px-6 pt-4">Message</h4>
        <hr />
        <div className="max-h-64 overflow-y-auto p-4 space-y-3">
          {messages.length === 0 ? (
            <div className="text-center text-gray-500">
              <i className="fa-regular fa-comment text-2xl mb-2"></i>
              <p>No message yet. Start a conversation!</p>
            </div>
          ) : (
            messages.map((msg, i) => (
              <div key={i} className="text-sm">
                <div className="font-semibold">{msg.sender}</div>
                <div className="text-gray-800">{msg.text}</div>
                <div className="text-gray-500 text-xs">{msg.date} at {msg.time}</div>
              </div>
            ))
          )}
        </div>

        <div className="flex items-center gap-2 px-6 pb-6 mt-4">
          <input
            type="text"
            placeholder="Type your message"
            value={messageText}
            onChange={(e) => setMessageText(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
          <button
            onClick={handleSendMessage}
            className="bg-blue-600 text-white px-4 py-2 rounded"
          >
            <i className="fa-regular fa-paper-plane"></i> Send
          </button>
        </div>
      </div>

      <div className="w-[90%] text-left text-blue-600">
        <Link to="/dashboard" className="text-blue-600 text-sm mt-4 inline-block">← Back to Dashboard</Link>
      </div>
    </div>
  );
};

export default ComplaintDetails;
