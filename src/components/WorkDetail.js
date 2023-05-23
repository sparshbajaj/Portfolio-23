import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ReactAnimatedCursor from 'react-animated-cursor';
import FullScreenOverlay from "./FullScreenOverlay";

const WorkDetail = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const { slug } = useParams();
  const navigate = useNavigate();
  const [customCursorEnabled] = useState(true);


  useEffect(() => {
    fetch('https://raw.githubusercontent.com/sparshbajaj/portfolio-2020/master/data.json')
      .then(response => response.json())
      .then(data => {
        setData(data);
        setCurrentIndex(data.findIndex(work => work.slug === slug));
      });

    window.scrollTo(0, 0);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);

  }, [slug]);

  if (!data) return null;

  const work = { ...data[currentIndex], html: "<h1>404, you should not be here.</h1>" };
  
  const prevIndex = currentIndex === 0 ? data.length - 1 : currentIndex - 1;
  const nextIndex = currentIndex === data.length - 1 ? 0 : currentIndex + 1;

  const handlePrev = () => {
    setCurrentIndex(prevIndex);
    navigate(`/work/${data[prevIndex].slug}`);
  };

  const handleNext = () => {
    setCurrentIndex(nextIndex);
    navigate(`/work/${data[nextIndex].slug}`);
  };

  return (
    <>
    <FullScreenOverlay isActive={isLoading} />
    {/* cursor */}
    {customCursorEnabled && (
              <ReactAnimatedCursor
                innerSize={20}
                outerSize={20}
                color="255,255,255"
                outerAlpha={0.2}
                innerScale={0.7}
                outerScale={5}
                trailingSpeed={2}
                clickables={[
                  'a',
                  'input[type="text"]',
                  'input[type="email"]',
                  'input[type="number"]',
                  'input[type="submit"]',
                  'input[type="image"]',
                  'label[for]',
                  'select',
                  'textarea',
                  'button',
                  '.link'
                ]}
                hasBlendMode={true}
                outerStyle={{
                  mixBlendMode: 'exclusion'
                }}
              />
            )}

      <div className="flex flex-col justify-center items-center">
        <div className="items-start">
          <img
            src={work.heroImage}
            alt={work.title}
            className="mx-auto"
            style={{
              width: "70vw",
              height: "70vh",
              objectFit: "cover",
              borderRadius: "0 0 42px 42px",
              marginBottom: "50px",
              alignSelf: "flex-start" // add this line
            }}
          />
        </div>
        <div className="flex flex-col items-start" style={{width:'70vw'}}>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4">
            {work.title}
          </h1>
          <hr className="w-full border-green-100 mb-9 opacity-20" />
          <div className="grid md:grid-cols-2 mb-4">
            <div>
              <table className="mb-9" style={{fontSize:'1rem'}}>
                <tbody>
                <tr>
                  <td className="pr-9"><h4 className='text-white'>Catergory</h4></td>
                  <td><p>{work.type}</p></td>
                </tr>
                <tr>
                  <td className="pr-9"><h4 className='text-white'>Year</h4></td>
                  <td><p>{work.date}</p></td>
                </tr>
                <tr>
                  <td className="pr-9"><h4 className='text-white'>Client</h4></td>
                  <td><p>{work.client}</p></td>
                </tr>
                <tr>
                  <td className="pr-9"><h4 className='text-white'>Progress</h4></td>
                  <td><p>{work.progress}</p></td> 
                </tr> 
                </tbody>
              </table> 
            </div>
            <div>
              <p style={{textAlign:'left', fontSize:'1rem'}} className='text-white'>
                {work.excerpt}
              </p>
            </div>
          </div>
    </div>

        {/* new section for work description */}
        <section className="my-12" style={{width:'70vw'}}>
          {/* work description */}
          <div
            dangerouslySetInnerHTML={{ __html: work.description }}
            className="max-full mx-auto json-html"
          />

          {/* navigation buttons */}
          <hr className="w-full border-green-100 mt-9 opacity-20" />
          <div className="w-full mt-6 flex justify-between " >
            <button
              onClick={handlePrev}
              className="bg-transparent text-white font-medium py-2 px-4 mr-4"
            >
              Prev
            </button>
            <button
              onClick={handleNext}
              className="bg-transparent text-white font-medium py-2 px-4 "
            >
            Next
          </button>
        </div> 
        </section> 
      </div> 
      </>
  );
};

export default WorkDetail;
