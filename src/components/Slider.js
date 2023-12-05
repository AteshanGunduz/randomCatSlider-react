import { useState } from "react";


const Slider = ({imageUrl, clickLeft, clickRight}) => {
  const [slideDirection, setSlideDirection] = useState('');

  const handleLeftClick = () => {
    setSlideDirection('slide-right');
    clickLeft();
  };

  const handleRightClick = () => {
    setSlideDirection('slide-left');
    clickRight();
  };

  const handleAnimationEnd = () => {
    setSlideDirection('');
  };


  return (
    <div className="slider">
      <div className="buttons">
        <button onClick={handleLeftClick}>👈</button>
        <button onClick={handleRightClick}>👉</button>
      </div>
      <div className={`imgContainer ${slideDirection}`} onAnimationEnd={handleAnimationEnd}>
        <img src={imageUrl} width="350px"className="slider-image"/>
      </div>
    </div>
  )
}
export default Slider