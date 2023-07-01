import Link from 'next/link';
import BreadCrumb from '../../../components/common/BreadCrumb';
import Footer from '../../../components/common/Footer';
import Header from '../../../components/Home/Header';
import SEO from '../../../components/seo';
import CodeEditorComponent from './CodeEditor';

const LessonPage = () => {
  return (
    <>
      {/* Add the necessary CSS styles to style the two columns */}
      <style jsx>{`
        .column-left {
          flex-basis: 50%;
        }
  
        .column-right {
          flex-basis: 50%;
          display: flex;
          flex-direction: column;
        }
  
        .row {
          display: flex;
        }
  
        .lesson-title {
          text-align: center;
        }
  
        .explanation-section {
          flex: 65%;
          position: relative;
        }
  
        .instructions-section {
          flex: 35%;
        }
  
        .citation {
          font-size: 14px;
          text-align: right;
        }
      `}</style>

      <section className="breadcrumb__area include-bg pt-150 pb-150 breadcrumb__overlay error_breadcrumb">
        {/* ... */}
      </section>

      <section className="pt-50 pb-120">
        <div className="container">
          <h1 className="lesson-title mb-50">Lesson 4 - Objects</h1>

          <div className="row justify-content-center">
            {/* Column for the code editor */}
            <div className="col-xxl-6 column-left">
              <div className="error__content text-center">
                <CodeEditorComponent />
              </div>
              {/* <button className="btn btn-primary">Run</button>  */}
            </div>

            {/* Column for the instructions/questions panel */}
            <div className="col-xxl-6 column-right">
              {/* Explanation section */}
              <div className="explanation-section">
                 {/* Citation */}
                 <div className="citation p-20">
                  <p>
                    Source: <a href="https://www.w3schools.com/">w3schools.com</a>, <a href="https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Basics">developer.mozilla.org</a>
                  </p>
                </div>
                {/* Add your explanation content here */}
                <h5>Overview:</h5>
                <p>An object is a collection of related data and/or functionality. These usually consist of several variables and functions (which are called properties and methods when they are inside objects). Let's work through an example to understand what they look like.</p>
                <p>A car has properties like weight and color:</p>
                <code>{`const car = {type:"Fiat", model:"500", color:"white"};`}</code>
                
                <p>The values are written as name:value pairs (name and value separated by a colon).</p>
                
            
                
               
              </div>

              {/* Instructions section */}
              <div className="instructions-section">
                {/* Add your instructions content here */}
                <h5>Instructions:</h5>
                <p>Declare an object called 'book' and the properties 'title' and 'author'. You can put any value in these.</p>
               
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section with three columns */}
      <section className="three-column-section mb-100">
        <div className="container">
          <div className="row">
            <div className="col">
              <Link href="/lesson-3">
                <a>Previous Lesson</a>
              </Link>
            </div>
            <div className="col">
              <Link href="/course-details/1">
                <a>Back to Course Menu</a>
              </Link>
            </div>
            <div className="col">
              <Link href="/lesson-5">
                <a>Next Lesson</a>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default LessonPage;
