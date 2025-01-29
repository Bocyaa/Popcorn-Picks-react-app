import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// import './index.css'
// import App from './App.jsx'

import StarRating from './StarRating ';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <StarRating
      maxRating={5}
      messages={['Terrible', 'Bad', 'Okay', 'Good', 'Amazing']}
    />
    <StarRating maxRating={5} color='red' size={24} defaultRating={3} />
  </StrictMode>
);
