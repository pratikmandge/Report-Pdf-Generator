import React, { useState } from 'react';
import Header from '../components/Header';
import Box from '../components/Box';
import Footer from '../components/Footer';
import './Page.css';

const Page = () => {
  const componentsToRender = Array(3).fill();
  const [showContent, setShowContent] = useState(false);

  const handlePrintClick = () => {
    setShowContent(true);
    setTimeout(() => {
    window.print();
    }, 3000);
  };

  return (
    <div className="page-container">
      {!showContent && (
        <div className="centered-button">
          <button className="print-button" onClick={handlePrintClick}>
          &#xe045; Print
          </button>
        </div>
      )}
      {showContent && (
        <div className="content">
          <Header />
          {componentsToRender.map((_, index) => (
            <Box key={index} id={false} />
          ))}
          <Box id={true} />
          <Footer />
        </div>
      )}
    </div>
  );
};

export default Page;
