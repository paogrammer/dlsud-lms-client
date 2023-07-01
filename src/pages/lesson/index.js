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
          <h1 className="lesson-title mb-50">Lesson 1 - Variables</h1>

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
                {/* Add your explanation content here */}

                 {/* Citation */}
                 <div className="citation">
                  <p>
                    Source: <a href="https://www.w3schools.com/">w3schools.com</a>
                  </p>
                </div>
                <h5>Overview:</h5>
                
                <p>In programming, variables are used to store and manipulate data. They act as containers that hold values, which can be of different types such as numbers, strings, or booleans. Variables provide a way to refer to and use data throughout a program.</p>
                <br></br>
                <p>In JavaScript, you can declare variables using the 'var', 'let', or 'const' keyword. The 'var' keyword was traditionally used to declare variables, but with the introduction of ES6, 'let' and 'const' were introduced as block-scoped alternatives.</p>
                <p>This is how you declare variables: (For this example, we'll use the 'let' keyword.)</p>
                <p>let name = "John Doe";  (This declares a <strong>string</strong> variable.)</p>
                <p>let age = 25;  (This declares an <strong>integer</strong> variable.)</p>
                <p>let isStudent = true;  (This declares a <strong>boolean</strong> variable.)</p>
                
               
              </div>

              {/* Instructions section */}
              <div className="instructions-section">
                {/* Add your instructions content here */}
                <h5>Instructions:</h5>
                <p>Declare these 3 following variables using the 'let' keyword:</p>
                <ol>
                  <li>A string variable with called 'name' with or without a value of your choosing.</li>
                  <li>An integer variable called 'age' with or without a value of your choosing.</li>
                  <li>A boolean variable called 'isEmployee' with or without a value of your choosing.</li>
                </ol>
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
              {/* <Link href="/previous-lesson">
                <a>Previous Lesson</a>
              </Link> */}
            </div>
            <div className="col">
              <Link href="/course-details/1">
                <a>Back to Course Menu</a>
              </Link>
            </div>
            <div className="col">
              <Link href="/lesson-2">
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
