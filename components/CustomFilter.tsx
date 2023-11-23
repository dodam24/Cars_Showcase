"use client";

import { Fragment, useState } from "react";
import Image from "next/image";
import { Listbox, Transition } from "@headlessui/react";

import { CustomFilterProps } from "@/types";

const CustomFilter = ({ options, setFilter }: CustomFilterProps<T>) => {
  // 선택된 옵션을 관리하는 상태 변수 및 설정 함수
  const [selected, setSelected] = useState(options[0]);

  return (
    <div className="w-fit">
      <Listbox
        value={selected}
        onChange={(e) => {
          // 옵션 변경 시, 선택된 상태 업데이트 및 setFilter 함수 호출
          setSelected(e);
          setFilter(e.value);
        }}
      >
        <div className="relative w-fit z-10">
          <Listbox.Button className="custom-filter__btn">
            <span className="block truncate">{selected.title}</span>
            <Image
              src="/chevron-up-down.svg"
              width={20}
              height={20}
              className="ml-4 object-contain"
              alt="chevron up down"
            />
          </Listbox.Button>

          {/* Listbox가 열릴 때, 트랜지션 효과를 주기 위한 Transition 컴포넌트 */}
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            {/* Listbox의 옵션 부분 */}
            <Listbox.Options className="custom-filter__options">
              {options.map((option) => (
                <Listbox.Option
                  key={option.title}
                  value={option}
                  // 옵션의 활성화 여부에 따라 스타일을 동적으로 설정
                  className={({
                    active,
                  }) => `relative cursor-default select-none py-2 px-4 
                  ${active ? "bg-primary-blue text-white" : "text-gray-900"}`}
                >
                  {({ selected }) => (
                    <>
                      {/* 옵션의 title을 표시 */}
                      <span
                        className={`block truncate 
                        ${selected ? "font-medium" : "font-normal"}`}
                      >
                        {option.title}
                      </span>
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
};

export default CustomFilter;
