import React, { useState } from 'react';

export default function LoginForm() {
  const [isStudentLogin, setIsStudentLogin] = useState(true);
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    rememberMe: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`${isStudentLogin ? 'Student' : 'Driver'} login successful!`);
    console.log(formData);
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      {/* Login Type Toggle */}
      <div className="flex mb-6 border-b">
        <button
          className={`flex-1 py-2 font-medium ${isStudentLogin ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500'}`}
          onClick={() => setIsStudentLogin(true)}
        >
          Student Login
        </button>
        <button
          className={`flex-1 py-2 font-medium ${!isStudentLogin ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500'}`}
          onClick={() => setIsStudentLogin(false)}
        >
          Driver Login
        </button>
      </div>

      {/* Centered Form Header */}
      <div className="text-center">
        <h2 className="text-xl font-bold mb-2">
          {isStudentLogin ? 'Student Login' : 'Driver Login'}
        </h2>
        <p className="text-gray-600 mb-6">
          {isStudentLogin 
            ? 'Access real-time bus tracking information' 
            : 'Start tracking your bus location'}
        </p>
      </div>

      {/* Login Form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Username</label>
          
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            placeholder="Enter your username"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter your password"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <input
              type="checkbox"
              id="rememberMe"
              name="rememberMe"
              checked={formData.rememberMe}
              onChange={handleChange}
              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
            />
            <label htmlFor="rememberMe" className="ml-2 block text-sm text-gray-700">
              Remember me
            </label>
          </div>
          <a href="#" className="text-sm text-blue-600 hover:text-blue-500">
            Forgot password?
          </a>
        </div>

        <button
          type="submit"
          className="w-full py-2 px-4 bg-black text-white font-medium rounded-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-500"
        >
          Login as {isStudentLogin ? 'Student' : 'Driver'}
        </button>
      </form>
    </div>
  );
}