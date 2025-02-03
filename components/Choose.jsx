import Image from "next/image";

const Choose = () => {
  return (
    <section className="choose-section">
      <div className="choose-section-text">
        <h2>WHY CHOOSE AC BUS OR AC TRAIN</h2>
        <h2>
          FOR YOUR <span> ONE WAY JOURNEY</span>?
        </h2>
        <p className="choose-text-para">
          Our oneway Car Rental service is cheaper than AC bus and 2-tier AC
          train ticket fares. It reduces your travel time, and you travel in
          your own private space, allowing you to fully enjoy your journey. Our
          one way taxi will come to your doorstep and take you to your desired
          destination. So, book your Cheapest one way cab from Lucknow to
          Gorakhpur or Varanasi to Ayodhya with our reliable Oneway car rental
          service with driver. Experience the convenience of our taxi service,
          where you can rent a car effortlessly and enjoy seamless cab booking.
          Choose our car hire option for a hassle-free and comfortable travel
          experience. We offer outstation cab and intercity travel services,
          ensuring a smooth and enjoyable Luxury ride wherever you need to go.
        </p>
      </div>

      <Image
        src={"/car-map.gif"}
        height={500}
        width={600}
        alt="car animation"
      />
    </section>
  );
};

export default Choose;
