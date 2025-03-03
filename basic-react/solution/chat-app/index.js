const mainContainer = document.getElementById("main-container");

function Header() {
  return (
    <div className="header">
      <div className="side-bar-header">
        <img src="comment.png" className="message-icon" />
        <div className="app-name">ChatGram</div>
      </div>
      <div className="main-header">College Friends</div>
    </div>
  );
}
function SideBar() {
  return (
    <div className="side-bar">
      <div className="side-bar-title">Online Users</div>
      <div className="online-list">
        <div>
          <div className="online-name">gaurav</div>
          <div className="dot"></div>
        </div>
        <div>
          <div className="online-name">ayush</div>
          <div className="dot"></div>
        </div>
        <div>
          <div className="online-name">divyansh</div>
          <div className="dot"></div>
        </div>
        <div>
          <div className="online-name">harsh</div>
          <div className="dot"></div>
        </div>
        <div>
          <div className="online-name">dinesh</div>
          <div className="dot"></div>
        </div>
        <div>
          <div className="online-name">chirag</div>
          <div className="dot"></div>
        </div>
      </div>
    </div>
  );
}
function ChatRegion() {
  return (
    <div className="chat-region">
      <div className="sender-message-box">
        <div className="sender-message">
          chirag, welcome to the room college friends
        </div>
        <div className="sender-identity">admin</div>
      </div>
      <div className="sender-message-box">
        <div className="sender-message">Hey</div>
        <div className="sender-identity">gaurav</div>
      </div>
      <div className="sender-message-box">
        <div className="sender-message">Hii</div>
        <div className="sender-identity">atush</div>
      </div>
      <div className="sender-message-box">
        <div className="sender-message">Hello, What's up ?</div>
        <div className="sender-identity">divyansh</div>
      </div>
      <div className="receiver-message-box">
        <div className="receiver-identity">chirag</div>
        <div className="receiver-message">
          Hi Everyone, all good and what about you all ?
        </div>
      </div>
    </div>
  );
}
function ChatSection() {
  return (
    <div className="chat-box">
      <SideBar />
      <ChatRegion />
    </div>
  );
}

function Footer() {
  return (
    <div className="footer">
      <div className="side-bar-footer"></div>
      <div className="footer-chat-box">
        <div className="type-box">
          <input type="text" className="input" placeholder="Type message ..." />
        </div>
        <button className="send-button">SEND</button>
      </div>
    </div>
  );
}

function MainPage() {
  return (
    <div className="body">
      <Header />
      <ChatSection />
      <Footer />
    </div>
  );
}
const root = ReactDOM.createRoot(mainContainer);
root.render(<MainPage />);
