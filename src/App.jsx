import React from 'react';
import './App.css';
import { FaShoppingBag, FaTimes, FaShoppingCart, FaStar, FaBars } from 'react-icons/fa';
import { FaFacebookF, FaTwitter, FaInstagram, FaPinterestP, FaYoutube } from 'react-icons/fa';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Features />
      <FeaturedProducts />
      <Banner />
      <Footer />
    </div>
  );
}

const Header = () => (
  <header>
    <a href="#"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Official_logo_for_the_Coffee_Meetup.png/600px-Official_logo_for_the_Coffee_Meetup.png" alt="Logo" /></a>
    <div>
      <ul id="navbar">
        <li><a href="#" className="active">Home</a></li>
        <li><a href="#">Shop</a></li>
        <li><a href="#">Blog</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
        <li><a href="#" id="lg-bag"><FaShoppingBag /></a><span className="quantity">0</span></li>
        <li><a href="#" id="close"><FaTimes /></a></li>
      </ul>
    </div>
    <div id="mobile">
      <a href="#"><FaShoppingBag /><span className="quantity">0</span></a>
      <FaBars id="bar" />
    </div>
  </header>
);

const Hero = () => (
  <section id="hero">
    <h4>Trade-in-offer</h4>
    <h2>Super value deals</h2>
    <h1>On all products</h1>
    <p>Save more with coupons & up to 70% off!</p>
    <button>Shop Now</button>
  </section>
);

const Features = () => (
  <section id="feature" className="section-p1">
    <div className="fe-box">
      <img src="https://via.placeholder.com/150/0000FF/808080?text=Free+Shipping" alt="Free Shipping" />
      <h6>Free Shipping</h6>
    </div>
    <div className="fe-box">
      <img src="https://via.placeholder.com/150/008000/FFFFFF?text=Online+Order" alt="Online Order" />
      <h6>Online Order</h6>
    </div>
    <div className="fe-box">
      <img src="https://via.placeholder.com/150/FF0000/FFFFFF?text=Save+Money" alt="Save Money" />
      <h6>Save Money</h6>
    </div>
    <div className="fe-box">
      <img src="https://via.placeholder.com/150/FFFF00/000000?text=Promotions" alt="Promotions" />
      <h6>Promotions</h6>
    </div>
    <div className="fe-box">
      <img src="https://via.placeholder.com/150/FF00FF/FFFFFF?text=Happy+Sell" alt="Happy Sell" />
      <h6>Happy Sell</h6>
    </div>
    <div className="fe-box">
      <img src="https://via.placeholder.com/150/00FFFF/000000?text=24/7+Support" alt="24/7 Support" />
      <h6>24/7 Support</h6>
    </div>
  </section>
);

const FeaturedProducts = () => (
  <section id="product1" className="section-p1">
    <h2>Featured Products</h2>
    <p>Summer Collection New Modern Design</p>
    <div className="pro-container">
      <Product
        imgSrc="https://via.placeholder.com/200/0000FF/FFFFFF?text=Product+1"
        description="Adidas Running Sneakers"
        price="$200.00"
      />
      <Product
        imgSrc="https://via.placeholder.com/200/008000/FFFFFF?text=Product+2"
        description="Nike Air Max 270"
        price="$250.00"
      />
      <Product
        imgSrc="https://via.placeholder.com/200/FF0000/FFFFFF?text=Product+3"
        description="Puma Smart Shoes"
        price="$180.00"
      />
      <Product
        imgSrc="https://via.placeholder.com/200/FFFF00/000000?text=Product+4"
        description="Reebok Classic"
        price="$220.00"
      />
      <Product
        imgSrc="https://via.placeholder.com/200/FF00FF/FFFFFF?text=Product+5"
        description="Under Armour Hovr"
        price="$190.00"
      />
      <Product
        imgSrc="https://via.placeholder.com/200/00FFFF/000000?text=Product+6"
        description="Asics Gel Lyte"
        price="$160.00"
      />
      <Product
        imgSrc="https://via.placeholder.com/200/0000FF/FFFFFF?text=Product+7"
        description="New Balance 574"
        price="$210.00"
      />
      <Product
        imgSrc="https://via.placeholder.com/200/008000/FFFFFF?text=Product+8"
        description="Vans Old Skool"
        price="$140.00"
      />
    </div>
  </section>
);

const Product = ({ imgSrc, description, price }) => (
  <div className="pro">
    <img src={imgSrc} alt={description} />
    <div className="des">
      <span>Brand</span>
      <h5>{description}</h5>
      <div className="star">
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
      </div>
      <h4>{price}</h4>
    </div>
    <a href="#"><FaShoppingCart className="cart" /></a>
  </div>
);

const Banner = () => (
  <section id="banner" className="section-m1">
    <h4>Repair Services</h4>
    <h2>Up to <span>70% Off</span> - All T-Shirts & Accessories</h2>
    <button className="normal">Explore More</button>
  </section>
);

const Footer = () => (
  <footer className="section-p1">
    <div className="col">
      <img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Official_logo_for_the_Coffee_Meetup.png/600px-Official_logo_for_the_Coffee_Meetup.png" alt="Logo" />
      <h4>Contact</h4>
      <p><strong>Address: </strong>562 Wellington Road, Street 32, San Francisco</p>
      <p><strong>Phone: </strong>+1 5589 55488 55</p>
      <p><strong>Hours: </strong>10:00 - 18:00, Mon - Sat</p>
    </div>
    <div className="col">
      <h4>About</h4>
      <a href="#">About Us</a>
      <a href="#">Delivery Information</a>
      <a href="#">Privacy Policy</a>
      <a href="#">Terms & Conditions</a>
      <a href="#">Contact Us</a>
    </div>
    <div className="col">
      <h4>My Account</h4>
      <a href="#">Sign In</a>
      <a href="#">View Cart</a>
      <a href="#">My Wishlist</a>
      <a href="#">Track My Order</a>
      <a href="#">Help</a>
    </div>
    <div className="col install">
      <h4>Install App</h4>
      <p>From App Store or Google Play</p>
      <div className="row">
        <img src="https://via.placeholder.com/150/0000FF/FFFFFF?text=App+Store" alt="App Store" />
        <img src="https://via.placeholder.com/150/FF0000/FFFFFF?text=Google+Play" alt="Google Play" />
      </div>
      <p>Secured Payment Gateways</p>
      <img src="https://via.placeholder.com/200/FFFF00/000000?text=Payments" alt="Payment Methods" />
    </div>
    <div className="follow">
      <h4>Follow Us</h4>
      <div className="icon">
        <FaFacebookF />
        <FaTwitter />
        <FaInstagram />
        <FaPinterestP />
        <FaYoutube />
      </div>
    </div>
  </footer>
);

export default App;
