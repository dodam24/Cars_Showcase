"use client";

import { useState, Fragment } from "react";
import Image from "next/image";
import { Combobox, Transition } from "@headlessui/react";

import { manufacturers } from "@/constants";  // 자동차 제조사 목록이 정의된 상수
import { SearchManufacturerProps } from "@/types";  // SearchManufacturer 컴포넌트에 전달되는 프로퍼티 타입

// SearchManufacturer 컴포넌트 정의
const SearchManufacturer = ({
  selected,
  setSelected
}: SearchManufacturerProps) => {
  const [query, setQuery] = useState(""); // 검색 쿼리 상태

  // 검색된 제조사 목록을 필터링
  const filteredManufacturers =
    query === ""
      ? manufacturers
      : manufacturers.filter((item) =>
          item
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(query.toLowerCase().replace(/\s+/g, ""))
        );

  // 컴포넌트 렌더링
  return (
    <div className="search-manufacturer">
      <Combobox value={selected} onChange={setSelected}>
        <div className="relative w-full">
          {/* Combobox 버튼. 아이콘을 클릭하면 전체 드롭다운 표시 */}
          <Combobox.Button
            className="absolute top-[14px]">
            <Image
              src="/car-logo.svg"
              width={20}
              height={20}
              className="ml-4"
              alt="car logo"
            />
          </Combobox.Button>

          {/* 검색을 위한 입력 필드 */}
          <Combobox.Input
            className="search-manufacturer__input"
            placeholder="Hyundai"
            displayValue={(manufacturer: string) => manufacturer}
            onChange={(e) => setQuery(e.target.value)}  // 입력이 변경될 때 검색 쿼리를 업데이트 한다.
          />

          {/* 옵션을 표시하기 위한 Transition */}
          <Transition
            as={Fragment} // <></>를 사용하여 추가 DOM 노드를 도입하지 않고 여러 요소를 그룹화 한다.
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => setQuery("")} // Transition 완료 후, 검색 쿼리를 재설정
          >
            <Combobox.Options>
              {/* 필터링된 제조사 목록을 매핑하여 옵션을 생성 */}
              {filteredManufacturers.map((item) => (
                <Combobox.Option
                  key={item}
                  className={({ active }) => `
                  relative search-manufacturer__option
                  ${active ? "bg-primary-blue text-white" : "text-gray-900"}
                  `}
                  value={item}
                >
                  {({ selected, active }) => (
                    <>
                      {/* 옵션이 선택된 경우, 글꼴을 진하게 설정 */}
                      <span className={`block truncate ${selected ? "font-medium" : "font-normal"}`}>
                        {item}
                      </span>
                      
                      {/* 옵션이 선택된 경우, 활성 상태에 따라 파란색 배경을 표시 */}
                      {selected ? (
                        <span className={`absolute inset-y-0 left-0 flex items-center pl-3 ${active? "text-white": "text-pribg-primary-purple"}`}
                        ></span>
                      ) : null}
                    </>
                  )}
                </Combobox.Option>
                )
              )}
            </Combobox.Options>
          </Transition>
        </div>
      </Combobox>
    </div>
  );
};

export default SearchManufacturer;
