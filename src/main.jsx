import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css' // ✅ Tailwind is imported here
// import ApplicationStatus from './ApplicationStatus.jsx'
// import LoginForm from './LoginForm.jsx'
import StudentProfilePage from './StudentProfilePage'
// import SignUpPage from './SignUpPage'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <StudentProfilePage/>
    {/* <App /> */}
    {/* <ApplicationStatus/> */}
    {/* <LoginForm/> */}
    {/* <SignUpPage/> */}
  </React.StrictMode>
)
