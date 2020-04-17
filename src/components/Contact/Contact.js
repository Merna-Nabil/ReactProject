import React from 'react';
import './Contact.css';

const Contact =()=>{
    return(
        <div>
        <section className="contact section-bg">
      <div className="container">

        <div className="section-title">
          <h2>Contact</h2>
          <p>Magnam dolores commodi suscipit eius consequatur ex aliquid fuga</p>
        </div>

        <div className="row mt-5 justify-content-center">

          <div className="col-lg-10">

            <div className="info-wrap">
              <div className="row">
                <div className="col-lg-4 info">
                  <i className="fa fa-map-marker"></i>
                  <h4>Location:</h4>
                  <p>A108 Adam Street<br/>New York, NY 535022</p>
                </div>

                <div className="col-lg-4 info mt-4 mt-lg-0">
                  <i className="fa fa-envelope-o"></i>
                  <h4>Email:</h4>
                  <p>info@example.com<br/>contact@example.com</p>
                </div>

                <div className="col-lg-4 info mt-4 mt-lg-0">
                  <i className="fa fa-phone"></i>
                  <h4>Call:</h4>
                  <p>+1 5589 55488 51<br/>+1 5589 22475 14</p>
                </div>
              </div>
            </div>

          </div>

        </div>

        <div className="row mt-5 justify-content-center">
          <div className="col-lg-10">
            <form action="forms/contact.php" method="post" role="form" className="php-email-form">
              <div className="form-row">
                <div className="col-md-6 form-group">
                  <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" />
                  <div className="validate"></div>
                </div>
                <div className="col-md-6 form-group">
                  <input type="email" className="form-control" name="email" id="email" placeholder="Your Email"  />
                  <div className="validate"></div>
                </div>
              </div>
              <div className="form-group">
                <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject"  />
                <div className="validate"></div>
              </div>
              <div className="form-group">
                <textarea className="form-control" name="message" rows="5"  placeholder="Message"></textarea>
                <div className="validate"></div>
              </div>
              <div className="mb-3">
                <div className="loading">Loading</div>
                <div className="error-message"></div>
                <div className="sent-message">Your message has been sent. Thank you!</div>
              </div>
              <div className="text-center"><button type="submit">Send Message</button></div>
            </form>
          </div>

        </div>

      </div>
    </section>
     <footer id="footer">

     <div className="footer-top">
       <div className="container">
         <div className="row">
 
           <div className="col-lg-3 col-md-6 footer-contact">
             <h3>Lumia</h3>
             <p>
               A108 Adam Street <br/>
               New York, NY 535022<br/>
               United States <br/><br/>
               <strong>Phone:</strong> +1 5589 55488 55<br/>
               <strong>Email:</strong> info@example.com<br/>
             </p>
           </div>
 
           <div className="col-lg-2 col-md-6 footer-links">
             <h4>Useful Links</h4>
             <ul>
               <li><i className="bx bx-chevron-right"></i> <a href="#">Home</a></li>
               <li><i className="bx bx-chevron-right"></i> <a href="#">About us</a></li>
               <li><i className="bx bx-chevron-right"></i> <a href="#">Services</a></li>
               <li><i className="bx bx-chevron-right"></i> <a href="#">Terms of service</a></li>
               <li><i className="bx bx-chevron-right"></i> <a href="#">Privacy policy</a></li>
             </ul>
           </div>
 
           <div className="col-lg-3 col-md-6 footer-links">
             <h4>Our Services</h4>
             <ul>
               <li><i className="bx bx-chevron-right"></i> <a href="#">Web Design</a></li>
               <li><i className="bx bx-chevron-right"></i> <a href="#">Web Development</a></li>
               <li><i className="bx bx-chevron-right"></i> <a href="#">Product Management</a></li>
               <li><i className="bx bx-chevron-right"></i> <a href="#">Marketing</a></li>
               <li><i className="bx bx-chevron-right"></i> <a href="#">Graphic Design</a></li>
             </ul>
           </div>
 
           <div className="col-lg-4 col-md-6 footer-newsletter">
             <h4>Join Our Newsletter</h4>
             <p>Tamen quem nulla quae legam multos aute sint culpa legam noster magna</p>
             <form action="" method="post">
               <input type="email" name="email"/><input type="submit" value="Subscribe"/>
             </form>
           </div>
 
         </div>
       </div>
     </div>
 
     <div className="container d-md-flex py-4">
 
       <div className="mr-md-auto text-center text-md-left">
         <div className="copyright">
           &copy; Copyright <strong><span>Lumia</span></strong>. All Rights Reserved
         </div>
         <div className="credits"> Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
         </div>
       </div>
       <div className="social-links text-center text-md-right pt-3 pt-md-0">
         <a href="#" className="twitter"><i className="fa fa-twitter"></i></a>
         <a href="#" className="facebook"><i className="fa fa-facebook"></i></a>
         <a href="#" className="instagram"><i className="fa fa-instagram"></i></a>
         <a href="#" className="google-plus"><i className="fa fa-skype"></i></a>
         <a href="#" className="linkedin"><i className="fa fa-linkedin"></i></a>
       </div>
     </div>
   </footer>
   </div>

    )
}
export default Contact;