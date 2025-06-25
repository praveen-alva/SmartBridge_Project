import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

const ComplaintListByStatus = () => {
  const { status } = useParams();
  const [filteredComplaints, setFilteredComplaints] = useState([]);

  useEffect(() => {
    filterComplaints();
  }, [status]);

  const filterComplaints = () => {
    const complaints = JSON.parse(localStorage.getItem('complaints') || '[]');
    const filtered =
      status === 'all'
        ? complaints
        : complaints.filter(c => c.status.toLowerCase() === status.toLowerCase());
    setFilteredComplaints(filtered);
  };

  const handleDelete = (id) => {
    const complaints = JSON.parse(localStorage.getItem('complaints') || '[]');
    const updated = complaints.filter(c => c.id !== id && c._id !== id);
    localStorage.setItem('complaints', JSON.stringify(updated));
    filterComplaints();
  };

  return (
    <div className="min-h-screen bg-[#f9fafc] px-4 py-6 flex flex-col items-center gap-6">
      <div className="max-w-4xl w-full bg-white rounded shadow p-6 space-y-4">
        <h1 className="text-2xl font-bold capitalize">{status} Complaints</h1>
        {filteredComplaints.length === 0 ? (
          <p className="text-gray-500">No complaints found for "{status}".</p>
        ) : (
          <ul className="space-y-4">
            {filteredComplaints.map(c => (
              <li
                key={c.id || c._id}
                className="border rounded p-4 flex flex-col gap-2 hover:shadow"
              >
                <div className="flex justify-between items-center">
                  <div>
                    <h2 className="text-lg font-semibold">{c.title}</h2>
                    <p className="text-sm text-gray-600">
                      {c.description.slice(0, 100)}...
                    </p>
                    <p className="text-sm mt-1 text-gray-500">
                      Status: <b>{c.status}</b>
                    </p>
                  </div>
                  <Link
                    to={`/complaint/${c.id || c._id}`}
                    className="text-blue-600 hover:underline"
                  >
                    View Details →
                  </Link>
                </div>

                <button
                  onClick={() => handleDelete(c.id || c._id)}
                  className="text-red-600 text-sm self-end hover:underline"
                >
                  🗑 Delete
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>

      <Link to="/dashboard" className="text-blue-600 hover:underline text-sm">
        ← Back to Dashboard
      </Link>
    </div>
  );
};

export default ComplaintListByStatus;
