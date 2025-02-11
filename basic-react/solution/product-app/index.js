const mainContainer = document.getElementById("main-container");

const productData = [
  {
    image:
      "https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2FYIZuxWur1W4fAT6z3ejk?alt=media&token=7dca264f-c345-4cfc-93a8-60217a53f66a",
    name: "Kulangot",
    type: "Salt",
    amount: "$67.00",
  },
  {
    image:
      "https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2FbS1hHdO7NvbR1yN5ZPlR?alt=media&token=809a3249-f83d-4aec-b134-34a65ce2ce10",
    name: "Tiktilaok Mano",
    type: "Sexbomb",
    amount: "$78.00",
  },
  {
    image:
      "https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2FLIu8tS4yHSU28Xi8BXCj?alt=media&token=31e796ad-dbd6-4e4f-a8a9-192f5158684a",
    name: " Very Nice",
    type: "Salt maalat",
    amount: "$79.00",
  },
  {
    image:
      "https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2FcLGc3mcbZrK3Tl3yJ3xW?alt=media&token=44f74e92-f2ca-4af3-82f6-7a3bcace7f7a",
    name: "Quake Overload",
    type: "Yezyow",
    amount: "$80.00",
  },
  {
    image:
      "https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2FcLGc3mcbZrK3Tl3yJ3xW?alt=media&token=44f74e92-f2ca-4af3-82f6-7a3bcace7f7a",
    name: "Kutu",
    type: "Sexbom",
    amount: "$129.00",
  },
  {
    image:
      "https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2FLIu8tS4yHSU28Xi8BXCj?alt=media&token=31e796ad-dbd6-4e4f-a8a9-192f5158684a",
    name: " Tuluk",
    type: "Black Kibal",
    amount: "$124.00",
  },
  {
    image:
      "https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2FbS1hHdO7NvbR1yN5ZPlR?alt=media&token=809a3249-f83d-4aec-b134-34a65ce2ce10",
    name: "Pitaklan",
    type: "Black Kibal",
    amount: "$174.00",
  },
  {
    image:
      "https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2FYIZuxWur1W4fAT6z3ejk?alt=media&token=7dca264f-c345-4cfc-93a8-60217a53f66a",
    name: "Bunikk",
    type: "Saxbomb",
    amount: "$240.00",
  },
  {
    image:
      "https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2FcLGc3mcbZrK3Tl3yJ3xW?alt=media&token=44f74e92-f2ca-4af3-82f6-7a3bcace7f7a",
    name: "Sipon Malapot",
    type: "Salt",
    amount: "$250.00",
  },
  {
    image:
      "https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2FbS1hHdO7NvbR1yN5ZPlR?alt=media&token=809a3249-f83d-4aec-b134-34a65ce2ce10",
    name: "Buldit",
    type: "Black Kibal",
    amount: "$250.00",
  },
  {
    image:
      "https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2FcLGc3mcbZrK3Tl3yJ3xW?alt=media&token=44f74e92-f2ca-4af3-82f6-7a3bcace7f7a",
    name: "Kibal Overload",
    type: "Yezyow Black",
    amount: "$674.00",
  },
  {
    image:
      "https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2FbS1hHdO7NvbR1yN5ZPlR?alt=media&token=809a3249-f83d-4aec-b134-34a65ce2ce10",
    name: "Pitaklan",
    type: "Black Kibal",
    amount: "$174.00",
  },
];

function Header() {
  return (
    <div className="header">
      <div className="logo">
        <img
          alt="Logo"
          src="	https://salinaka-ecommerce.web.app/images/logo-full.059e10fa5fedbfb65165e7565ed3936f.png"
        />
      </div>
      <div className="pages">
        <div>Home</div>
        <div className="active">Shop</div>
        <div>Featured</div>
        <div>Recommended</div>
      </div>
      <div className="input-box">
        <div className="filter">
          <div>Filters</div>
          <svg
            viewBox="64 64 896 896"
            focusable="false"
            data-icon="filter"
            width="1em"
            height="1em"
            fill="currentColor"
            aria-hidden="true"
            className="filter-icon"
          >
            <path d="M880.1 154H143.9c-24.5 0-39.8 26.7-27.5 48L349 597.4V838c0 17.7 14.2 32 31.8 32h262.4c17.6 0 31.8-14.3 31.8-32V597.4L907.7 202c12.2-21.3-3.1-48-27.6-48zM603.4 798H420.6V642h182.9v156zm9.6-236.6l-9.5 16.6h-183l-9.5-16.6L212.7 226h598.6L613 561.4z"></path>
          </svg>
        </div>
        <div className="search-box">
          <div className="search-icon">
            <svg
              viewBox="64 64 896 896"
              focusable="false"
              data-icon="search"
              width="1em"
              height="1em"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0011.6 0l43.6-43.5a8.2 8.2 0 000-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z"></path>
            </svg>
          </div>
          <input
            type="text"
            placeholder="Search product..."
            className="input"
          />
        </div>
      </div>
      <div className="profile-box">
        <div className="shop">
          <svg
            viewBox="64 64 896 896"
            focusable="false"
            data-icon="shopping"
            width="30px"
            height="30px"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M832 312H696v-16c0-101.6-82.4-184-184-184s-184 82.4-184 184v16H192c-17.7 0-32 14.3-32 32v536c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V344c0-17.7-14.3-32-32-32zm-432-16c0-61.9 50.1-112 112-112s112 50.1 112 112v16H400v-16zm392 544H232V384h96v88c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-88h224v88c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-88h96v456z"></path>
          </svg>
        </div>
        <div className="profile-name">Arrow</div>
        <div className="profile-pic"></div>
        <div className="drop-down">
          <svg
            viewBox="64 64 896 896"
            focusable="false"
            data-icon="down"
            width="1em"
            height="1em"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z"></path>
          </svg>
        </div>
      </div>
    </div>
  );
}

function Product(props) {
  const { productInfo } = props;
  return (
    <div className="product-box">
      <div className="product">
        <img src={productInfo.image} className="product-image" />
      </div>
      <div className="product-name">{productInfo.name}</div>
      <div className="product-type">{productInfo.type}</div>
      <div className="product-price">{productInfo.amount}</div>
    </div>
  );
}

function GridBox(props) {
  const { productData } = props;
  return (
    <div className="grid-box">
      {productData.map((productInfo, index) => {
        return <Product productInfo={productInfo} />;
      })}
    </div>
  );
}

function MainPage() {
  return (
    <div className="main-page">
      <Header />
      <GridBox productData={productData} />
    </div>
  );
}

const root = ReactDOM.createRoot(mainContainer);
root.render(<MainPage />);
