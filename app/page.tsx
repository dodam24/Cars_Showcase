"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { fetchCars } from "@/utils";
import { CarState } from "@/types";
import { CarCard, ShowMore, SearchBar, CustomFilter, Hero } from '@/components';
import { fuels, yearsOfProduction  } from '@/constants';

export default function Home() {
  // 모든 차량 정보와 로딩 상태를 관리하는 state
  const [allCars, setAllCars] = useState<CarState>([]);
  const [loading, setLoading] = useState(false);

  // 검색 관련 상태
  const [manufacturer, setManuFacturer] = useState("");
  const [model, setModel] = useState("");

  // 필터 상태
  const [fuel, setFuel] = useState("");
  const [year, setYear] = useState(2022);

  // limit 상태
  const [limit, setLimit] = useState(10);

  // 비동기 함수를 이용해 차량 정보를 가져옴
  const getCars = async () => {
    setLoading(true);
    try {
      // fetchCars 함수를 이용해 차량 정보를 가져옴
      const result = await fetchCars({
        manufacturer: manufacturer.toLowerCase() || "",
        model: model.toLowerCase() || "",
        fuel: fuel.toLowerCase() || "",
        year: year || 2022,
        limit: limit || 10,
      });

      // 가져온 정보를 state에 업데이트
      setAllCars(result);
    } catch {
      console.error();
    } finally {
      setLoading(false);
    }
  };

  // 필터 또는 검색어 등이 변경될 때마다 getCars 함수를 호출
  useEffect(() => {
    getCars();
  }, [fuel, year, limit, manufacturer, model]);

  return (
    <main className='overflow-hidden'>
      {/* 홈페이지 상단에 Hero 섹션을 표시 */}
      <Hero />

      <div className='mt-12 padding-x padding-y max-width' id='discover'>
        <div className='home__text-container'>
          {/* <h1 className='text-4xl font-extrabold'>Car Catalogue</h1> */}
          <h1 className='text-4xl font-extrabold'>자동차 카탈로그</h1>
          {/* <p>Explore out cars you might like</p> */}
          <p>당신이 좋아할 만한 차량을 탐색하세요</p>
        </div>

        <div className='home__filters'>
          {/* 검색 바 및 필터 컴포넌트를 표시 */}
          <SearchBar setManuFacturer={setManuFacturer} setModel={setModel} />

          <div className='home__filter-container'>
            {/* 차량의 연료 유형 및 생산 연도 필터를 표시 */}
            <CustomFilter options={fuels} setFilter={setFuel} />
            <CustomFilter options={yearsOfProduction} setFilter={setYear} />
          </div>
        </div>

        {/* 차량 정보가 존재하는 경우 각 차량 정보를 CarCard 컴포넌트를 이용해 표시 */}
        {allCars.length > 0 ? (
          <section>
            <div className='home__cars-wrapper'>
              {allCars?.map((car, index) => (
                <CarCard key={`car-${index}`} car={car} />
              ))}
            </div>

            {/* 로딩 중일 때, 로딩 스피너를 표시 */}
            {loading && (
              <div className='mt-16 w-full flex-center'>
                <Image
                  src='./loader.svg'
                  alt='loader'
                  width={50}
                  height={50}
                  className='object-contain'
                />
              </div>
            )}

            {/* 더 보기 버튼을 표시 */}
            <ShowMore
              pageNumber={limit / 10}
              isNext={limit > allCars.length}
              setLimit={setLimit}
            />
          </section>
        ) : (
          // 차량 정보가 없는 경우, 오류 메시지를 표시
          !loading && (
            <div className='home__error-container'>
              <h2 className='text-black text-xl font-bold'>검색 결과가 없습니다.</h2>
              <p>{allCars?.message}</p>
            </div>
          )
        )}
      </div>
    </main>
  );
}
