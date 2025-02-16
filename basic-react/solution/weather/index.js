const mainContainer = document.getElementById("main-container");

const wheatherDetails = [
  {
    day: "Wednesday",
    image: "sun.png",
    temperature: "21C",
  },
  {
    day: "Thursday",
    image: "cloud.png",
    temperature: "24C",
  },
  {
    day: "Friday",
    image: "sun.png",
    temperature: "21C",
  },
  {
    day: "Saturday",
    image: "cloud.png",
    temperature: "24C",
  },
];

function InputBox() {
  return (
    <div className="input-box">
      <input type="text" placeholder="Enter a City..." className="input" />
    </div>
  );
}

function MainDisplay() {
  return (
    <div className="main-display">
      <div className="wheather-image-section">
        <div className="sun-image-box">
          <img src="sun.png" className="sun-image" />
        </div>
      </div>
      <div className="wheather-details-section">
        <h2>Today</h2>
        <h1>New York</h1>
        <p>Temperature: 17C</p>
        <p>clear sky</p>
      </div>
    </div>
  );
}

function SmallDisplayBox(props) {
  const { details } = props;

  return (
    <div className="box">
      {[
        ...details.map((info) => {
          let className = "box-image";
          if (info.image === "cloud.png") {
            className = "box-image2";
          }
          return (
            <div className="mini-box">
              <div className="mini-box-header">{info.day}</div>
              <img src={info.image} className={className} />
              <p className="mini-box-paragrapgh">{info.temperature}</p>
            </div>
          );
        }),
      ]}
    </div>
  );
}

function MainPage() {
  return (
    <div className="main-page">
      <InputBox />
      <MainDisplay />
      <SmallDisplayBox details={wheatherDetails} />
    </div>
  );
}

const root = ReactDOM.createRoot(mainContainer);
root.render(<MainPage />);
