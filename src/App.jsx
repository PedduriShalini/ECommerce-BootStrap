function App() {

  const categories = [ { name: "Dairy, Bread & Eggs", img: "/images/category/category-1.jpg" }, 
    { name: "Snack & Munchies", img: "/images/category/category-2.jpg" }, 
    { name: "Bakery & Biscuits", img: "/images/category/category-3.jpg" }, 
    { name: "Instant Food", img: "/images/category/category-4.jpg" },
     { name: "Tea, Coffee & Drinks", img: "/images/category/category-5.jpg" }, 
     { name: "Atta, Rice & Dal", img: "/images/category/category-atta-rice-dal.jpg" }, 
     { name: "Baby Care", img: "/images/category/category-baby-care.jpg" }, 
     { name: "Chicken, Meat & Fish", img: "/images/category/category-chicken-meat-fish.jpg" }, 
     { name: "Cleaning Essentials", img: "/images/category/category-cleaning-essentials.jpg" },
      { name: "Pet Care", img: "/images/category/category-pet-care.jpg" } 
    ];

  const products = [
    { name: "Haldiram's Sev Bhujia", category:"Snack & Munchies",price: 18, img: "/images/products/product-img-1.jpg" },
    { name: "NutriChoice Digestive", category:"Bakery & Biscuits",price: 24, img: "/images/products/product-img-2.jpg" },
    { name: "Cadbury 5 Star Chocolate", category:"Bakery & Biscuits",price: 32, img: "/images/products/product-img-3.jpg" },
    { name: "Onion Flavour Potato",category:"Snack & Munchies", price: 3, img: "/images/products/product-img-4.jpg" },
    { name: "Salted Instant Popcorn",category:"Instant Food", price: 13, img: "/images/products/product-img-5.jpg" },
    { name: "Blueberry Greek Yogurt",category:"Dairy, Bread & Eggs", price: 18, img: "/images/products/product-img-6.jpg" },
    { name: "Britannia Cheese Slices",category:"Dairy, Bread & Eggs", price: 24, img: "/images/products/product-img-7.jpg" },
    { name: "Kellogg's Original Cereals", category:"Instant Food",price: 32, img: "/images/products/product-img-8.jpg" },
    { name: "Slurrp Millet Chocolate",category:"Snack & Munchies", price: 3, img: "/images/products/product-img-9.jpg" },
    { name: "Amul Butter - 500 g", category:"Dairy, Bread & Eggs",price: 13, img: "/images/products/product-img-10.jpg" }
  ];

  return (
    <div>
       <div>

 
  <div className="bg-light py-1 border-bottom">
    <div className="container d-flex justify-content-between">
      <small>Super Value Deals - Save more with coupons</small>
      <span id="selectedLanguage">English</span>
    </div>
  </div>

 
  <div className="py-3 border-bottom">
    <div className="container d-flex align-items-center justify-content-between">

     
      <h4 className="fw-bold text-success m-0">FreshCart</h4>

     
      <div className="d-flex w-50">
        <input
          className="form-control me-2"
          placeholder="Search for products"
        />
        <button className="btn btn-outline-secondary"><i className="bi bi-search"></i></button>
      </div>

  
      <div className="d-flex gap-3 fs-5">
        <div className="d-flex gap-3 fs-5">
  <i className="bi bi-heart"></i>
  <i className="bi bi-person"></i>
  <i className="bi bi-cart"></i>
</div>
      </div>

    </div>
  </div>

 
  <nav className="navbar navbar-expand-lg bg-white shadow-sm">
    <div className="container">

      <button className="btn btn-success me-3">
        ☰ All Departments
      </button>

      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#menu"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="menu">
        <ul className="navbar-nav">

          <li className="nav-item"><a className="nav-link">Home</a></li>
          <li className="nav-item"><a className="nav-link">Shop</a></li>
          <li className="nav-item"><a className="nav-link">Stores</a></li>
          <li className="nav-item"><a className="nav-link">Mega menu</a></li>
          <li className="nav-item"><a className="nav-link">Pages</a></li>
          <li className="nav-item"><a className="nav-link">Account</a></li>

        </ul>
      </div>

    </div>
  </nav>

</div>

       <div
  id="carouselExample"
  className="carousel slide mb-5"
  data-bs-ride="carousel"
>
  <div className="carousel-inner">

    <div className="carousel-item active">
      <img
        src="/images/slide-1.jpg"
        className="d-block w-100"
        style={{ height: "400px", objectFit: "cover" }}
        alt="slide1"
      />
    </div>

    <div className="carousel-item">
      <img
        src="/images/slide-2.jpg"
        className="d-block w-100"
        style={{ height: "400px", objectFit: "cover" }}
        alt="slide2"
      />
    </div>

  </div>

  <button
    className="carousel-control-prev"
    type="button"
    data-bs-target="#carouselExample"
    data-bs-slide="prev"
  >
    <span className="carousel-control-prev-icon"></span>
  </button>

  <button
    className="carousel-control-next"
    type="button"
    data-bs-target="#carouselExample"
    data-bs-slide="next"
  >
    <span className="carousel-control-next-icon"></span>
  </button>
</div>
     
      <div className="container">
        <h3 className="mb-3">Featured Categories</h3>

        <div className="d-flex gap-3">
          {categories.map((item, index) => (
            <div className="card text-center p-3" style={{ width: "150px" }} key={index}>
              <img src={item.img} style={{ height: "80px", objectFit: "contain" }} />
              <p className="mt-2">{item.name}</p>
            </div>
          ))}
        </div>
      </div>

     
      <div className="container mt-5">
        <div className="row">

          <div className="col-md-6 mb-3">
            <div className="card border-0 rounded-4 overflow-hidden">
              <img src="/images/grocery-banner.png"
                style={{ height: "250px", objectFit: "cover" }} />

              <div className="card-img-overlay d-flex flex-column justify-content-center align-items-start ps-4">
                <h4>Fruits & Vegetables</h4>
                <p>Get Upto 30% Off</p>
                <button className="btn btn-dark px-3">Shop Now</button>
              </div>
            </div>
          </div>

        
          <div className="col-md-6 mb-3">
            <div className="card border-0 rounded-4 overflow-hidden">
              <img src="/images/grocery-banner-2.jpg"
                style={{ height: "250px", objectFit: "cover" }} />

              <div className="card-img-overlay d-flex flex-column justify-content-center align-items-start ps-4">
                <h4>Freshly Baked Buns</h4>
                <p>Get Upto 25% Off</p>
                <button className="btn btn-dark px-3">Shop Now</button>
              </div>
            </div>
          </div>

        </div>
      </div>

 
      <div className="container mt-5">
        <h3>Popular Products</h3>

        <div className="row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-5 g-3">
          {products.map((item, index) => (
            <div className="col" key={index}>
  <div className="card p-3 h-100 d-flex flex-column">

    <img
      src={item.img}
      alt={item.name}
      style={{ height: "210px", objectFit: "contain" }}
    />

    <small className="text-muted">{item.category}</small>

    <p className="mt-2 text-truncate">{item.name}</p>

    <div className="d-flex justify-content-between align-items-center mt-auto">
      <span>${item.price}</span>
      <button className="btn btn-success btn-sm">+ Add</button>
    </div>

  </div>
</div>
          ))}
        </div>
      </div>

    </div>
  );
}

export default App;