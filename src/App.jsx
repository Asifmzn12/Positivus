import { useState, useEffect } from 'react';
import { inject } from '@vercel/analytics';

import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import { ColorRing } from 'react-loader-spinner'
import Header from './Components/Header';
import Index from './Index';
import Footer from './Components/Footer';

function App() {
  inject();

  const [loading, setLoading] = useState(true);

  useEffect(() => {


    // Simulate an API call or other asynchronous tasks
    setTimeout(() => {
      setLoading(false); // Set loading to false after tasks are completed
    }, 100); // Simulated 2 seconds delay, adjust as needed
  }, []);

  return (
    <Router>
      {loading ? (
        <div className="loader-container">
          <ColorRing visible={true}
            height="80"
            width="80"
            ariaLabel="color-ring-loading"
            wrapperStyle={{}}
            wrapperClass="color-ring-wrapper" colors={['#11772f', '#11772f', '#11772f', '#11772f', '#11772f']}
          />
          <h4 className="fw-bold">Thank you for visiting my portfolio</h4>
        </div>
      ) : (
        <div>
          <Header />

          <Routes>
            <Route path="/" element={<Outlet />}>
              <Route index element={<Index />} />
              
            </Route>
          </Routes>
          <Footer />
        </div>
      )}
    </Router>
  );
}

export default App;
