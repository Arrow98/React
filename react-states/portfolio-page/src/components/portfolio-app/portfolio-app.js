import "./portfolio-app.css";

export function PortfolioApp({ portfolio }) {
  return (
    <div id="portfolio-app">
      <h2>{portfolio.name}</h2>
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
      </ul>
    </div>
  );
}
