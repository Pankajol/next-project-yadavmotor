// components/Footer.tsx
function  Footer () {
    return (
      <footer className="bg-black text-gray-400 py-12 ">
        <div className="max-w-6xl mx-auto grid grid-col-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 sm:px-6 lg:px-8">
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">About Us</h2>
          <p className="mb-4">
          We repair all vehicles related to gear engine new body clutch plate pressure plate and new clutch plate is also available.
          </p>
        </div>
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Quick Links</h2>
          <ul>
            <li>
              <a
                href="/"
                className="hover:text-white transition-colors duration-300"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/about"
                className="hover:text-white transition-colors duration-300"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="services"
                className="hover:text-white transition-colors duration-300"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="contact"
                className="hover:text-white transition-colors duration-300"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Follow Us</h2>
          <div className="flex space-x-4">
            <a
              href="#"
              className="hover:text-white transition-colors duration-300"
            >
              Facebook
            </a>
            <a
              href="#"
              className="hover:text-white transition-colors duration-300"
            >
              Twitter
            </a>
            <a
              href="#"
              className="hover:text-white transition-colors duration-300"
            >
              Instagram
            </a>
          </div>
        </div>
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Contact Us</h2>
          <p>Bhiwandi Vadpa Police Chowki Thapsi pada Mumbai Nashik Highway Near Indian Petrol pump (Gaurav Pump) Bhiwandi</p>
          <p>Maharastra 000000</p>
          <p>yadavbramhadev7@gmail.com</p>
          <p>Phone: (+91) 9821310750</p>
        </div>
        </div>
        <p className="text-center text-xs pt-8">© 2024 Pankajal. All rights reserved.</p>
      
      </footer>
    );
  };
  
  export default Footer;
  