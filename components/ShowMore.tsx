"use client";

import { ShowMoreProps } from "@/types";
import CustomButton from "./CustomButton";

const ShowMore = ({ pageNumber, isNext, setLimit }: ShowMoreProps) => {
  // 페이지 이동을 처리하는 함수
  const handleNavigation = () => {
    // 새로운 limit 값을 계산
    const newLimit = (pageNumber + 1) * 10; 

    // 상위 컴포넌트로 새로운 limit 값을 전달
    setLimit(newLimit);
  };

  return (
    <div className="w-full flex-center gap-5 mt-10">
      {/* 다음 페이지가 없을 때만 '더 보기' 버튼이 보이도록 설정 */}
      {!isNext && (
        <CustomButton
          title="더 보기"
          btnType="button"
          containerStyles="bg-primary-blue rounded-full text-white"
          handleClick={handleNavigation}
        />
      )}
    </div>
  );
};

export default ShowMore;
