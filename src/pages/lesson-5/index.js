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
          <h1 className="lesson-title mb-50">Lesson 5 - Arithmethic Operators</h1>

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
                    Source: <a href="https://www.javascripttutorial.net/javascript-arithmetic-operators/">javascripttutorial.net</a>
                  </p>
                </div>
                {/* Add your explanation content here */}
                <h5>Overview:</h5>
                <p>JavaScript supports the following standard arithmetic operators: addition (+), subtraction (-), multiplication (*), and division (/).</p>
                <p>An arithmetic operator accepts numerical values as operands and returns a single numerical value. The numerical values can be literals or variables.</p>
     
                <p>The addition operator returns the sum of two values. For example, the following uses the addition operator to calculate the sum of two numbers:</p>
                <p style={{whiteSpace: 'pre'}}><code>{`let sum = 10 + 20;
console.log(sum); // 30`}</code></p>
            
                
               
              </div>

              {/* Instructions section */}
              <div className="instructions-section">
                {/* Add your instructions content here */}
                <h5>Instructions:</h5>
                <p>Declare a variable named 'result', and use either of the 4 basic arithmethic operators to add, subtract, multiply or divide two random numbers. You can use console.log to display the result.</p>
               
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
              <Link href="/lesson-4">
                <a>Previous Lesson</a>
              </Link>
            </div>
            <div className="col">
              <Link href="/course-details/1">
                <a>Back to Course Menu</a>
              </Link>
            </div>
            {/* <div className="col">
              <Link href="/lesson-5">
                <a>Next Lesson</a>
              </Link>
            </div> */}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default LessonPage;
