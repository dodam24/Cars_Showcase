"use client";

import Image from "next/image";
import CustomButton from "./CustomButton";

const Hero = () => {
  const handleScroll = () => {
    // "discover"라는 ID를 가진 요소를 찾아서 nextSection에 할당
    const nextSection = document.getElementById("discover");

    // nextSection이 존재하면 스크롤 효과로 해당 섹션으로 이동
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero__title">
          빠르고 쉽게 자동차를 찾고, 예약하고, 렌트하세요!
        </h1>

        <p className="hero__subtitle">
          간편한 예약 프로세스로 자동차 렌트를 진행하세요.
        </p>

        <CustomButton
          title="Explore Cars"
          containerStyles="bg-primary-blue text-white rounded-full mt-10"
          handleClick={handleScroll}
        />
      </div>
      <div className="hero__image-container">
        <div className="hero__image">
          <Image src="/hero.png" alt="hero" fill className="object-contain" />
        </div>

        <div className="hero__image-overlay" />
      </div>
    </div>
  );
};

export default Hero;
