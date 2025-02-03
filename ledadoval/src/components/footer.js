import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Footerp() {
  return (
    <footer id="contact">
            <section className='container'>
              <div className='row'>
                <div className='footer-class'>

              <div className="col-md-4 text-md-start mt-3">
              <h2 className='fw-light mb-4'>
                contact me</h2>
              <p>
                i’m open to work with companies that thinks i’ll help them with my skills. if you are looking for someone like me, please let me know.
              </p>
              <div className='button-footer'>
              <a href='mailto:ledadoval2002@gmail.com'>
            <button>contact</button>            
              </a>
              </div>
            </div>
          </div>
                </div>

          <div className="col-md-6 text-md-start mt-3">
       <h4>social media</h4>
            <a href="https://twitter.com" className="me-3 text-white"><i className="fab fa-twitter"></i></a>
            <a href="mailto:ledadoval2002@gmail.com" className="me-3 text-white"><i className="fab fa-google"></i></a>
            <a href="https://www.linkedin.com/in/leda-do-val/" className="me-3 text-white"><i className="fab fa-linkedin"></i></a>
            <a href="https://github.com/ledadoval" className="me-3 text-white"><i className="fab fa-github"></i></a>

      </div>        
      </section>

      <div className='text-center text-white p-4'>
        Copyright © 2025 -
        <a className='text-reset fw-bold' href='https://github.com/ledadoval' target='_blank'> 
          Lêda do Val
        </a>

      </div>
    </footer>
  );
}