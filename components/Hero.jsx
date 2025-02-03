import React from "react";
import TransportBookingForm from "@/components/TransportBookingForm";

const Hero = () => {
  return (
    <section>
      <div
        className="hero-section"
        style={{ backgroundImage: "url('hero-background.png')" }}
      >
        <div className="hero-section-left">
          <h2>
            India's <span> Leading One</span>
          </h2>
          <h2>
            <span>Way Intercity Cab</span>
          </h2>
          <h2>Service Provider</h2>
        </div>
        <div className="hero-section-right">
          <TransportBookingForm />
        </div>
      </div>
      <div className="hero-section-bottom">
        <div className="hero-section-bottom-left">
          <h2>Transparent Billing</h2>
          <p>GPS Based Billing | No Km Tampering</p>
        </div>
        <div className="hero-section-bottom-middle">
          <h2>Download Now!</h2>
          <img src="/google-apple.png" alt="" />
        </div>
        <div className="hero-section-bottom-right">
          <h2>No return fare</h2>
          <p>Oneway cab fare I No hidden charges</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
