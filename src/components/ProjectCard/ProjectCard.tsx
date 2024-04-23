interface ProjectCardProps {
   src: string;
   subtitle: string;
   title: string;
   link: string;
   target: 'project' | 'skill';
}

export function ProjectCard({ src, subtitle, title, link }: ProjectCardProps) {
   return (
      <article className="projects__card">
         <img src={src} alt="" />
         <div className="projects__modal">
            <div>
               <span className="projects__subtitle">{subtitle}</span>
               <h3 className="projects__title">{title}</h3>
               <a href={link} className="projects__button button button__small">
                  <i className="ri-link"></i>
               </a>
            </div>
         </div>
      </article>
   );
}
