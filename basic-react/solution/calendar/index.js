const mainContainer = document.getElementById("main-container");

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const days = ["S", "M", "T", "W", "T", "F", "S"];

const year = new Date().getFullYear();

function generateDays(monthIndex, year) {
  const firstDay = new Date(year, monthIndex, 1).getDay();
  const daysInMonth = new Date(year, monthIndex + 1, 0).getDate();

  let days = [];

  for (let i = 0; i < firstDay; i++) {
    days.push(<div className="iactive-day"></div>);
  }

  for (let i = 1; i <= daysInMonth; i++) {
    const date = new Date(year, monthIndex, i);
    const isWeekend = date.getDay() === 0 || date.getDay() === 6;
    days.push(
      <div className={`day ${isWeekend ? "inactive-day" : ""}`}>{i}</div>
    );
  }

  return days;
}

function Header() {
  return (
    <div className="header">
      <div className="header-year">
        <div>+</div>
        <div className="this-year">2025</div>
      </div>
      <div className="header-season">
        <div className="season-box">
          <div>Day</div>
          <div className="week">Week</div>
          <div>Month</div>
          <div className="year">Year</div>
        </div>
      </div>
      <div className="search-box">
        <input type="text" className="input" placeholder="Search" />
        <div className="switch-box">
          <div className="left-arrow">{"<"}</div>
          <div className="middle-box">Today</div>
          <div className="right-arrow">{">"}</div>
        </div>
      </div>
    </div>
  );
}

function Calendar(props) {
  console.log(props);
  const { months } = props;
  const { days } = props;

  return (
    <div className="calendar-container">
      {months.map((month, index) => (
        <div className="month">
          <div className="month-title">{month}</div>
          <div className="day-title">
            {days.map((day) => (
              <div className="each-day">{day}</div>
            ))}
          </div>
          <div className="days-container">{generateDays(index, year)}</div>
        </div>
      ))}
    </div>
  );
}

function MainPage() {
  return (
    <div>
      <Header />
      <Calendar months={months} days={days} />
    </div>
  );
}
const root = ReactDOM.createRoot(mainContainer);
root.render(<MainPage />);
