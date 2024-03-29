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
          <h1 className="lesson-title mb-50">Lesson 2 - Functions</h1>

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
                    Source: <a href="https://www.w3schools.com/">w3schools.com</a>
                  </p>
                </div>
                {/* Add your explanation content here */}
                <h5>Overview:</h5>
                <p>A JavaScript function is a block of code designed to perform a particular task, and executed when "something" invokes it (calls it).</p>
                <p>A JavaScript function is defined with the function keyword, followed by a name, followed by parentheses ().</p>
                <p>The parentheses may include parameter names separated by commas: (parameter1, parameter2, ...)</p>
                <p>The code to be executed, by the function, is placed inside curly brackets: {}</p>
                <p>Function parameters are listed inside the parentheses () in the function definition.</p>
                <p>Function arguments are the values received by the function when it is invoked.</p>
                <p>Inside the function, the arguments (the parameters) behave as local variables.</p>
                
                <p style={{ whiteSpace: 'pre'}}>Sample function syntax:<br></br>
                  <code>{`function nameOfFunction() {
                    (your code goes here)
                  }`}</code>
                </p>
                
               
              </div>

              {/* Instructions section */}
              <div className="instructions-section">
                {/* Add your instructions content here */}
                <h5>Instructions:</h5>
                <p>Declare a function called myFunction that takes no parameters. </p>
               
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
              <Link href="/lesson">
                <a>Previous Lesson</a>
              </Link>
            </div>
            <div className="col">
              <Link href="/course-details/1">
                <a>Back to Course Menu</a>
              </Link>
            </div>
            <div className="col">
              <Link href="/lesson-3">
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
