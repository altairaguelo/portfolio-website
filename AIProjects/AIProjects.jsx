import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from '/src/App.jsx'
import AIapp from '/AIProjects/AIapp.jsx'
import '/src/styles/tailwind.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* add stuff here to make page, or do thing like in app.jsx where I make a section hold components */}
    <AIapp />
  </React.StrictMode>
);
