"use client";

import { CustomButtonProps } from '@/types';
import Image from 'next/image';

const CustomButton = ({ title, containerStyles, handleClick, btnType, textStyles, rightIcon }: CustomButtonProps) => {
  return (
    // 버튼 요소 정의
    <button
      disabled={false}
      type={btnType || "button"}  // btnType이 주어지지 않으면 기본값으로 button을 사용
      className={`custom-btn ${containerStyles}`}
      onClick={handleClick}
    >
      {/* 버튼 텍스트 */}
      <span className={`flex-1 ${textStyles}`} >
        {title}
      </span>
      {/* 오른쪽 아이콘이 지정된 경우, 오른쪽 아이콘 이미지를 표시 */}
      {rightIcon && (
        <div className="relative w-6 h-6">
          <Image 
            src={rightIcon}
            alt="right icon"
            fill
            className="object-contain"
          />
        </div>
      )}
    </button>
  )
};

export default CustomButton;
