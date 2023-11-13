import { CarProps } from "@/types";

export async function fetchCars() {
  // API 요청에 필요한 헤더 설정
  const headers = {
    "X-RapidAPI-Key": "b76de68bdbmsha34f3e78395361dp1141dcjsnfd7beacb3720",
    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  };

  // API 요청 수행
  const response = await fetch(
    "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=q3",
    {
      headers: headers,
    }
  );

  // 응답을 JSON 형식으로 파싱하여 결과를 반환
  const result = await response.json();

  return result;
}

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