"use client";
import { useDispatch, useSelector } from "react-redux";
import styles from "@/app/TransportBookingForm.module.css";
import {
  setServiceType,
  setTripType,
  setFromLocation,
  setToLocation,
  setPickUpDate,
  setReturnDate,
  setPickUpTime,
} from "@/store/transportBookingSlice";

const TransportBookingForm = () => {
  const dispatch = useDispatch();
  const booking = useSelector((state) => state.booking);

  console.log(
    booking.fromLocation,
    booking.toLocation,
    booking.pickUpDate,
    booking.returnDate,
    booking.pickUpTime
  );

  return (
    <div className={styles.formContainer}>
      <div className={styles.formCard}>
        {/* Service Types */}
        <div className={styles.serviceTypes}>
          <button
            className={`${styles.serviceButton} ${
              booking.serviceType === "outstation" ? styles.active : ""
            }`}
            onClick={() => dispatch(setServiceType("outstation"))}
          >
            Outstation
          </button>
          <button
            className={`${styles.serviceButton} ${
              booking.serviceType === "local" ? styles.active : ""
            }`}
            onClick={() => dispatch(setServiceType("local"))}
          >
            Local
          </button>
          <button
            className={`${styles.serviceButton} ${
              booking.serviceType === "airport" ? styles.active : ""
            }`}
            onClick={() => dispatch(setServiceType("airport"))}
          >
            Airport
          </button>
        </div>

        {/* Trip Types */}
        <div className={styles.tripTypes}>
          <button
            className={`${styles.tripButton} ${
              booking.tripType === "oneWay" ? styles.active : ""
            }`}
            onClick={() => dispatch(setTripType("oneWay"))}
          >
            One Way
          </button>
          <button
            className={`${styles.tripButton} ${
              booking.tripType === "roundTrip" ? styles.active : ""
            }`}
            onClick={() => dispatch(setTripType("roundTrip"))}
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
                value={booking.fromLocation}
                onChange={(e) => dispatch(setFromLocation(e.target.value))}
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
                value={booking.toLocation}
                onChange={(e) => dispatch(setToLocation(e.target.value))}
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
                value={booking.pickUpDate}
                onChange={(e) => dispatch(setPickUpDate(e.target.value))}
              />
            </div>
            {booking.tripType === "roundTrip" && (
              <div className={styles.inputField}>
                <label>RETURN DATE</label>
                <input
                  type="date"
                  value={booking.returnDate}
                  onChange={(e) => dispatch(setReturnDate(e.target.value))}
                />
              </div>
            )}
            <div className={styles.inputField}>
              <label>PICK UP AT</label>
              <input
                type="time"
                value={booking.pickUpTime}
                onChange={(e) => dispatch(setPickUpTime(e.target.value))}
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
