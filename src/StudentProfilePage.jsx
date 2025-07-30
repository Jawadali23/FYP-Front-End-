import React, { useState } from "react";

// Profile SVG Icon
const ProfileIcon = () => (
  <div className="w-28 h-28 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 text-6xl">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-16 h-16">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14c3.866 0 7 1.343 7 3v2H5v-2c0-1.657 3.134-3 7-3zm0-2a5 5 0 100-10 5 5 0 000 10z" />
    </svg>
  </div>
);

const statusColors = {
  "Pending Review": "bg-yellow-100 text-yellow-800",
  "Approved": "bg-green-100 text-green-800",
  "Rejected": "bg-red-100 text-red-800"
};

const getTimelineData = (status) => [
  { label: "Application Submitted", date: "Jan 15, 2024", status: "done" },
  { label: "Document Verification", date: "Jan 20, 2024", status: "done" },
  { label: "Admin Review", date: "Jan 25, 2024", status: "error", note: "Missing required documents" },
  { label: "Resubmitted", date: "Feb 10, 2024", status: "done" },
  { label: "Admin Review", date: "Feb 15, 2024", status: "error", note: "Expired ID document" },
  { label: "Resubmitted", date: "Apr 18, 2025", status: "done" },
];

function getCurrentDateTime() {
  return new Date().toLocaleString();
}

export default function StudentProfile() {
  const [applicationStatus, setApplicationStatus] = useState("Pending Review"); // "Pending Review", "Approved", "Rejected"
  const [adminNote, setAdminNote] = useState("");
  const [submittedAdminNote, setSubmittedAdminNote] = useState(null);
  const [submittedAdminNoteTime, setSubmittedAdminNoteTime] = useState(null);

  const isApproved = applicationStatus === "Approved";
  const isRejected = applicationStatus === "Rejected";

  // Timeline with dynamic final decision
  const timelineData = getTimelineData(applicationStatus);

  // Handle Approve/Reject
  const handleDecision = (status) => {
    setApplicationStatus(status);
    setSubmittedAdminNote(adminNote);
    setSubmittedAdminNoteTime(getCurrentDateTime());
    setAdminNote("");
  };

  return (
    <div className="bg-gray-50 min-h-screen p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <button className="px-2 py-2 bg-black text-white rounded-md hover:bg-black transition-colors" 
        style={{ cursor: 'pointer' }}>&larr; Back to List</button>
        <span className={`px-4 py-1 rounded-full text-sm font-semibold ${statusColors[applicationStatus]}`}>
          {applicationStatus}
        </span>
      </div>

      {/* Main Card */}
      <div className="bg-white rounded-lg shadow p-6 flex flex-col gap-6">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row gap-8">
          {/* Profile & Info */}
          <div className="flex flex-col items-center md:items-start w-full md:w-1/3">
            <ProfileIcon />
            <div className="mt-4 text-center md:text-left">
              <div className="text-lg font-semibold">James William Anderson</div>
              <div className="text-gray-500">Date of Birth: <span className="font-medium text-gray-700">April 22, 1998</span></div>
              <div className="text-gray-500">City: <span className="font-medium text-gray-700">Hyderabad</span></div>
            </div>
            {/* Contact Info */}
            <div className="mt-6 w-full">
              <div className="font-semibold mb-2">Contact Information</div>
              <div className="text-sm text-gray-700">Email: <a href="mailto:james.anderson@email.com" className="text-blue-600">james.anderson@email.com</a></div>
              <div className="text-sm text-gray-700">Phone: +1 (555) 987-6543</div>
              <div className="text-sm text-gray-700">Address: 123 University Ave, Berkeley, CA 94704</div>
            </div>
          </div>

          {/* Timeline */}
          <div className="w-full md:w-2/3 flex flex-col md:flex-row gap-8">
            {/* Status Timeline */}
            <div className="w-full md:w-1/2">
              <div className="font-semibold mb-2">Status Timeline</div>
              <ol className="relative border-l border-gray-200">
                {timelineData.map((item, idx) => (
                  <li key={idx} className="mb-6 ml-4">
                    <div className={`absolute w-3 h-3 rounded-full -left-1.5 border-2 ${item.status === "error" ? "bg-red-500 border-red-500" : "bg-blue-500 border-blue-500"}`}></div>
                    <div className="flex flex-col">
                      <span className="font-medium">{item.label}</span>
                      <span className="text-xs text-gray-500">{item.date}</span>
                      {item.note && <span className="text-xs text-red-500">{item.note}</span>}
                    </div>
                  </li>
                ))}
                {/* Final Decision */}
                <li className="ml-4">
                  <div className={`absolute w-3 h-3 rounded-full -left-1.5 border-2 ${
                    isApproved
                      ? "bg-green-500 border-green-500"
                      : isRejected
                      ? "bg-red-500 border-red-500"
                      : "bg-gray-400 border-gray-400"
                  }`}></div>
                  <div className="flex flex-col">
                    <span className="font-medium">Final Decision</span>
                    <span className={`text-xs ${
                      isApproved
                        ? "text-green-600"
                        : isRejected
                        ? "text-red-600"
                        : "text-gray-500"
                    }`}>
                      {isApproved ? "Approved" : isRejected ? "Rejected" : "Pending"}
                    </span>
                  </div>
                </li>
              </ol>
            </div>
          </div>
        </div>

        {/* Admin Notes */}
        <div className="bg-gray-50 rounded-lg p-4 mt-4">
          <div className="font-semibold mb-2">Admin Notes</div>
          <div className="mb-2">
            <div className="bg-white border rounded p-2 text-sm text-gray-700 mb-2">
              <span className="font-medium">Student Message:</span> I have now uploaded my new valid ID which expires in 2026. Please review the updated document.
              <div className="text-xs text-gray-400 mt-1">Submitted on Apr 18, 2025</div>
            </div>
            {submittedAdminNote && (
              <div className="bg-white border rounded p-2 text-sm text-gray-700 mb-2">
                <span className="font-medium">Admin Note:</span> {submittedAdminNote}
                <div className="text-xs text-gray-400 mt-1">Submitted on {submittedAdminNoteTime}</div>
              </div>
            )}
          </div>
          <textarea
            className="w-full border rounded p-2 mb-2"
            placeholder="Add your notes here..."
            value={adminNote}
            onChange={e => setAdminNote(e.target.value)}
            disabled={isApproved || isRejected}
          />
          <div className="flex gap-2 justify-end">
            <button
              className="bg-green-500 text-white px-4 py-2 rounded disabled:opacity-50"
              style={{ cursor: 'pointer' }}
              disabled={isApproved || isRejected}
              onClick={() => handleDecision("Approved")}
            >
              Approve
            </button>
            <button
              className="bg-red-500 text-white px-4 py-2 rounded disabled:opacity-50"
              style={{ cursor: 'pointer' }}
              disabled={isApproved || isRejected}
              onClick={() => handleDecision("Rejected")}
            >
              Reject
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}