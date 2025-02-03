"use client";
import { useState } from "react";
import styles from "@/app/TransportBookingForm.module.css";

const TransportBookingForm = () => {
  // Initialize state values to ensure controlled inputs.
  const [serviceType, setServiceType] = useState("outstation");
  const [tripType, setTripType] = useState("oneWay");
  const [fromLocation, setFromLocation] = useState("");
  const [toLocation, setToLocation] = useState("");
  const [pickUpDate, setPickUpDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [pickUpTime, setPickUpTime] = useState("");

  console.log(fromLocation, toLocation, pickUpDate, returnDate, pickUpTime);

  return (
    <div className={styles.formContainer}>
      <div className={styles.formCard}>
        {/* Service Types */}
        <div className={styles.serviceTypes}>
          <button
            className={`${styles.serviceButton} ${
              serviceType === "outstation" ? styles.active : ""
            }`}
            onClick={() => setServiceType("outstation")}
          >
            Outstation
          </button>
          <button
            className={`${styles.serviceButton} ${
              serviceType === "local" ? styles.active : ""
            }`}
            onClick={() => setServiceType("local")}
          >
            Local
          </button>
          <button
            className={`${styles.serviceButton} ${
              serviceType === "airport" ? styles.active : ""
            }`}
            onClick={() => setServiceType("airport")}
          >
            Airport
          </button>
        </div>

        {/* Trip Types */}
        <div className={styles.tripTypes}>
          <button
            className={`${styles.tripButton} ${
              tripType === "oneWay" ? styles.active : ""
            }`}
            onClick={() => setTripType("oneWay")}
          >
            One Way
          </button>
          <button
            className={`${styles.tripButton} ${
              tripType === "roundTrip" ? styles.active : ""
            }`}
            onClick={() => setTripType("roundTrip")}
          >
            Round Trip
          </button>
        </div>

        {/* Form Fields */}
        <div className={styles.formFields}>
          <div className={styles.locationGroup}>
            <div className={styles.inputField}>
              <label>FROM</label>
              <select
                value={fromLocation}
                onChange={(e) => setFromLocation(e.target.value)}
              >
                <option value="" disabled>
                  Select pickup location
                </option>
                <option value="Mumbai">Mumbai</option>
                <option value="Delhi">Delhi</option>
                <option value="Bengaluru">Bengaluru</option>
                <option value="Chennai">Chennai</option>
              </select>
            </div>
            <div className={styles.inputField}>
              <label>TO</label>
              <select
                value={toLocation}
                onChange={(e) => setToLocation(e.target.value)}
              >
                <option value="" disabled>
                  Select drop location
                </option>
                <option value="Mumbai">Mumbai</option>
                <option value="Delhi">Delhi</option>
                <option value="Bengaluru">Bengaluru</option>
                <option value="Chennai">Chennai</option>
              </select>
            </div>
          </div>

          <div className={styles.dateTimeGroup}>
            <div className={styles.inputField}>
              <label>PICK UP DATE</label>
              <input
                type="date"
                value={pickUpDate}
                onChange={(e) => setPickUpDate(e.target.value)}
              />
            </div>
            {tripType === "roundTrip" && (
              <div className={styles.inputField}>
                <label>RETURN DATE</label>
                <input
                  type="date"
                  value={returnDate}
                  onChange={(e) => setReturnDate(e.target.value)}
                />
              </div>
            )}
            <div className={styles.inputField}>
              <label>PICK UP AT</label>
              <input
                type="time"
                value={pickUpTime}
                onChange={(e) => setPickUpTime(e.target.value)}
              />
            </div>
          </div>
        </div>

        <button className={styles.exploreButton}>EXPLORE CABS</button>
      </div>
    </div>
  );
};

export default TransportBookingForm;
