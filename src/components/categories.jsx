import React from "react";
import "../styles/category.css";

function Category(){
   const categories = [
    { name: "Dairy, Bread & Eggs", img: "/images/category/category-1.jpg" }, 
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

  return (
    <div className="container category-wrapper">
      <h3 className="mb-3 mt-4">Featured Categories</h3>

      <div className="d-flex gap-3 category-list">
        {categories.map((item, index) => (
          <div className="card text-center p-3 category-card" key={index}>
            <img src={item.img} className="category-img" />
            <p className="mt-2">{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Category;