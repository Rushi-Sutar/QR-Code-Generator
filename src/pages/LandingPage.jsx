import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      {/* Hero Section */}
      <section className="flex items-center justify-center md:h-screen h-[50vh]">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to Code Craft</h1>
          <p className="text-lg md:text-xl mb-8 mx-auto md:w-3/4">Generate custom QR codes effortlessly for your business, event, or personal use. Empower your marketing and communication strategies with the simplicity of QR codes.</p>
          <Link className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2" to={'/home'}>Get Started Now</Link>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-16 px-8 md:px-16 bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-white">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Feature 1 */}
            <div className="flex flex-col items-center justify-center bg-blue-700 p-8 rounded-lg">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mb-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M2 4a2 2 0 012-2h2v2H4v12h12V8h2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V4zm6 10a1 1 0 100-2 1 1 0 000 2zm3-8a1 1 0 100-2 1 1 0 000 2zm2 10a1 1 0 11-2 0 1 1 0 012 0z" clipRule="evenodd" />
              </svg>
              <h3 className="text-2xl font-semibold mb-4">Easy to Use</h3>
              <p className="text-lg text-center text-white">Our QR Code Generator is user-friendly and intuitive, making it accessible for users of all skill levels.</p>
            </div>

            {/* Feature 2 */}
            <div className="flex flex-col items-center justify-center bg-green-700 p-8 rounded-lg">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mb-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M2 3a1 1 0 011-1h14a1 1 0 110 2H3a1 1 0 01-1-1zM2 7a1 1 0 011-1h2a1 1 0 110 2H3a1 1 0 01-1-1zM2 11a1 1 0 011-1h2a1 1 0 110 2H3a1 1 0 01-1-1zM2 15a1 1 0 011-1h2a1 1 0 110 2H3a1 1 0 01-1-1zM6 7a1 1 0 100 2h11a1 1 0 100-2H6zm0 4a1 1 0 100 2h11a1 1 0 100-2H6z" clipRule="evenodd" />
              </svg>
              <h3 className="text-2xl font-semibold mb-4">Customization Options</h3>
              <p className="text-lg text-center text-white">Customize your QR codes with different colors, shapes, and logo integration to match your branding and style.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-8 md:px-16 bg-gray-900">
  <div className="max-w-7xl mx-auto">
    <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-white">How It Works</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
      {/* Step 1 */}
      <div className="bg-gray-800 rounded-lg shadow-md p-6">
        <div className="flex items-center mb-4">
          <div className="bg-blue-400 h-12 w-12 rounded-full flex items-center justify-center">
            <span className="text-white font-semibold text-lg">1</span>
          </div>
          <h3 className="text-lg md:text-xl font-semibold ml-4 text-white">Input Your Content</h3>
        </div>
        <p className="text-base md:text-lg text-gray-300">Simply enter the content you want to encode into the QR code, such as a website URL, text message, or contact information.</p>
      </div>

      {/* Step 2 */}
      <div className="bg-gray-800 rounded-lg shadow-md p-6">
        <div className="flex items-center mb-4">
          <div className="bg-green-400 h-12 w-12 rounded-full flex items-center justify-center">
            <span className="text-white font-semibold text-lg">2</span>
          </div>
          <h3 className="text-lg md:text-xl font-semibold ml-4 text-white">Customize (Optional)</h3>
        </div>
        <p className="text-base md:text-lg text-gray-300">Customize your QR code with different colors, shapes, and logo integration to make it unique and visually appealing.</p>
      </div>

      {/* Step 3 */}
      <div className="bg-gray-800 rounded-lg shadow-md p-6">
        <div className="flex items-center mb-4">
          <div className="bg-yellow-400 h-12 w-12 rounded-full flex items-center justify-center">
            <span className="text-white font-semibold text-lg">3</span>
          </div>
          <h3 className="text-lg md:text-xl font-semibold ml-4 text-white">Generate</h3>
        </div>
        <p className="text-base md:text-lg text-gray-300">Click the "Generate" button to create your custom QR code.</p>
      </div>

      {/* Step 4 */}
      <div className="bg-gray-800 rounded-lg shadow-md p-6">
        <div className="flex items-center mb-4">
          <div className="bg-red-400 h-12 w-12 rounded-full flex items-center justify-center">
            <span className="text-white font-semibold text-lg">4</span>
          </div>
          <h3 className="text-lg md:text-xl font-semibold ml-4 text-white">Download</h3>
        </div>
        <p className="text-base md:text-lg text-gray-300">Download the generated QR code image and start using it in your marketing materials, on product packaging, business cards, flyers, and more.</p>
      </div>
    </div>
  </div>
</section>


      {/* Get Started Section */}
      <section className="py-16 px-8 md:px-16 bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Get Started Today</h2>
            <p className="text-lg text-white mb-8">Ready to create your own custom QR codes? Start using our QR Code Generator now and unlock the power of QR codes for your business or personal use. It's fast, easy, and completely free!</p>
            <Link className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2" to={'/home'}>Get Started Now</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
