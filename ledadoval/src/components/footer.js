import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

export default function Footerp() {
  return (
    <MDBFooter className='text-center text-lg-start text-muted' id='contact'>
            <section className='footer-class'>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md='3' lg='3' xl='5' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon color='secondary' icon='gem' className='me-3' />
                contact me</h6>
              <p>
                i’m open to work with companies that thinks i’ll help them with my skills. if you are looking for someone like me, please let me know.
              </p>
              <div className='footer-button'>
              <a href='mailto:ledadoval2002@gmail.com'>
            <button>contact</button>            
              </a>
              </div>
            </MDBCol>
          </MDBRow>
          <MDBCol className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
       <div>
          <a href='' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='twitter' />
          </a>
          <a href='mailto:ledadoval2002@gmail.com' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='google' />
          </a>
          <a href='https://www.linkedin.com/in/leda-do-val/' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='linkedin' />
          </a>
          <a href='https://github.com/ledadoval' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='github' />
          </a>
        </div>
        </MDBCol>
        </MDBContainer>
        
      </section>

      <div className='text-center text-white p-4'>
        Copyright © 2025 -
        <a className='text-reset fw-bold' href='https://github.com/ledadoval' target='_blank'> 
          Lêda do Val
        </a>
      </div>
    </MDBFooter>
  );
}