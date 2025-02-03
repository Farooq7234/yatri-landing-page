import { CircleDollarSign, Flag, Smartphone, Users } from "lucide-react";

const Service = () => {
  return (
    <>
      <section className="service-section">
        <div className="service-main">
          <img src="/rental-car.png" alt="" />
          <div className="service-cards">
            <h2>
              <span>WHY</span> YATRI ?
            </h2>
            <div className="service-card">
              <Flag size={85} />
              <div className="service-card-text">
                <h4>Fast response time</h4>
                <p>
                  Experience the Best Car Rental Service with Driver for Local
                  or Outstation Trips. Enjoy prompt response times and seamless
                  car hire service, ensuring you get on the road quickly.
                </p>
              </div>
            </div>
            <div className="service-card">
              <Users size={85} />
              <div className="service-card-text">
                <h4>Vast fleet</h4>
                <p>
                  We offer a wide range of rental cars including Sedans, SUVs,
                  MUVs, premium Sedans, and Tempo Travellers to meet all your
                  needs.
                </p>
              </div>
            </div>
            <div className="service-card">
              <Smartphone size={85} />
              <div className="service-card-text">
                <h4>Easy to order</h4>
                <p>
                  Easily Book a Cab Online through our user-friendly website,
                  mobile application, or by calling our customer support team.
                </p>
              </div>
            </div>
            <div className="service-card">
              <CircleDollarSign size={85} />
              <div className="service-card-text">
                <h4>Great tariffs</h4>
                <p>
                  Rent a Car at the Lowest Rates! Our car hire tariffs are
                  highly competitive compared to other operators. Book online
                  cabs at the best prices with Yatri Car Rental.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="service-section-bottom">
          <div className="service-section-b-cards">
            <div className="service-section-b-card">
              <h2>CAR TYPE</h2>
              <div className="service-section-b-para">
                <p>AC Sedans</p>
                <p>AC Hatchbacks</p>
                <p>AC SUV</p>
              </div>
            </div>
            <div className="service-section-b-card">
              <h2>MODEL INCLUDES</h2>
              <div className="service-section-b-para">
                <p>Etios, Amaze, Dzire etc.</p>
                <p>Wagon R, Celerio, Micra etc.</p>
                <p>Ertiga, Xylo etc.</p>
              </div>
            </div>
            <div className="service-section-b-card">
              <h2>PASSENGERS</h2>
              <div className="service-section-b-para">
                <p>4 Pax</p>
                <p>4 Pax</p>
                <p>6-7 Pax</p>
              </div>
            </div>
            <div className="service-section-b-card">
              <h2>IDEAL FOR</h2>
              <div className="service-section-b-para">
                <p>Comfortable trips with small families</p>
                <p>Budget trips over short distances</p>
                <p>Premium trips with large families</p>
              </div>
            </div>
            <div className="service-section-b-card">
              <h2>FARE</h2>
              <div className="service-section-b-para">
                <p>Rs.11/KM</p>
                <p>Rs.11/KM</p>
                <p>Rs.13/KM</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Service;
