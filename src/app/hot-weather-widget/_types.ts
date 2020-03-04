
export interface IHotWeatherInfo {
  img: string;
  address: string;
  phone: number;
  weather: IWeather;
  social_info: ISocialInfo;
  type: string;
}

export interface IWeather {
  title: string;
  icon: string;
  water: number;
  temperature: number;
}

export interface ISocialInfo {
  title: string;
  img: string;
  followers: number;
  following: number;
}


