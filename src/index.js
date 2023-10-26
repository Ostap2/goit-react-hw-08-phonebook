import React from 'react';
import ReactDOM from 'react-dom/client';
import App from 'components/App';
import './index.css';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { store, persistor } from './redux/store';
ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
);








// import React, { useState, useEffect } from 'react';
// import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
// import Login from './Profile/Login';
// import Register from './Profile/Register';
// import UserMenu from './Profile/UserMenu';
// import axios from 'axios';

// const App = () => {
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     const token = localStorage.getItem('token');
//     if (token) {
//       axios
//         .get('https://your-backend-url/check-token', {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         })
//         .then((response) => {
//           const { email } = response.data;
//           setUser({ email });
//         })
//         .catch((error) => {
//           console.error('Token validation failed', error);
//           localStorage.removeItem('token');
//         });
//     }
//   }, []);

//   return (
//     <Router>
//       <div>
//         <nav>
//           <ul>
//             <li>
//               <Link to="/login">Login</Link>
//             </li>
//             <li>
//               <Link to="/register">Register</Link>
//             </li>
//             <li>
//               <Link to="/profile">Profile</Link>
//             </li>
//           </ul>
//         </nav>
//         <Routes>
//           <Route path="/login" element={user ? <UserMenu user={user} /> : <Login />} />
//           <Route path="/register" element={user ? <UserMenu user={user} /> : <Register />} />
//           <Route
//             path="/profile"
//             element={
//               user ? (
//                 <div>
//                   <h2>User Profile</h2>
//                   <UserMenu user={user} />
//                 </div>
//               ) : (
//                 <Login />
//               )
//             }
//           />
//         </Routes>
//       </div>
//     </Router>
//   );
// };

// export default App;
