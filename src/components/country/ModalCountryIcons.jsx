import classes from "./modalCountry.module.scss";
import ModalLayout from "../ui/ModalLayout";
import CountryDetailsBorder50 from "../ui/CountryDetailsBorder50";
import { useEffect, useState } from "react";

const ModalCountryIcons = (props) => {
  useEffect(() => {
    if (window.innerWidth <= 850) {
      setNumberOfDots(5);
    }
  }, []);
  const [numberOfDots, setNumberOfDots] = useState(2);
  const [pageNumber, setPageNumber] = useState(1);
  const incrementPageNum = () => {
    if (numberOfDots == 5) {
      if (pageNumber == 5) {
        setPageNumber(5);
      } else {
        setPageNumber(pageNumber + 1);
      }
    } else {
      setPageNumber(2);
    }
  };
  const decrementPageNum = () => {
    if (numberOfDots == 5) {
      if (pageNumber == 1) {
        setPageNumber(1);
      } else {
        setPageNumber(pageNumber - 1);
      }
    } else {
      setPageNumber(1);
    }
  };
  return (
    <ModalLayout>
      <span className={classes["header-info"]}>Znaczenie ikon</span>
      <div className={classes["content-row"]}>
        <button
          className={classes["content-row__button"]}
          onClick={decrementPageNum}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="1rem"
            viewBox="0 0 320 512"
          >
            <path
              fill="white"
              d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"
            />
          </svg>
        </button>
        {numberOfDots == 2 && (
          <>
            {pageNumber == 1 && (
              <>
                <div className={classes["content-row__column"]}>
                  <CountryDetailsBorder50 type="low" border="purple" />
                  <span>Niska temperatura</span>
                </div>
                <div className={classes["content-row__column"]}>
                  <CountryDetailsBorder50 type="medium" border="purple" />
                  <span>Średnia temperatura</span>
                </div>
                <div className={classes["content-row__column"]}>
                  <CountryDetailsBorder50 type="high" border="purple" />
                  <span>Wysoka temperatura</span>
                </div>
              </>
            )}
            {pageNumber == 2 && (
              <>
                <div className={classes["content-row__column"]}>
                  <CountryDetailsBorder50 type="leftHand" border="purple" />
                  <span>Ruch lewostronny</span>
                </div>
                <div className={classes["content-row__column"]}>
                  <CountryDetailsBorder50 type="rightHand" border="purple" />
                  <span>Ruch prawostronny</span>
                </div>
              </>
            )}
          </>
        )}
        {numberOfDots == 5 && (
          <>
            {pageNumber == 1 && (
              <div className={classes["content-row__column"]}>
                <CountryDetailsBorder50 type="low" border="purple" />
                <span>Niska temperatura</span>
              </div>
            )}
            {pageNumber == 2 && (
              <div className={classes["content-row__column"]}>
                <CountryDetailsBorder50 type="medium" border="purple" />
                <span>Średnia temperatura</span>
              </div>
            )}
            {pageNumber == 3 && (
              <div className={classes["content-row__column"]}>
                <CountryDetailsBorder50 type="high" border="purple" />
                <span>Wysoka temperatura</span>
              </div>
            )}
            {pageNumber == 4 && (
              <div className={classes["content-row__column"]}>
                <CountryDetailsBorder50 type="leftHand" border="purple" />
                <span>Ruch lewostronny</span>
              </div>
            )}
            {pageNumber == 5 && (
              <div className={classes["content-row__column"]}>
                <CountryDetailsBorder50 type="rightHand" border="purple" />
                <span>Ruch prawostronny</span>
              </div>
            )}
          </>
        )}
        <button
          className={classes["content-row__button"]}
          onClick={incrementPageNum}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="1rem"
            viewBox="0 0 320 512"
          >
            <path
              fill="white"
              d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"
            />
          </svg>
        </button>
      </div>
      <span className={classes["dots-box"]}>
        <span
          className={`${classes["dots-box__dot"]} ${
            pageNumber == 1
              ? classes["dots-box__dot--active"]
              : classes["dots-box__dot--disabled"]
          }`}
        />
        <span
          className={`${classes["dots-box__dot"]} ${
            pageNumber == 2
              ? classes["dots-box__dot--active"]
              : classes["dots-box__dot--disabled"]
          }`}
        />
        {numberOfDots == 5 && (
          <>
            <span
              className={`${classes["dots-box__dot"]} ${
                pageNumber == 3
                  ? classes["dots-box__dot--active"]
                  : classes["dots-box__dot--disabled"]
              }`}
            />
            <span
              className={`${classes["dots-box__dot"]} ${
                pageNumber == 4
                  ? classes["dots-box__dot--active"]
                  : classes["dots-box__dot--disabled"]
              }`}
            />
            <span
              className={`${classes["dots-box__dot"]} ${
                pageNumber == 5
                  ? classes["dots-box__dot--active"]
                  : classes["dots-box__dot--disabled"]
              }`}
            />
          </>
        )}
      </span>
    </ModalLayout>
  );
};
export default ModalCountryIcons;
