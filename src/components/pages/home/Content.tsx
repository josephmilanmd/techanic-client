import background from 'assets/images/content-background.svg';
import { Button } from 'components/core';

const Content = () => {
  return (
    <div className="content">
      <img src={background} alt="" />
      <div className="content__container">
        <h2 className="content__container__title">HAVE SOME PROBLEMS WITH YOUR CAR?</h2>
        <span className="content__container__subtitle">
          Join with us today to ensure you have an assistant at every road
        </span>
        <Button color="primary">Get Started</Button>
      </div>
    </div>
  );
};

export default Content;
