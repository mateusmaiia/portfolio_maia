export function Main() {
   return (
      <main className="main">
         <section className="filters container">
            <ul className="filters__content">
               <button className="filters__button" data-target="#projects">
                  Projects
               </button>

               <button className="filters__button" data-target="#skills">
                  Skills
               </button>
            </ul>
            <div className="filters__sections"></div>
         </section>
      </main>
   );
}
