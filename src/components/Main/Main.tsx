import { useState } from 'react'
import Project1 from '../../assets/img/project1.jpg'
import Project2 from '../../assets/img/project2.jpg'
import Project3 from '../../assets/img/project3.jpg'
import Project4 from '../../assets/img/project4.jpg'

import './styles.css'

export function Main() {
  const [activeTab, setActiveTab] = useState('#projects')

  function handleTabClick(targetId: string) {
    setActiveTab(targetId)
  }

  return (
    <main className="main">
      <section className="filters container ">
        <ul className="filters__content">
          <button
            className={`filters__button ${
              activeTab === '#projects' ? 'filter-tab-active' : ''
            }`}
            data-target="#projects"
            onClick={() => handleTabClick('#projects')}
          >
            Projects
          </button>

          <button
            className={`filters__button ${
              activeTab === '#skills' ? 'filter-tab-active' : ''
            }`}
            data-target="#skills"
            onClick={() => handleTabClick('#skills')}
          >
            Skills
          </button>
        </ul>
        <div className="filters__sections">
          {/* projects */}
          <div
            data-content="#projects"
            className={`projects__content grid ${
              activeTab === '#projects' ? 'filters__active' : ''
            }`}
            id="projects"
          >
            <article className="projects__card">
              <img src={Project1} alt="" />
              <div className="projects__modal">
                <div>
                  <span className="projects__subtitle">Web</span>
                  <h3 className="projects__title">Payment Site</h3>
                  <a href="#" className="projects__button button button__small">
                    <i className="ri-link"></i>
                  </a>
                </div>
              </div>
            </article>

            <article className="projects__card">
              <img src={Project2} alt="" />
              <div className="projects__modal">
                <div>
                  <span className="projects__subtitle">Web</span>
                  <h3 className="projects__title">Portolio Website</h3>
                  <a href="#" className="projects__button button button__small">
                    <i className="ri-link"></i>
                  </a>
                </div>
              </div>
            </article>

            <article className="projects__card">
              <img src={Project3} alt="" />
              <div className="projects__modal">
                <div>
                  <span className="projects__subtitle">Movil</span>
                  <h3 className="projects__title">Fast food app</h3>
                  <a href="#" className="projects__button button button__small">
                    <i className="ri-link"></i>
                  </a>
                </div>
              </div>
            </article>

            <article className="projects__card">
              <img src={Project4} alt="" />
              <div className="projects__modal">
                <div>
                  <span className="projects__subtitle">Design</span>
                  <h3 className="projects__title">Music App Design</h3>
                  <a href="#" className="projects__button button button__small">
                    <i className="ri-link"></i>
                  </a>
                </div>
              </div>
            </article>
          </div>

          {/* skilss */}
          <div
            className={`skills__content grid ${
              activeTab === '#skills' ? 'filters__active' : ''
            }`}
            data-content="#skills"
            id="skills"
          >
            <div className="skills__area">
              <h3 className="skills__title">Frontend develper</h3>
              <div className="skills__box">
                <div className="skills__group">
                  <div className="skills__data">
                    <i className="ri-checkbox-circle-line"></i>
                    <div className="">
                      <h3 className="skills__name">HTML</h3>
                      <span className="skills__level">Basic</span>
                    </div>
                  </div>

                  <div className="skills__data">
                    <i className="ri-checkbox-circle-line"></i>
                    <div className="">
                      <h3 className="skills__name">React</h3>
                      <span className="skills__level">Advanced</span>
                    </div>
                  </div>

                  <div className="skills__data">
                    <i className="ri-checkbox-circle-line"></i>
                    <div className="">
                      <h3 className="skills__name">Css</h3>
                      <span className="skills__level">Avanced</span>
                    </div>
                  </div>
                </div>

                <div className="skills__group">
                  <div className="skills__data">
                    <i className="ri-checkbox-circle-line"></i>
                    <div className="">
                      <h3 className="skills__name">Tailwind</h3>
                      <span className="skills__level">Intermediate</span>
                    </div>
                  </div>

                  <div className="skills__data">
                    <i className="ri-checkbox-circle-line"></i>
                    <div className="">
                      <h3 className="skills__name">Git</h3>
                      <span className="skills__level">Advanced</span>
                    </div>
                  </div>

                  <div className="skills__data">
                    <i className="ri-checkbox-circle-line"></i>
                    <div className="">
                      <h3 className="skills__name">PostgreSQL</h3>
                      <span className="skills__level">Avanced</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="skills__area">
              <h3 className="skills__title">Backend develper</h3>
              <div className="skills__box">
                <div className="skills__group">
                  <div className="skills__data">
                    <i className="ri-checkbox-circle-line"></i>
                    <div className="">
                      <h3 className="skills__name">SQL</h3>
                      <span className="skills__level">intermediate</span>
                    </div>
                  </div>

                  <div className="skills__data">
                    <i className="ri-checkbox-circle-line"></i>
                    <div className="">
                      <h3 className="skills__name">Postgresql</h3>
                      <span className="skills__level">Advanced</span>
                    </div>
                  </div>

                  <div className="skills__data">
                    <i className="ri-checkbox-circle-line"></i>
                    <div className="">
                      <h3 className="skills__name">Firebase</h3>
                      <span className="skills__level">basic</span>
                    </div>
                  </div>
                </div>

                <div className="skills__group">
                  <div className="skills__data">
                    <i className="ri-checkbox-circle-line"></i>
                    <div className="">
                      <h3 className="skills__name">MySql</h3>
                      <span className="skills__level">Advanced</span>
                    </div>
                  </div>

                  <div className="skills__data">
                    <i className="ri-checkbox-circle-line"></i>
                    <div className="">
                      <h3 className="skills__name">NodeJS</h3>
                      <span className="skills__level">Intermediate</span>
                    </div>
                  </div>

                  <div className="skills__data">
                    <i className="ri-checkbox-circle-line"></i>
                    <div className="">
                      <h3 className="skills__name">PostgreSQL</h3>
                      <span className="skills__level">Avanced</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
