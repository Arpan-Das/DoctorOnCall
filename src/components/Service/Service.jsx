import React from 'react'
import SubHeader from '../Shared/SubHeader'
import Footer from '../Shared/Footer/Footer'
import Header from '../Shared/Header/Header'
import img from '../../images/features/baby.png'
import x24x7 from '../../images/services/x24x7.jpg'
import appointment from '../../images/services/appointment.jpg'
import convient from '../../images/services/convinent.jpg'
import follow from '../../images/services/follow.jpg'
import imidiate from '../../images/services/imidiate.jpg'
import multi from '../../images/services/multi.jpg'
import { Link } from 'react-router-dom'
import doctorBg from '../../images/img/doctors-bg.jpg';

const Service = () => {
  const weArePleaseStyle = {
    backgroundColor: "antiquewhite",
    height: "60vh",
    background: `url(${doctorBg}) no-repeat`,
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    padding: "10px",
    position: "relative",
    marginTop: 200,
    marginBottom: 100
  }
  return (
    <>
      <Header />
      <SubHeader title="Service" subtitle="Lorem ipsum dolor sit amet consectetur adipisicing." />

      <div className="container" style={{ marginTop: 200, marginBottom: 100 }}>
        <div className="row">
          {/* {
            Array(6).fill(null).map((_item, id) => (
              <div className="col-lg-4 col-md-6 col-sm-6" key={id + 6}>
                <div className="card shadow border-0 mb-5">
                  <img src={img} alt="" className="img-fluid" style={{ maxHeight: '17rem', objectFit: 'cover' }} />
                  <div className="p-2">
                    <h4 className="mt-4 mb-2">Child care</h4>
                    <p className="mb-4">Saepe nulla praesentium eaque omnis perferendis a doloremque.</p>
                  </div>
                </div>
              </div>
            ))
          } */}
      <div className="col-lg-4 col-md-6 col-sm-6" key={1}>
                <div className="card shadow border-0 mb-5">
                  <img src={x24x7} alt="" className="img-fluid" style={{ maxHeight: '17rem', objectFit: 'cover' }} />
                  <div className="p-2">
                    <h4 className="mt-4 mb-2">24/7 Access to Medical Consultations</h4>
                    <p className="mb-4">Patients can access medical consultations with qualified doctors at any time, day or night, from the comfort of their own homes. This service is especially beneficial for individuals experiencing urgent medical concerns outside of regular clinic hours.</p>
                  </div>
                </div>
              </div>
     
      <div className="col-lg-4 col-md-6 col-sm-6" key={1}>
                <div className="card shadow border-0 mb-5">
                  <img src={convient} alt="" className="img-fluid" style={{ maxHeight: '17rem', objectFit: 'cover' ,width:'416px', height:'248px' }} />
                  <div className="p-2">
                    <h4 className="mt-4 mb-2">Convenient Communication Channels</h4>
                    <p className="mb-4">Offer multiple communication channels for patients to connect with doctors, such as phone calls, video calls, or live chat. This allows patients to choose the method that best suits their preferences and technological capabilities</p>
                  </div>
                </div>
              </div>
      <div className="col-lg-4 col-md-6 col-sm-6" key={1}>
                <div className="card shadow border-0 mb-5">
                  <img src={multi} alt="" className="img-fluid" style={{ maxHeight: '17rem', objectFit: 'cover' ,width:'416px', height:'248px' }} />
                  <div className="p-2">
                    <h4 className="mt-4 mb-2">Multidisciplinary Team of Healthcare Professionals</h4>
                    <p className="mb-4"> Provide access to a diverse team of healthcare professionals, including general practitioners, specialists, and allied health professionals, specialists, and allied health professionals,to address a wide range of medical concerns and provide comprehensive care.</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6" key={1}>
                <div className="card shadow border-0 mb-5">
                  <img src={imidiate} alt="" className="img-fluid" style={{ maxHeight: '17rem', objectFit: 'cover',width:'416px', height:'248px' }} />
                  <div className="p-2">
                    <h4 className="mt-4 mb-2">Immediate Medical Advice</h4>
                    <p className="mb-4">Patients can receive immediate medical advice and guidance for non-emergency health issues. Whether they have questions about treatment options.</p>
                  </div>
                </div>
              </div>
      <div className="col-lg-4 col-md-6 col-sm-6" key={1}>
                <div className="card shadow border-0 mb-5">
                  <img src={appointment} alt="" className="img-fluid" style={{ maxHeight: '17rem', objectFit: 'cover' ,width:'416px', height:'248px'}} />
                  <div className="p-2">
                    <h4 className="mt-4 mb-2">Appointment Scheduling</h4>
                    <p className="mb-4">Allow patients to schedule virtual appointments with doctors for specific time slots, ensuring timely access to medical consultations and minimizing wait times.</p>
                  </div>
                </div>
              </div>
      <div className="col-lg-4 col-md-6 col-sm-6" key={1}>
                <div className="card shadow border-0 mb-5">
                  <img src={follow} alt="" className="img-fluid" style={{ maxHeight: '17rem', objectFit: 'cover',width:'416px', height:'248px' }} />
                  <div className="p-2">
                    <h4 className="mt-4 mb-2">Follow-up Care</h4>
                    <p className="mb-4">Enable patients to receive follow-up care and medical advice after their initial consultation, ensuring continuity of care and ongoing support for their health needs.</p>
                  </div>
                </div>
              </div>



        </div>
      </div>

      <section style={weArePleaseStyle}>
        <div className="container" style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)'
        }}>
          <div className="row">
            <div className="col-lg-7">
              <div className="d-flex align-items-center">
                <div className='mb-4 section-title text-center'>
                  <h2 className='text-uppercase'>We are pleased to offer you the</h2>
                  <p className='form-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, sed.</p>
                  <Link to={'/doctors'} className="btn-get-started scrollto">Get Started</Link>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>


      <Footer />
    </>
  )
}

export default Service