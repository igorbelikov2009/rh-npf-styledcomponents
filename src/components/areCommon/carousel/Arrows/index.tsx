import React, { FC } from "react";
import "./Arrows.scss";

export interface ArrowsProps {
  isHoveredLeft: boolean;
  isBlurredLeft: boolean;
  isHoveredRight: boolean;
  isBlurredRight: boolean;
  onClickLeft: () => void;
  onClickRight: () => void;
}

const Arrows: FC<ArrowsProps> = ({
  isHoveredLeft,
  isBlurredLeft,
  isHoveredRight,
  isBlurredRight,
  onClickLeft,
  onClickRight,
}) => {
  return (
    <div className={"arrows"}>
      <div
        className={isHoveredLeft ? "left-arrow__cursor-pointer" : "left-arrow__cursor-default"}
        onClick={onClickLeft}
      >
        <img className={"left-image"} src="/icons/triple/Arrow Right/Colored.svg" alt="arrow" />

        <img
          className={isBlurredLeft ? "left-image_opacity-04" : "left-image_opacity-1"}
          src="/icons/triple/Arrow Right/Dark.svg"
          alt="arrow"
        />
      </div>

      <div
        className={isHoveredRight ? "right-arrow__cursor-pointer" : "right-arrow__cursor-default"}
        onClick={onClickRight}
      >
        <img className={"right-image"} src="/icons/triple/Arrow Right/Colored.svg" alt="arrow" />

        <img
          className={isBlurredRight ? "right-image_opacity-04" : "right-image_opacity-1"}
          src="/icons/triple/Arrow Right/Dark.svg"
          alt="arrow"
        />
      </div>
    </div>
  );
};

export default Arrows;
