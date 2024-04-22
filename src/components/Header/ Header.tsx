import '../../../style.css';
import './index.css';
import ProfileImg from '../../assets/img/perfil.png';
import CV from '../../assets/pdf/Gianell-Cv.pdf';

export function Header() {
   return (
      <header className="profile container">
         <div className="profile__container grid">
            <div className="profile__data">
               <div className="profile__border">
                  <div className="profile__perfil">
                     <img src={ProfileImg} alt="" />
                  </div>
               </div>
               <h2 className="profile__name">Mateus Maia</h2>
               <h3 className="profile__profession">Web developer</h3>
               <ul className="profile__social">
                  <a
                     target="_blank"
                     href="https://instagram.com/matteusmaia_"
                     className="profile__social-link"
                  >
                     <i className="ri-instagram-line"></i>
                  </a>
                  <a
                     target="_blank"
                     href="https://https://www.linkedin.com/in/mateus-maia-690218273/"
                     className="profile__social-link"
                  >
                     <i className="ri-linkedin-box-line"></i>
                  </a>
                  <a
                     target="_blank"
                     href="https://github.com/mateusmaiia"
                     className="profile__social-link"
                  >
                     <i className="ri-github-line"></i>
                  </a>
               </ul>
            </div>

            <div className="profile__info grid">
               <div className="profile__info-group">
                  <h3 className="profile__number">7</h3>
                  <p className="profile__info-description">
                     Years of <br /> work
                  </p>
               </div>

               <div className="profile__info-group">
                  <h3 className="profile__number">43</h3>
                  <p className="profile__info-description">
                     Completed <br /> projects
                  </p>
               </div>

               <div className="profile__info-group">
                  <h3 className="profile__number">96</h3>
                  <p className="profile__info-description">
                     Satisfied <br />
                     customers
                  </p>
               </div>
            </div>
            <div className="profile__buttons">
               <a href={CV} className="button">
                  Download CV
                  <i className="ri-download-line"></i>
               </a>
               <div className="profile__buttons-small">
                  <a
                     href="https://api.whatsapp.com/send?phone=5583999533314&text=Hello, more information!"
                     target="_blank"
                     className="button button__small  button__gray"
                  >
                     <i className="ri-whatsapp-line"></i>
                  </a>
                  <a
                     href=""
                     target="_blank"
                     className="button button__small button__gray"
                  >
                     <i className="ri-messenger-line"></i>
                  </a>
               </div>
            </div>
         </div>
      </header>
   );
}
