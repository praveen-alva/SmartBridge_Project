import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Dashboard from './Dashboard';
const WriteComplaint = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user') || '{}');

  const [formData, setFormData] = useState({
    title: '',
    category: '',
    priority: 'Medium',
    description: '',
    location: '',
    attachments: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      ...formData,
      name: user.name,
      email: user.email,
      attachment: formData.attachments?.name || '',
    };

    try {
      const res = await fetch('http://localhost:5000/api/complaints/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      const complaint = data.complaint;

      await fetch('http://localhost:5000/api/send-feedback-mail', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: user.email,
          name: user.name,
          complaintTitle: formData.title,
          complaintId: complaint._id,
        }),
      });

      const local = JSON.parse(localStorage.getItem('complaints') || '[]');
      localStorage.setItem('complaints', JSON.stringify([...local, { ...complaint, id: complaint._id }]));

      navigate(`/complaint/${complaint._id}`);
    } catch (err) {
      console.error('❌ Submission failed:', err);
    }
  };

  return (
          <><div className="min-h-screen bg-[#f9fafc] flex items-center justify-center p-6">
          <div className="w-full max-w-2xl bg-white p-6 rounded shadow space-y-6">
            <div className="text-center">
              <h1 className="text-2xl font-semibold">Submit a New Complaint</h1>
              <p className="text-gray-500 text-sm">Provide detailed information to help us resolve it quickly.</p>
            </div>
    
            <form onSubmit={handleSubmit} className="space-y-6">
              <input
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="Complaint Title"
                className="w-full border rounded px-3 py-2 text-sm"
                required
              />
    
              <div className="flex flex-col sm:flex-row gap-4">
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  className="w-full border rounded px-3 py-2 text-sm"
                  required
                >
                  <option value="" disabled>Select Category</option>
                  <option value="">Cyber Crime</option>
                  <option value="Financial Fraud">Financial Fraud</option>
                  <option value="consume">Consumer Complaints</option>
                  <option value="issue">Civic Issues</option>
                  <option value="Other">Other</option>
                </select>
    
                <select
                  name="priority"
                  value={formData.priority}
                  onChange={handleChange}
                  className="w-full border rounded px-3 py-2 text-sm"
                  required
                >
                  <option value="p" disabled>Priority</option>
                  <option value="Medium">Medium</option>
                  <option value="High">High</option>
                  <option value="Low">Low</option>
                </select>
              </div>
    
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Description"
                className="w-full h-32 border rounded px-3 py-2 text-sm"
                required
              />
    
              <input
                name="location"
                value={formData.location}
                onChange={handleChange}
                placeholder="Location (Optional)"
                className="w-full border rounded px-3 py-2 text-sm"
              />
    
              <div className="border-2 border-dashed border-gray-300 rounded py-6 text-center">
                <p className="text-sm text-gray-500">Upload Attachments (Optional)</p>
                <input type="file" name="" onChange={handleChange} className="mt-2" />
              </div>
    
              <div className="flex justify-between gap-4">
                <button type="reset" className="w-1/2 py-2 border rounded bg-gray-100">Cancel</button>
                <button type="submit" className="w-1/2 py-2 bg-blue-600 text-white rounded">Submit</button>
              </div>
    
              <div className="text-right">
                <Link to="/dashboard" className="text-blue-600 hover:underline text-sm">← Back to Dashboard</Link>
              </div>
            </form>
          </div>
        </div>
      
        </>
  );
};

export default WriteComplaint;
