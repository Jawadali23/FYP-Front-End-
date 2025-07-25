import { useState } from 'react';

const ApplicationStatus = () => {
  const [isDenied, setIsDenied] = useState(true);
  const [idCardUrl, setIdCardUrl] = useState('');

  const handleResubmit = (e) => {
    e.preventDefault();
    // Here you would typically handle form submission to your backend
    console.log('Resubmitting with URL:', idCardUrl);
    // For demo purposes, we'll just toggle back to denied status
    setIsDenied(true);
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      {isDenied ? (
        // Denied Status Component
        <div className="space-y-4">
          <h1 className="text-2xl font-bold text-gray-800">Application Status</h1>
          <div className="p-4 bg-red-50 rounded-lg border border-red-200">
            <h2 className="text-xl font-semibold text-red-600">Denied</h2>
            <div className="mt-2">
              <h3 className="font-medium text-gray-700">Student Application</h3>
              <p className="text-gray-600">
                Your application for accessing real-time bus tracking information has been denied.
              </p>
            </div>
            <div className="mt-4">
              <h3 className="font-medium text-gray-700">Reason for Denial</h3>
              <p className="text-gray-600">The identity card provided is invalid.</p>
            </div>
          </div>
          <button
            onClick={() => setIsDenied(false)}
            className="w-full py-2 px-4 bg-black hover:bg-black-700 text-white font-medium rounded-md transition duration-200"
          >
            Resubmit Application
          </button>
        </div>
      ) : (
        // Resubmit Form Component
        <div className="space-y-4">
          <h1 className="text-2xl font-bold text-gray-800">Resubmit Application</h1>
          <p className="text-gray-600">
            Please provide the information requested below to resubmit your application.
          </p>
          <form onSubmit={handleResubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-1">
                Identity Card
              </label>
              <p className="text-sm text-gray-500 mb-2">Enter URL of your identity card</p>
              <input
                type="url"
                value={idCardUrl}
                onChange={(e) => setIdCardUrl(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                placeholder="https://example.com/id-card.jpg"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-black hover:bg-black-700 text-white font-medium rounded-md transition duration-200"
            >
              Submit Application
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default ApplicationStatus;