import React from "react";
import FlipMove from "react-flip-move";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />
      </div>
      <div className="home__top">
        <FlipMove appearAnimation="accordionVertical">
          <div className="home__row">
            <Product
              id={Math.random(0, 1) * 100 + 100}
              title="the lean startup the lean startup the lean startup the lean startup the lean startup the lean startup the lean startup"
              price={100}
              image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
              rating={3}
            />

            <Product
              id={Math.random(0, 1) * 100 + 100}
              title="the lean startupthe lean startupthe lean startup"
              price={200}
              image="https://denver-electronics.com/media/22960/speakers.png?mode=pad&width=560"
              rating={3}
            />
          </div>
          <div className="home__row">
            <Product
              id={Math.random(0, 1) * 100 + 100}
              title="the lean startupthe lean startupthe lean startupthe lean startupthe lean startupthe lean startupthe lean startupthe lean startupthe lean startupthe lean startupthe lean startupthe lean startupthe lean startupthe lean startup"
              price={29.99}
              image="https://www.vapulus.com/ar/wp-content/uploads/2018/10/HAVE-5000-PEOPLE-MARKET-YOUR-PRODUCT-IN-30-DAYS.jpg"
              rating={3}
            />
            <Product
              id={Math.random(0, 1) * 100 + 100}
              title="the lean startup"
              price={29.99}
              image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
              rating={3}
            />
            <Product
              id={Math.random(0, 1) * 100 + 100}
              title="the lean startup"
              price={29.99}
              image="https://ekit.co.uk/GalleryEntries/eCommerce_solutions_and_services/MedRes_Product-presentation-2.jpg?q=27012012153123"
              rating={3}
            />
          </div>
          <div className="home__row">
            <Product
              id={Math.random(0, 1) * 100 + 100}
              title="the lean startup"
              price={29.99}
              image="https://www.junglescout.com/wp-content/uploads/2020/06/homepage-laptop-floating-mockup.png"
              rating={3}
            />
          </div>
        </FlipMove>
      </div>
    </div>
  );
}

export default Home;
