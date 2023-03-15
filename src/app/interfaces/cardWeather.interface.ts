export interface WeatherData {
    day: string;
    image: string;
    description?: string;
    conditions: string;
    minTemp: number;
    maxTemp: number;
    humidity: number;
}