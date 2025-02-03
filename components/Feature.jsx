import {
  CarFront,
  HelpingHand,
  LocateIcon,
  MapPin,
  TrainFrontIcon,
} from "lucide-react";

const Feature = () => {
  return (
    <section>
      <div className="feature-section">
        <div className="feature-card">
          <img src="/hand.png" alt="" />
          <h2>Return Fare, Not Fair!</h2>
          <p>
            Why Pay for Return Journey when you are travelling oneway? Now get
            discounted AC Taxi at just half of the round trip cost for your one
            way travel.
          </p>
        </div>
        <div className="feature-card">
          <img src="/location.png" alt="" />
          <h2>GPS Based Billing System</h2>
          <p>
            Since the GPS data captures the actual distance and time traveled,
            it reduce the chance of Kilometer tampering or discrepancies in
            billing.
          </p>
        </div>
        <div className="feature-card">
          <img src="/driving.png" alt="" />
          <h2>Now available routes are!</h2>
          <p>Lucknow | Gorakhpur | Varanasi | Ayodhya | Allahabad | Kanpur</p>
        </div>
      </div>

      <div className="feature-section-bottom">
        <h2>India's Premier Intercity and Local Taxi Services</h2>
        <p>
          At Yatri Cabs, we pride ourselves on being a top-tier online cab
          booking service, delivering reliable and premium intercity and local
          taxi services. With over a decade of experience, we have become the
          leading chauffeur-driven car rental company in India, renowned for our
          expansive coverage across the country.
        </p>
      </div>
    </section>
  );
};

export default Feature;
