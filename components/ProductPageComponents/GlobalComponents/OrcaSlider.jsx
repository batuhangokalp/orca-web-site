import styles from "../../../styles/Products.module.css";
import Slider from "./Slider";

const OrcaSlider = ({
  sliderSmallHeader,
  sliderLargeHeader,
  firstImage,
  secondImage,
  thirdImage,
}) => {

  return (
    <>
      <div className={styles.sliderContainer}>
        <div>
          <span>{sliderSmallHeader}</span>
          <div className={styles.rectangleAbout}></div>
        </div>
        <h1>{sliderLargeHeader}</h1>
        <div className={styles.imageSlider}>
          <Slider
            firstImage={firstImage}
            secondImage={secondImage}
            thirdImage={thirdImage}
          />
        </div>
      </div>
    </>
  );
};

export default OrcaSlider;
