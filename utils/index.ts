import { CarProps, FilterProps } from "@/types";

// 자동차 정보 검색 
// (외부 API에 비동기적으로 요청을 보내서 관련된 필터를 매개변수로 받아 API로부터 자동차 정보를 가져온다.)
export async function fetchCars(filters:FilterProps) {
  const { manufacturer, year, model, limit, fuel } = filters;

  // API 요청에 필요한 헤더 설정
  const headers = {
    "X-RapidAPI-Key": "b76de68bdbmsha34f3e78395361dp1141dcjsnfd7beacb3720",
    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  };

  // API 요청 수행
  const response = await fetch(
    `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manufacturer}&year=${year}&model=${model}&limit=${limit}&fuel_type=${fuel}`,
    {
      headers: headers,
    }
  );

  // 응답을 JSON 형식으로 파싱하여 결과를 반환
  const result = await response.json();

  return result;
}

// 자동차 대여료를 계산
export const calculateCarRent = (city_mpg: number, year: number) => {
  const basePricePerDay = 50; // 일일 기본 렌탈 요금
  const mileageFactor = 0.1;  // 주행 거리 당 추가 요금 비율
  const ageFactor = 0.05; // 차량 연식당 추가 요금 비율

  // 주행 거리와 차량 연식을 기반으로 추가 요금 계산 
  const mileageRate = city_mpg * mileageFactor; // 주행 거리에 따른 추가 요금
  const ageRate = (new Date().getFullYear() - year) * ageFactor;  // 차량 연식에 따른 추가 요금

  // 일일 총 렌탈 요금 계산
  const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;

  return rentalRatePerDay.toFixed(0);
};

// 이미지 URL 생성 (자동차 정보와 각도를 기반으로 계산)
export const generateCarImageUrl = (car: CarProps, angle?: string) => {
  const url = new URL('https://cdn.imagin.studio/getimage');

  const { make, year, model } = car;

  url.searchParams.append('customer', 'hrjavascript-mastery');
  url.searchParams.append('make', make);
  url.searchParams.append('modelFamily', model.split(' ')[0]);
  url.searchParams.append('zoomType', 'fullscreen');
  url.searchParams.append('modelYear', `${year}`);
  url.searchParams.append('angle', `${angle}`);

  return `${url}`;
}

// 현재 페이지의 URL에 대한 검색 매개변수를 업데이트
export const updateSearchParams = (type: string, value: string) => {
  // 현재 URL의 검색 매개변수를 가져온다.
  const searchParams = new URLSearchParams(window.location.search);

  // 지정된 유형의 검색 매개변수를 주어진 값으로 설정
  searchParams.set(type, value);

  // 주어진 값으로 지정된 검색 매개변수를 설정
  const newPathname = `${window.location.pathname}?${searchParams.toString()}`;

  return newPathname;
}