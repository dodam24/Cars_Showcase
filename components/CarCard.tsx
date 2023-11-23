"use client";

import { useState } from "react";
import Image from "next/image";
import { CarProps } from "@/types";
import CustomButton from "./CustomButton";
import { calculateCarRent, generateCarImageUrl } from "@/utils";
import CarDetails from "./CarDetails";

interface CarCardProps {
  car: CarProps;
}

// CarCard 컴포넌트 정의
const CarCard = ({ car }: CarCardProps) => {
  const { city_mpg, year, make, model, transmission, drive } = car;

  const [isOpen, setIsOpen] = useState(false);

  // 도시 연비와 연도를 기반으로 차량의 렌탈 비용 계산
  const carRent = calculateCarRent(city_mpg, year);

  return (
    <div className="car-card group">
      {/* 차량 타이틀을 제조사와 모델명으로 표시 */}
      <div className="car-card__content">
        <h2 className="car-card__content-title">
          {make} {model}
        </h2>
      </div>

      {/* 일일 차량 렌탈 비용 표시 */}
      <p className="flex mt-6 text-[32px] leading-[38px] font-extrabold">
        <span className="self-start text-[14px] leading-[17px] font-semibold">$</span>
        {carRent}
        <span className="self-end text-[14px] leading-[17px] font-medium">/day</span>
      </p>

      {/* 차량 이미지 */}
      <div className="relative w-full h-40 my-3 object-contain">
        <Image
          src={generateCarImageUrl(car)}
          alt="car model"
          fill
          priority
          className="object-contain"
        />
      </div>

      {/* 하단의 차량 세부 아이콘 표시 (변속기 유형, 구동 유형, 갤런당 마일 수) */}
      <div className="relative flex w-full mt-2">
        <div className="flex group-hover:invisible w-full justify-between text-gray">
          <div className="flex flex-col justify-center items-center gap-2">
            <Image
              src="/steering-wheel.svg"
              width={20}
              height={20}
              alt="steering wheel"
            />
            <p className="text-[14px] leading-[17px]">
              {transmission === "a" ? "Automatic" : "Manual"}
            </p>
          </div>
          <div className="car-card__icon">
            <Image src="/tire.svg" width={20} height={20} alt="tire" />
            <p className="car-card__icon-text">{drive.toUpperCase()}</p>
          </div>
          <div className="car-card__icon">
            <Image src="/gas.svg" width={20} height={20} alt="gas" />
            <p className="car-card__icon-text">{city_mpg} MPG</p>
          </div>
        </div>

        {/* '더 보기' 버튼 */}
        <div className="car-card__btn-container">
          <CustomButton
            title="더 보기"
            containerStyles="w-full py-[16px]
            rounded-full bg-primary-blue"
            textStyles="text-white text-[14px] leading-[17px] font-bold"
            rightIcon="/right-arrow.svg"
            handleClick={() => setIsOpen(true)}
          />
        </div>
      </div>

      <CarDetails
        isOpen={isOpen}
        closeModal={() => setIsOpen(false)}
        car={car}
      />
    </div>
  );
};

export default CarCard;
