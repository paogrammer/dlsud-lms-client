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
        }
  
        .row {
          display: flex;
        }
      `}</style>

      <section className="breadcrumb__area include-bg pt-150 pb-150 breadcrumb__overlay error_breadcrumb">
        {/* ... */}
      </section>

      <section className="pt-50 pb-120">
        <div className="container">
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
              {/* Add your instructions/questions panel here */}
              <div className="panel">Instructions:<br></br>Using const, define 3 variables named "a", "b", and "c". Assign a random integer to variables "a" and "b", but variable "c" must have a value that is the sum of variables "a" and "b".</div>
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
              {/* <Link href="/lesson-2">
                <a>Next Lesson</a>
              </Link> */}
            </div>
          </div>
        </div>
      </section>



      <Footer />
    </>
  );
};

export default LessonPage;
