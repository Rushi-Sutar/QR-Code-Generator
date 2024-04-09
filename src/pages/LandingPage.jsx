import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css'
const LandingPage = () => {
  return (
    <div className="background bg-[#0E132F] text-white min-h-screen">
      {/* Hero Section */}
      
      <section className="flex items-center justify-center md:h-screen h-[50vh]">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-b from-white to-gray-500 text-transparent bg-clip-text">Code Craft</h1>
          <p className="text-lg font-normal md:text-2xl mb-8 mx-auto md:w-1/2 md:leading-relaxed text-center text-[#AEAEAE]">Generate custom QR codes effortlessly for your business, event, or personal use. Empower your marketing and communication strategies with the simplicity of QR codes.</p>
          <Link className="bg-[#5802C6] my-6 text-white font-bold py-3 px-10 rounded-full" to={'/home'}>Create</Link>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="px-8 md:px-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-b from-white to-gray-500 text-transparent bg-clip-text">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:w-full mx-auto">
            {/* Feature 1 */}
            <div className="flex flex-col items-start justify-center bg-[#171C38] p-8 shadow-lg ">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mb-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M2 4a2 2 0 012-2h2v2H4v12h12V8h2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V4zm6 10a1 1 0 100-2 1 1 0 000 2zm3-8a1 1 0 100-2 1 1 0 000 2zm2 10a1 1 0 11-2 0 1 1 0 012 0z" clipRule="evenodd" />
              </svg>
              <h3 className="text-2xl font-bold mb-4">Easy to Use</h3>
              <p className="text-base text-left text-[#AEAEAE] font-semibold">Our QR Code Generator is user-friendly and intuitive, making it accessible for users of all skill levels.</p>
            </div>

            {/* Feature 2 */}
            <div className="flex flex-col items-start justify-center bg-[#171C38] p-8 shadow-lg">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mb-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M2 3a1 1 0 011-1h14a1 1 0 110 2H3a1 1 0 01-1-1zM2 7a1 1 0 011-1h2a1 1 0 110 2H3a1 1 0 01-1-1zM2 11a1 1 0 011-1h2a1 1 0 110 2H3a1 1 0 01-1-1zM2 15a1 1 0 011-1h2a1 1 0 110 2H3a1 1 0 01-1-1zM6 7a1 1 0 100 2h11a1 1 0 100-2H6zm0 4a1 1 0 100 2h11a1 1 0 100-2H6z" clipRule="evenodd" />
              </svg>
              <h3 className="text-2xl font-bold mb-4">Customization Options</h3>
              <p className="text-base text-left text-[#AEAEAE] font-semibold">Customize your QR codes with different colors, shapes, and logo integration to match your branding and style.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-8 md:px-16">
  <div className="max-w-7xl mx-auto">
    <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-b from-white to-gray-500 text-transparent bg-clip-text">How It Works</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
      {/* Step 1 */}
      <div className="bg-[#171C38] shadow-lg p-6">
        <div className="flex items-center">
          <div className="bg-[#1A6EEB] h-12 w-12 rounded-full flex items-center justify-center">
            <span className="text-white font-semibold text-lg">1</span>
          </div>
          <h3 className="text-lg md:text-xl font-semibold ml-4 text-white">Input Your Content</h3>
        </div>
        <p className="text-base md:text-lg text-gray-300 ml-16">Simply enter the content you want to encode into the QR code, such as a website URL, text message, or contact information.</p>
      </div>

      {/* Step 2 */}
      <div className="bg-[#171C38] shadow-lg p-6">
        <div className="flex items-center">
          <div className="bg-[#1A6EEB] h-12 w-12 rounded-full flex items-center justify-center">
            <span className="text-white font-semibold text-lg">2</span>
          </div>
          <h3 className="text-lg md:text-xl font-semibold ml-4 text-white">Customize (Optional)</h3>
        </div>
        <p className="text-base md:text-lg text-gray-300 ml-16">Customize your QR code with different colors, shapes, and logo integration to make it unique and visually appealing.</p>
      </div>

      {/* Step 3 */}
      <div className="bg-[#171C38] shadow-lg p-6">
        <div className="flex items-center">
          <div className="bg-[#1A6EEB] h-12 w-12 rounded-full flex items-center justify-center">
            <span className="text-white font-semibold text-lg">3</span>
          </div>
          <h3 className="text-lg md:text-xl font-semibold ml-4 text-white">Generate</h3>
        </div>
        <p className="text-base md:text-lg text-gray-300 ml-16">Click the "Generate" button to create your custom QR code.</p>
      </div>

      {/* Step 4 */}
      <div className="bg-[#171C38] shadow-lg p-6">
        <div className="flex items-center">
          <div className="bg-[#1A6EEB] h-12 w-12 rounded-full flex items-center justify-center">
            <span className="text-white font-semibold text-lg">4</span>
          </div>
          <h3 className="text-lg md:text-xl font-semibold ml-4 text-white">Download</h3>
        </div>
        <p className="text-base md:text-lg text-gray-300 ml-16">Download the generated QR code image and start using it in your marketing materials, on product packaging, business cards,and more.</p>
      </div>
    </div>
  </div>
</section>
    </div>
  );
};

export default LandingPage;
