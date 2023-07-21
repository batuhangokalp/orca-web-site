import Image from 'next/image';
import Carousel from 'react-bootstrap/Carousel';

function Slider({ firstImage, secondImage, thirdImage }) {
  return (
    <>
      {
        (firstImage) ? (
          <Carousel variant='dark' interval={3000} >
            <Carousel.Item>
              <Image
                src={firstImage}
                alt="orca, product, orca one app, business, orca business solutions, solutions, commerce, e-commerce, navision, software, development, stock, stock management, company"
                width={300}
                height={500}
                quality={100}
              />
            </Carousel.Item>
            <Carousel.Item>
              <Image
                src={secondImage}
                alt="orca, product, orca one app, business, orca business solutions, solutions, commerce, e-commerce, navision, software, development, stock, stock management, company"
                width={300}
                height={500}
                quality={100}
              />
            </Carousel.Item>
            <Carousel.Item>
              <Image
                src={thirdImage}
                alt="orca, product, orca one app, business, orca business solutions, solutions, commerce, e-commerce, navision, software, development, stock, stock management, company"
                width={300}
                height={500}
                quality={100}
              />
            </Carousel.Item>
          </Carousel>
        ) : (
          <p></p>
        )
      }
    </>
  );
}
export default Slider;