"use client";
import { useState } from "react";
import styles from "@/app/TransportBookingForm.module.css";

const TransportBookingForm = () => {
  const [serviceType, setServiceType] = useState("outstation");
  const [tripType, setTripType] = useState("oneWay");

  return (
    <div className={styles.formContainer}>
      <div className={styles.formCard}>
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

        <div className={styles.formFields}>
          <div className={styles.locationGroup}>
            <div className={styles.inputField}>
              <label>FROM</label>
              <input type="text" placeholder="Enter pickup location" />
            </div>
            <div className={styles.inputField}>
              <label>TO</label>
              <input type="text" placeholder="Enter drop location" />
            </div>
          </div>

          <div className={styles.dateTimeGroup}>
            <div className={styles.inputField}>
              <label>PICK UP DATE</label>
              <input type="date" />
            </div>
            {tripType === "roundTrip" && (
              <div className={styles.inputField}>
                <label>RETURN DATE</label>
                <input type="date" />
              </div>
            )}
            <div className={styles.inputField}>
              <label>PICK UP AT</label>
              <input type="time" />
            </div>
          </div>
        </div>

        <button className={styles.exploreButton}>EXPLORE CABS</button>
      </div>
    </div>
  );
};

export default TransportBookingForm;
