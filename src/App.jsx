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

    <nav className="navbar navbar-expand-lg bg-body-tertiary"> 
      <div className="container-fluid"> 
        <a className="navbar-brand" href="#">FreshCart</a> 
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"> <span className="navbar-toggler-icon"></span> 
        </button> 
        <div className="collapse navbar-collapse" id="navbarSupportedContent"> 
          <ul className="navbar-nav me-auto mb-2 mb-lg-0"> 
            <li className="nav-item"> 
              <a className="nav-link active" href="#">Home</a> 
              </li> <li className="nav-item"> <a className="nav-link" href="#">Link</a> 
              </li>
               </ul>
                <form>
                   <input className="form-control me-2" type="search" placeholder="Search" /> 
                   <button className="btn btn-outline-success" type="submit"> 
                    Search 
                    </button>
                     </form>
                      </div>
                       </div> 
                       </nav>
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

        <div className="row">
          {products.map((item, index) => (
            <div className="col-md-2" key={index}>
              <div className="card p-3">
                <img src={item.img} style={{ height: "120px", objectFit: "contain" }} />
                   <p className="mt-2">{item.category}</p>
                <p className="mt-2">{item.name}</p>

                <div className="d-flex justify-content-between align-items-center">
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