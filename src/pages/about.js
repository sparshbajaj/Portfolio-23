import React, { useState } from 'react';
import download from '../images/download.svg';
import ReactAnimatedCursor from 'react-animated-cursor';
import sparsh from '../images/sparsh_image.jpg';
import ReactTypingEffect from 'react-typing-effect';
import resume from '../resume/Sparsh_CV.pdf';
import Weather from '../components/Weather';
import Temperature from '../components/Temperature';
import Lighthouse from '../images/Lighthouse.jpeg';
import Trek from '../images/Trek.jpeg';

const About = () => {
  const [customCursorEnabled, setCustomCursorEnabled] = useState(true);
  const iconUrl = Weather();

  return (
    <div>
      {/* Updated Cursor Styles */}
      {customCursorEnabled && (
        <ReactAnimatedCursor
          innerSize={8}
          outerSize={32}
          color="143, 220, 194" // Accent color #8fdcc2 RGB
          outerAlpha={0.3}
          innerScale={0.7}
          outerScale={1.5}
          trailingSpeed={8}
          clickables={[
            'a', 'input[type="text"]', 'input[type="email"]', 'input[type="number"]',
            'input[type="submit"]', 'input[type="image"]', 'label[for]', 'select',
            'textarea', 'button', '.link'
          ]}
        />
      )}

      {/* Main Content Container */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 sm:py-24">
        {/* Who Am I Section */}
        <section className="text-center mb-16">
          <h1 className="font-bold">
            $who
            <ReactTypingEffect
              text={["ami?"]}
              speed={150}
              eraseDelay={3000}
              typingDelay={1000}
              cursor="_"
            />
          </h1>
        </section>

        {/* Image and Description Section */}
        <section className="mb-16">
          <div className="md:grid md:grid-cols-2 gap-8 items-center">
            <div className="mb-8 md:mb-0">
              <img
                className="rounded-xl object-cover w-full h-96 md:h-auto" // Tailwind classes
                src={sparsh}
                alt="description"
              />
              <a
                href="https://uibreakfast.com/"
                className="flex items-center justify-center mt-4 py-3 px-6 rounded-full bg-gray-800 bg-opacity-20 hover:bg-opacity-40 transition-colors duration-200" // Tailwind classes
              >
                <svg className="h-8 w-8 fill-current text-green-200" viewBox="0 0 41 40">
                  <path d="M20.5013 0.0664062C9.48964 0.0664062 0.5625 8.99331 0.5625 20.005C0.5625 31.0171 9.48964 39.9433 20.5013 39.9433C31.5142 39.9433 40.4404 31.0171 40.4404 20.005C40.4404 8.99403 31.5142 0.0673586 20.5011 0.0673586L20.5013 0.0664062V0.0664062ZM29.6451 28.8236C29.56 28.963 29.4483 29.0842 29.3163 29.1804C29.1843 29.2766 29.0346 29.3458 28.8758 29.3841C28.717 29.4223 28.5522 29.4289 28.3909 29.4034C28.2296 29.3779 28.0748 29.3208 27.9356 29.2355C23.2542 26.3759 17.3608 25.7283 10.4204 27.314C10.099 27.3871 9.76174 27.3296 9.48275 27.1541C9.20375 26.9787 9.00584 26.6996 8.9325 26.3783C8.89597 26.2192 8.89119 26.0545 8.91842 25.8935C8.94565 25.7326 9.00436 25.5786 9.09118 25.4404C9.17801 25.3021 9.29126 25.1824 9.42443 25.088C9.5576 24.9936 9.70808 24.9264 9.86726 24.8902C17.4625 23.1543 23.9775 23.9021 29.2332 27.114C29.8189 27.4736 30.0046 28.2378 29.6451 28.8236V28.8236ZM32.0856 23.3938C31.6356 24.1259 30.6785 24.3569 29.9475 23.9069C24.588 20.6119 16.4182 19.6578 10.0789 21.5821C9.25679 21.8305 8.38845 21.3671 8.13893 20.5464C8.01986 20.1518 8.06213 19.7262 8.25647 19.3627C8.4508 18.9993 8.78134 18.7277 9.1756 18.6076C16.4168 16.4105 25.4189 17.4747 31.5737 21.2569C32.3046 21.7069 32.5356 22.664 32.0856 23.394V23.3938ZM32.2951 17.7405C25.8689 13.9236 15.2665 13.5726 9.13107 15.4347C8.14583 15.7335 7.10393 15.1774 6.80536 14.1921C6.66179 13.7188 6.71209 13.2078 6.94521 12.7715C7.17832 12.3353 7.57515 12.0094 8.04845 11.8657C15.0915 9.7276 26.7999 10.1407 34.1985 14.5328C34.4093 14.6576 34.5935 14.8227 34.7404 15.0187C34.8874 15.2147 34.9942 15.4378 35.0548 15.6752C35.1154 15.9126 35.1286 16.1596 35.0936 16.4021C35.0586 16.6446 34.9761 16.8778 34.8508 17.0883C34.327 17.9745 33.1794 18.2666 32.2961 17.7405H32.2951Z"></path>
                </svg>
                <span className="text-left ml-4">
                  <span className="block font-thin">Now Listening</span>
                  <span className="block font-semibold pr-3">UI Breakfast: UI/UX Design and Product Strategy</span>
                </span>
              </a>
            </div>
            <div className="text-lg flex flex-col justify-center">
              <h3 className="text-2xl font-bold mb-4">
                Hey<span style={{ fontSize: '1.3em' }}>👋</span>, I'm Sparsh, a UX/UI designer & front-end web developer based in {iconUrl && <img src={iconUrl} alt="weather icon" className='weather' />} <Temperature /> Dublin, Ireland.
              </h3>
              <p className="mb-4">
                Over the past four years or more, I have gained experience in various fields of digital design. My expertise includes front-end development, email marketing, and app UI/UX design. I have had the opportunity to take on multiple roles.
              </p>
              <p>
                Currently, I am concentrating on developing a SaaS-based product called <a href='https://memoriacall.com'><u>MemoriaCall</u></a> in my role as a Senior UI/UX Designer.
              </p>
              <div className="flex justify-start items-center mt-8">
                <a href={resume} target='_blank' rel='noopener noreferrer'>
                  <button className="flex items-center py-3 px-6 rounded-full bg-gray-800 bg-opacity-20 hover:bg-opacity-40 transition-colors duration-200">
                    <img src={download} className='w-8 h-8' alt='download-resume' />
                    <span className="text-left ml-4">
                      <span className="block font-semibold">Resume.CV</span>
                    </span>
                  </button>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Design/Collaborate/Inclusivity/Iteration Section */}
        <section className="mb-16">
          <div className="bg-gray-800 bg-opacity-10 p-8 rounded-xl">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
              <div>
                <h4 className="opacity-30 mb-2">01</h4>
                <h3 className="mb-2">Design</h3>
                <p>My process involves five steps: empathize with users; research market, competitors and stakeholders’ goals; brainstorm creative solutions; create and test prototypes; get user feedback and improve design. </p>
              </div>
              <div>
                <h4 className="opacity-30 mb-2">02</h4>
                <h3 className="mb-2">Collaborate</h3>
                <p>I believe design is a team effort that requires constant feedback and improvement. I involve stakeholders, developers and my team members in my design process and create a cooperative environment that values and invites feedback.</p>
              </div>
              <div>
                <h4 className="opacity-30 mb-2">03</h4>
                <h3 className="mb-2">Inclusivity</h3>
                <p>My goal is to design for accessibility, simplicity and ease of use. Accessible products help the many. I simplify complex UX designs and make them more user friendly.</p>
              </div>
              <div>
                <h4 className="opacity-30 mb-2">04</h4>
                <h3 className="mb-2">Iteration</h3>
                <p>I create with flexibility and curiosity. Some things may fail, but I try anyway - and learn from the failures and keep on iterating.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Before UI/UX Section */}
        <section className="mb-16 text-center">
          <div className="max-w-3xl mx-auto">
            <p className="mb-6">
              Before I stepped into the world of UI/UX design, I was a web developer. I did my bachelor's in Computer Science and cyber security through IBM. One of my earliest jobs involved creating landing pages and HTML 📧 emails.
            </p>
            <p className="mb-6">
              I also participated in a college competition where I secured the 🏆 first prize in Web Development, a skill that I have maintained and improved over the years. My side projects are driven by my curiosity, which led me to pursue my Master’s in Cyber Security.
            </p>
            <p>
              Outside work, I enjoy brewing my own ☕ coffee by the liffey river, listening to 🎶 music, and ✈️ exploring the world with my friends.
            </p>
          </div>
        </section>

        {/* Image Gallery Section */}
        <section>
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-4">
            <div>
              <img
                src={Lighthouse}
                className="object-cover rounded-xl w-full h-96" // Tailwind classes
                alt="Poolbeg"
              />
            </div>
            <div>
              <img
                src={Trek}
                className="object-cover rounded-xl w-full h-96" // Tailwind classes
                alt="Friends"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;