"use client";

import Image from "next/image";
import React, { useState } from "react";

import SearchManufacturer from "./SearchManufacturer";
import { SearchBarProps } from "@/types";

// 검색 버튼을 나타내는 컴포넌트
const SearchButton = ({ otherClasses }: { otherClasses: string }) => (
  <button type='submit' className={`-ml-3 z-10 ${otherClasses}`}>
    <Image
      src={"/magnifying-glass.svg"}
      alt={"magnifying glass"}
      width={40}
      height={40}
      className='object-contain'
    />
  </button>
);

// 검색 바 컴포넌트
const SearchBar = ({ setManuFacturer, setModel }: SearchBarProps) => {
  // 검색 모델 및 제조사의 상태 관리
  const [searchModel, setSearchModel] = useState("");
  const [searchManufacturer, setSearchManufacturer] = useState("");

  // 검색 버튼 클릭 시 처리 함수
  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // 입력값이 비어 있는 경우, 알림 표시
    if (searchManufacturer.trim() === "" && searchModel.trim() === "")
      return alert("제조사 및 모델명을 입력해주세요.");

    // 상위 컴포넌트로 선택된 모델 및 제조사 전달
    setModel(searchModel);
    setManuFacturer(searchManufacturer);
  };

  return (
    <form className='searchbar' onSubmit={handleSearch}>
      {/* 제조사 검색 컴포넌트와 버튼 */}
      <div className='searchbar__item'>
        <SearchManufacturer
          selected={searchManufacturer}
          setSelected={setSearchManufacturer}
        />
        <SearchButton otherClasses='sm:hidden' />
      </div>

      {/* 모델명 검색 입력 필드와 버튼 */}
      <div className='searchbar__item'>
        <Image
          src='/model-icon.png'
          width={25}
          height={25}
          className='absolute w-[20px] h-[20px] ml-4'
          alt='car model'
        />
        <input
          type='text'
          name='model'
          value={searchModel}
          onChange={(e) => setSearchModel(e.target.value)}
          placeholder='IONIQ'
          className='searchbar__input'
        />
        <SearchButton otherClasses='sm:hidden' />
      </div>

      {/* 최대 화면 크기가 일정 크기 이상일 때만 버튼이 보이도록 설정 */}
      <SearchButton otherClasses='max-sm:hidden' />
    </form>
  );
};

export default SearchBar;