import "./portfolio-app.css";
import { ProfileSection } from "../profileSection/profileSection";

export function PortfolioApp({ portfolio }) {
  /* Remove sample code and start project 
  
     NB: No state is needed as there will be no change and modification of data
  */

  return (
    <div id="portfolio-app">
      <ProfileSection portfolio={portfolio} />
      {/* <h2>{portfolio.name}</h2>
      <div>
        {portfolio.portfolio.map((src, i) => (
          <img key={i} src={src} alt="" className="avatar" />
        ))}
      </div>
      <ul>
        {portfolio.testimonials.map((t, i) => (
          <li key={i}>
            "{t.quote}" - {t.name}
          </li>
        ))}
      </ul> */}
    </div>
  );
}
