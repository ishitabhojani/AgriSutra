// // // // "use client";

// // // // import { useEffect, useState } from "react";
// // // // import { useRouter } from "next/navigation";

// // // // export default function Weather() {
// // // //   const router = useRouter();
// // // //   const [weatherData, setWeatherData] = useState<any>(null);
// // // //   const [loading, setLoading] = useState(true);
// // // //   const [error, setError] = useState<string | null>(null);

// // // //   const API_KEY = "qIwJQFHTkEKfZILWc5AJAg8lxWG0UUMH"; // Replace with your Tomorrow.io API Key

// // // //   useEffect(() => {
// // // //     const fetchWeather = async () => {
// // // //       try {
// // // //         const lat = sessionStorage.getItem("userLat");
// // // //         const lon = sessionStorage.getItem("userLon");

// // // //         if (!lat || !lon) {
// // // //           alert("Location not found. Redirecting to home.");
// // // //           router.push("/");
// // // //           return;
// // // //         }

// // // //         const response = await fetch(
// // // //           `https://api.tomorrow.io/v4/weather/forecast?location=${lat},${lon}&apikey=${API_KEY}`
// // // //         );

// // // //         if (!response.ok) {
// // // //           throw new Error("Failed to fetch weather data.");
// // // //         }

// // // //         const data = await response.json();
// // // //         setWeatherData(data.timelines.daily);
// // // //       } catch (err) {
// // // //         setError("Failed to fetch weather data.");
// // // //       } finally {
// // // //         setLoading(false);
// // // //       }
// // // //     };

// // // //     fetchWeather();
// // // //   }, [router]);

// // // //   return (
// // // //     <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
// // // //       <h1 className="text-3xl font-bold">Live Weather Updates</h1>

// // // //       {loading ? (
// // // //         <p className="mt-4 text-lg">Loading...</p>
// // // //       ) : error ? (
// // // //         <p className="mt-4 text-lg text-red-500">{error}</p>
// // // //       ) : (
// // // //         <div className="mt-6 bg-white p-4 rounded-lg shadow-lg w-96">
// // // //           <h2 className="text-xl font-semibold">Today's Weather</h2>
// // // //           <p>🌡️ Max Temp: {weatherData[0].values.temperatureMax}°C</p>
// // // //           <p>🌡️ Min Temp: {weatherData[0].values.temperatureMin}°C</p>
// // // //           <p>🌧️ Rain Probability: {weatherData[0].values.precipitationProbability}%</p>

// // // //           <h3 className="mt-4 font-bold">7-Day Forecast</h3>
// // // //           <div className="grid grid-cols-2 gap-2">
// // // //             {weatherData.slice(1, 7).map((day: any, index: number) => (
// // // //               <div key={index} className="border p-2 rounded text-center">
// // // //                 <p className="font-bold">Day {index + 1}</p>
// // // //                 <p>🌡️ {day.values.temperatureMin}°C - {day.values.temperatureMax}°C</p>
// // // //                 {/* <p>🌧️ Rain: {day.values.precipitationProbability}%</p> */}
// // // //               </div>
// // // //             ))}
// // // //           </div>
// // // //         </div>
// // // //       )}
// // // //     </div>
// // // //   );
// // // // }

// // // // "use client";

// // // // import { useEffect, useState } from "react";
// // // // import { useRouter } from "next/navigation";
// // // // import {
// // // //   LineChart, Line, XAxis, Tooltip, ResponsiveContainer
// // // // } from "recharts";
// // // // import { Sun, CloudRain, Wind, Droplets, Eye, Thermometer, BarChart3, AlertCircle } from "lucide-react";
// // // // import { Card, CardContent } from "@/components/ui/card";
// // // // import { motion } from "framer-motion"; // For smooth animations

// // // // export default function WeatherApp() {
// // // //   const router = useRouter();
// // // //   const [weatherData, setWeatherData] = useState<any>(null);
// // // //   const [aqiData, setAqiData] = useState<any>(null);
// // // //   const [aqiHistory, setAqiHistory] = useState<any[]>([]);
// // // //   const [loading, setLoading] = useState(true);
// // // //   const [error, setError] = useState<string | null>(null);
// // // //   const [isNight, setIsNight] = useState(false);

// // // //   const API_KEY = process.env.NEXT_PUBLIC_TOMORROW_API_KEY;

// // // //   const fetchWeather = async (lat: string, lon: string) => {
// // // //     try {
// // // //       setLoading(true);
// // // //       setError(null);

// // // //       const response = await fetch(
// // // //         `https://api.tomorrow.io/v4/weather/forecast?location=${lat},${lon}&timesteps=1d&apikey=${API_KEY}`
// // // //       );
// // // //       if (!response.ok) throw new Error("Failed to fetch weather data");
// // // //       const data = await response.json();
// // // //       setWeatherData(data.timelines);

// // // //       // Fetch AQI Data
// // // //       const aqiResponse = await fetch(
// // // //         `https://api.tomorrow.io/v4/weather/realtime?location=${lat},${lon}&apikey=${API_KEY}`
// // // //       );
// // // //       if (!aqiResponse.ok) throw new Error("Failed to fetch AQI data");
// // // //       const aqiData = await aqiResponse.json();
// // // //       setAqiData(aqiData.data.values);
// // // //     } catch (err) {
// // // //       setError("Failed to fetch weather or AQI data");
// // // //     } finally {
// // // //       setLoading(false);
// // // //     }
// // // //   };

// // // //   useEffect(() => {
// // // //     const hour = new Date().getHours();
// // // //     setIsNight(hour >= 18 || hour < 6);

// // // //     if (navigator.geolocation) {
// // // //       navigator.geolocation.getCurrentPosition(
// // // //         (position) => {
// // // //           const lat = position.coords.latitude.toString();
// // // //           const lon = position.coords.longitude.toString();
// // // //           localStorage.setItem("userLat", lat);
// // // //           localStorage.setItem("userLon", lon);
// // // //           fetchWeather(lat, lon);
// // // //         },
// // // //         () => {
// // // //           setError("Location not available. Please enable location services.");
// // // //           setLoading(false);
// // // //         }
// // // //       );
// // // //     }
// // // //   }, []);

// // // //   if (loading)
// // // //     return (
// // // //       <div className="min-h-screen flex items-center justify-center">
// // // //         <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
// // // //       </div>
// // // //     );

// // // //   if (error)
// // // //     return (
// // // //       <div className="min-h-screen flex items-center justify-center text-red-500">
// // // //         {error}
// // // //       </div>
// // // //     );

// // // //   const bgClass = isNight
// // // //     ? "bg-gradient-to-b from-gray-900 via-gray-800 to-gray-700"
// // // //     : "bg-gradient-to-b from-blue-500 via-blue-400 to-blue-300";

// // // //   return (
// // // //     <motion.div 
// // // //       initial={{ opacity: 0 }} 
// // // //       animate={{ opacity: 1 }} 
// // // //       transition={{ duration: 1.2 }}
// // // //       className={`min-h-screen ${bgClass} text-white p-6`}
// // // //     >
// // // //       {/* Current Temperature */}
// // // //       <div className="text-center">
// // // //         <motion.h1 
// // // //           initial={{ y: -20, opacity: 0 }} 
// // // //           animate={{ y: 0, opacity: 1 }} 
// // // //           transition={{ duration: 0.8 }}
// // // //           className="text-6xl font-bold"
// // // //         >
// // // //           {weatherData?.daily?.[0]?.values?.temperatureMax}°C
// // // //         </motion.h1>
// // // //         <p className="text-lg">{weatherData?.daily?.[0]?.values?.weatherCode}</p>
// // // //         <p className="opacity-80">
// // // //           {weatherData?.daily?.[0]?.values?.temperatureMin}° ~ {weatherData?.daily?.[0]?.values?.temperatureMax}°C
// // // //         </p>
// // // //       </div>

// // // //       {/* AQI Section */}
// // // //       <Card className="bg-white/10 backdrop-blur-lg border-none text-white mt-6">
// // // //         <CardContent className="p-6">
// // // //           <h3 className="text-xl font-semibold mb-4">Air Quality Index</h3>
// // // //           <div className="flex items-center justify-between">
// // // //             <div className="text-4xl font-bold" style={{ color: getAqiColor(aqiData?.epa_aqi) }}>
// // // //               {aqiData?.epa_aqi || "N/A"}
// // // //             </div>
// // // //             <div className="text-lg">
// // // //               <p className="opacity-80">PM2.5: {aqiData?.pm25} µg/m³</p>
// // // //               <p className="opacity-80">PM10: {aqiData?.pm10} µg/m³</p>
// // // //               <p className="opacity-80">CO: {aqiData?.co} ppm</p>
// // // //               <p className="opacity-80">NO₂: {aqiData?.no2} ppm</p>
// // // //               <p className="opacity-80">O₃: {aqiData?.o3} ppm</p>
// // // //             </div>
// // // //           </div>
// // // //           <p className="mt-4 text-sm p-2 rounded-lg" style={{ backgroundColor: getAqiColor(aqiData?.epa_aqi, true) }}>
// // // //             {getAqiWarning(aqiData?.epa_aqi)}
// // // //           </p>
// // // //         </CardContent>
// // // //       </Card>

// // // //       {/* AQI Graph */}
// // // //       <Card className="bg-white/10 backdrop-blur-lg border-none text-white mt-6">
// // // //         <CardContent className="p-6">
// // // //           <h3 className="text-xl font-semibold mb-4">AQI Trends</h3>
// // // //           <div className="h-48">
// // // //             <ResponsiveContainer width="100%" height="100%">
// // // //               <LineChart data={aqiHistory}>
// // // //                 <Line type="monotone" dataKey="aqi" stroke="#FF0000" strokeWidth={2} dot={false} />
// // // //                 <XAxis dataKey="time" tickFormatter={(time) => new Date(time).getHours() + "h"} stroke="#fff" />
// // // //                 <Tooltip contentStyle={{ backgroundColor: "#1e40af", border: "none" }} labelStyle={{ color: "#fff" }} />
// // // //               </LineChart>
// // // //             </ResponsiveContainer>
// // // //           </div>
// // // //         </CardContent>
// // // //       </Card>
// // // //     </motion.div>
// // // //   );
// // // // }

// // // // /* Functions for AQI Color & Warning */
// // // // const getAqiColor = (aqi: number, isBg = false) => {
// // // //   if (!aqi) return "#ffffff";
// // // //   if (aqi <= 50) return isBg ? "#00E40033" : "#00E400";
// // // //   if (aqi <= 100) return isBg ? "#FFFF0033" : "#FFFF00";
// // // //   if (aqi <= 150) return isBg ? "#FF7E0033" : "#FF7E00";
// // // //   if (aqi <= 200) return isBg ? "#FF000033" : "#FF0000";
// // // //   return isBg ? "#7E002333" : "#7E0023";
// // // // };

// // // // const getAqiWarning = (aqi: number) => {
// // // //   if (!aqi) return "No data available";
// // // //   if (aqi <= 50) return "Good air quality. 😊";
// // // //   if (aqi <= 100) return "Moderate air quality.";
// // // //   return "Unhealthy air quality! 🚨";
// // // // };
// // // "use client";

// // // import { useEffect, useState } from "react";
// // // import { useRouter } from "next/navigation";
// // // import {
// // //   LineChart, Line, XAxis, Tooltip, ResponsiveContainer
// // // } from "recharts";
// // // import {
// // //   Sun, CloudRain, Wind, Droplets, Eye, Thermometer, Cloud, AlertCircle
// // // } from "lucide-react";
// // // import { Card, CardContent } from "@/components/ui/card";
// // // import dynamic from "next/dynamic";

// // // const MotionDiv = dynamic(() => import("framer-motion").then(mod => mod.motion.div), { ssr: false });

// // // export default function WeatherApp() {
// // //   const router = useRouter();
// // //   const [weatherData, setWeatherData] = useState<any>(null);
// // //   const [aqiData, setAqiData] = useState<any>(null);
// // //   const [loading, setLoading] = useState(true);
// // //   const [error, setError] = useState<string | null>(null);

// // //   const API_KEY = process.env.NEXT_PUBLIC_TOMORROW_API_KEY;
// // //   const AQI_API_KEY = process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY;

// // //   // Fetch Weather & AQI Data
// // //   const fetchWeather = async (lat: string, lon: string) => {
// // //     try {
// // //       setLoading(true);
// // //       setError(null);

// // //       const response = await fetch(
// // //         `https://api.tomorrow.io/v4/weather/forecast?location=${lat},${lon}&timesteps=1h,1d&apikey=${API_KEY}`
// // //       );

// // //       if (!response.ok) throw new Error("Failed to fetch weather data");
// // //       const data = await response.json();
// // //       setWeatherData(data?.timelines || null);

// // //       const aqiResponse = await fetch(
// // //         `https://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${AQI_API_KEY}`
// // //       );

// // //       if (!aqiResponse.ok) throw new Error("Failed to fetch AQI data");
// // //       const aqiData = await aqiResponse.json();
// // //       setAqiData(aqiData?.list?.[0] || null);
// // //     } catch (err) {
// // //       setError("Failed to fetch weather or AQI data.");
// // //     } finally {
// // //       setLoading(false);
// // //     }
// // //   };

// // //   useEffect(() => {
// // //     if (navigator.geolocation) {
// // //       navigator.geolocation.getCurrentPosition(
// // //         (position) => {
// // //           const lat = position.coords.latitude.toString();
// // //           const lon = position.coords.longitude.toString();
// // //           localStorage.setItem("userLat", lat);
// // //           localStorage.setItem("userLon", lon);
// // //           fetchWeather(lat, lon);
// // //         },
// // //         () => {
// // //           setError("Location access denied. Please enable location services.");
// // //           setLoading(false);
// // //         }
// // //       );
// // //     } else {
// // //       setError("Geolocation not supported by your browser.");
// // //       setLoading(false);
// // //     }
// // //   }, []);

// // //   if (loading) return (
// // //     <div className="min-h-screen flex items-center justify-center">
// // //       <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
// // //     </div>
// // //   );

// // //   if (error) return (
// // //     <div className="min-h-screen flex items-center justify-center text-red-500">
// // //       {error}
// // //     </div>
// // //   );

// // //   return (
// // //     <MotionDiv 
// // //       initial={{ opacity: 0 }} 
// // //       animate={{ opacity: 1 }} 
// // //       transition={{ duration: 1.2 }}
// // //       className="min-h-screen bg-gray-100 text-gray-900 p-6"
// // //     >
// // //       {/* Current Weather */}
// // //       <Card className="bg-white shadow-lg p-6 rounded-lg">
// // //         <CardContent>
// // //           <div className="flex justify-between items-center">
// // //             <h1 className="text-5xl font-bold">
// // //               {weatherData?.daily?.[0]?.values?.temperatureMax || "N/A"}°C
// // //             </h1>
// // //             {getWeatherIcon(weatherData?.daily?.[0]?.values?.weatherCode)}
// // //           </div>
// // //           <p className="text-lg text-gray-600">{weatherData?.daily?.[0]?.values?.weatherCode || "N/A"}</p>
// // //           <p className="opacity-80">
// // //             {weatherData?.daily?.[0]?.values?.temperatureMin || "N/A"}° ~ {weatherData?.daily?.[0]?.values?.temperatureMax || "N/A"}°C
// // //           </p>
// // //         </CardContent>
// // //       </Card>

// // //       {/* Hourly Forecast */}
// // //       <Card className="bg-white shadow-lg p-6 rounded-lg mt-6">
// // //         <CardContent>
// // //           <h3 className="text-xl font-semibold">Hourly Forecast</h3>
// // //           {weatherData?.hourly ? (
// // //             <div className="h-48">
// // //               <ResponsiveContainer width="100%" height="100%">
// // //                 <LineChart data={weatherData.hourly.slice(0, 12)}>
// // //                   <Line type="monotone" dataKey="values.temperature" stroke="#3182CE" strokeWidth={2} dot={false} />
// // //                   <XAxis dataKey="time" tickFormatter={(time) => new Date(time).getHours() + "h"} stroke="#000" />
// // //                   <Tooltip contentStyle={{ backgroundColor: "#fff", border: "none" }} labelStyle={{ color: "#000" }} />
// // //                 </LineChart>
// // //               </ResponsiveContainer>
// // //             </div>
// // //           ) : (
// // //             <p className="text-gray-500 mt-4">No hourly data available.</p>
// // //           )}
// // //         </CardContent>
// // //       </Card>

// // //       {/* 7-Day Forecast */}
// // //       <Card className="bg-white shadow-lg p-6 rounded-lg mt-6">
// // //         <CardContent>
// // //           <h3 className="text-xl font-semibold mb-4">7-Day Forecast</h3>
// // //           <div className="space-y-4">
// // //             {weatherData?.daily?.slice(0, 7).map((day: any, index: number) => (
// // //               <div key={index} className="flex items-center justify-between">
// // //                 <p className="w-24">{new Date(day.time).toLocaleDateString('en-US', { weekday: 'short' })}</p>
// // //                 <div className="flex-1 px-4 flex items-center gap-2">
// // //                   {getWeatherIcon(day.values.weatherCode)}
// // //                   <p>{day.values.weatherCode || "N/A"}</p>
// // //                 </div>
// // //                 <p>{day.values.temperatureMin || "N/A"}° ~ {day.values.temperatureMax || "N/A"}°</p>
// // //               </div>
// // //             ))}
// // //           </div>
// // //         </CardContent>
// // //       </Card>

// // //       {/* AQI Section */}
// // //       <Card className="bg-white shadow-lg p-6 rounded-lg mt-6">
// // //         <CardContent>
// // //           <h3 className="text-xl font-semibold mb-4">Air Quality Index</h3>
// // //           {aqiData ? (
// // //             <div className="flex items-center justify-between">
// // //               <p className="text-4xl font-bold" style={{ color: getAqiColor(aqiData.main.aqi) }}>
// // //                 {aqiData.main.aqi || "N/A"}
// // //               </p>
// // //               <p className="text-lg text-gray-600">{getAqiWarning(aqiData.main.aqi)}</p>
// // //             </div>
// // //           ) : (
// // //             <p className="text-gray-500 mt-4">No AQI data available.</p>
// // //           )}
// // //         </CardContent>
// // //       </Card>
// // //     </MotionDiv>
// // //   );
// // // }

// // // // Helper Functions
// // // const getWeatherIcon = (weatherCode: string) => weatherCode?.toLowerCase().includes("rain") ? <CloudRain size={24} /> : <Sun size={24} />;
// // // const getAqiColor = (aqi: number) => aqi <= 50 ? "#00E400" : aqi <= 100 ? "#FFFF00" : "#FF7E00";
// // // const getAqiWarning = (aqi: number) => aqi <= 50 ? "Good" : aqi <= 100 ? "Moderate" : "Unhealthy";




// // "use client";

// // import { useEffect, useState } from "react";
// // import { useRouter } from "next/navigation";
// // import {
// //   Sun, CloudRain, Wind, Droplets, ArrowLeft, Cloud, Moon, CloudSun, CloudMoon, Sunrise, Sunset
// // } from "lucide-react";
// // import { Card, CardContent } from "@/components/ui/card";
// // import dynamic from "next/dynamic";

// // const MotionDiv = dynamic(() => import("framer-motion").then(mod => mod.motion.div), { ssr: false });

// // export default function WeatherApp() {
// //   const router = useRouter();
// //   const [weatherData, setWeatherData] = useState<any>(null);
// //   const [aqiData, setAqiData] = useState<any>(null);
// //   const [location, setLocation] = useState<string>("Your City");
// //   const [loading, setLoading] = useState(true);
// //   const [error, setError] = useState<string | null>(null);

// //   const API_KEY = process.env.NEXT_PUBLIC_TOMORROW_API_KEY;
// //   const AQI_API_KEY = process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY;

// //   // Fetch Weather & AQI Data
// //   const fetchWeather = async (lat: string, lon: string) => {
// //     try {
// //       setLoading(true);
// //       setError(null);

// //       // Fetch Location Name
// //       const locationResponse = await fetch(
// //         `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lon}&localityLanguage=en`
// //       );
// //       const locationData = await locationResponse.json();
// //       setLocation(locationData.city || "Unknown Location");

// //       // Fetch Weather
// //       const response = await fetch(
// //         `https://api.tomorrow.io/v4/weather/forecast?location=${lat},${lon}&timesteps=1d&apikey=${API_KEY}`
// //       );
// //       if (!response.ok) throw new Error("Failed to fetch weather data");
// //       const data = await response.json();
// //       setWeatherData(data?.timelines || null);

// //       // Fetch AQI Data
// //       const aqiResponse = await fetch(
// //         `https://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${AQI_API_KEY}`
// //       );
// //       if (!aqiResponse.ok) throw new Error("Failed to fetch AQI data");
// //       const aqiData = await aqiResponse.json();
// //       setAqiData(aqiData?.list?.[0] || null);
// //     } catch (err) {
// //       setError("Failed to fetch weather or AQI data.");
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   useEffect(() => {
// //     if (navigator.geolocation) {
// //       navigator.geolocation.getCurrentPosition(
// //         (position) => {
// //           const lat = position.coords.latitude.toString();
// //           const lon = position.coords.longitude.toString();
// //           localStorage.setItem("userLat", lat);
// //           localStorage.setItem("userLon", lon);
// //           fetchWeather(lat, lon);
// //         },
// //         () => {
// //           setError("Location access denied. Please enable location services.");
// //           setLoading(false);
// //         }
// //       );
// //     } else {
// //       setError("Geolocation not supported by your browser.");
// //       setLoading(false);
// //     }
// //   }, []);

// //   if (loading) return (
// //     <div className="min-h-screen flex items-center justify-center bg-black text-white">
// //       <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-yellow-400"></div>
// //     </div>
// //   );

// //   if (error) return (
// //     <div className="min-h-screen flex items-center justify-center text-red-500">
// //       {error}
// //     </div>
// //   );

// //   const currentTemp = weatherData?.daily?.[0]?.values?.temperatureMax;
// //   const minTemp = weatherData?.daily?.[0]?.values?.temperatureMin;
// //   const condition = weatherData?.daily?.[0]?.values?.weatherCode;
// //   const uvIndex = weatherData?.daily?.[0]?.values?.uvIndexMax;
// //   const humidity = weatherData?.daily?.[0]?.values?.humidity;
// //   const windSpeed = weatherData?.daily?.[0]?.values?.windSpeed;
// //   const sunriseTime = weatherData?.daily?.[0]?.values?.sunrise;
// //   const sunsetTime = weatherData?.daily?.[0]?.values?.sunset;

// //   return (
// //     <MotionDiv
// //       initial={{ opacity: 0 }}
// //       animate={{ opacity: 1 }}
// //       transition={{ duration: 1.2 }}
// //       className="min-h-screen bg-black text-white p-6"
// //     >
// //       {/* Header with Back Arrow & City Name */}
// //       <div className="flex items-center mb-6">
// //         <button onClick={() => router.back()} className="p-2">
// //           <ArrowLeft size={28} className="text-white" />
// //         </button>
// //         <h1 className="text-2xl font-semibold ml-3">{location}</h1>
// //       </div>

// //       {/* Current Temperature */}
// //       <div className="flex justify-between items-center">
// //         <h1 className="text-6xl font-bold">{currentTemp ? `${currentTemp}°` : "--"}</h1>
// //         {getWeatherIcon(condition)}
// //       </div>
// //       <p className="text-lg text-gray-400">{minTemp ? `${minTemp}° / ${currentTemp}°` : "--"}</p>
// //       <p className="text-lg text-gray-400">{condition || "No Data"}</p>

// //       {/* Weekly Forecast */}
// //       <Card className="bg-gray-900 p-4 mt-6 rounded-lg">
// //         <CardContent>
// //           <div className="flex flex-col space-y-4">
// //             {weatherData?.daily?.slice(0, 7).map((day: any, index: number) => (
// //               <div key={index} className="flex justify-between">
// //                 <p>{new Date(day.time).toLocaleDateString('en-US', { weekday: 'long' })}</p>
// //                 <div className="flex items-center">
// //                   {getWeatherIcon(day.values.weatherCode)}
// //                   <span className="ml-2">{day.values.temperatureMin}° / {day.values.temperatureMax}°</span>
// //                 </div>
// //               </div>
// //             ))}
// //           </div>
// //         </CardContent>
// //       </Card>

// //       {/* Weather Parameters */}
// //       <div className="grid grid-cols-2 gap-4 mt-6">
// //         {uvIndex && (
// //           <Card className="bg-gray-900 p-4 rounded-lg text-center">
// //             <CardContent>
// //               <Sun size={28} className="mx-auto text-yellow-400" />
// //               <p className="mt-2">UV Index</p>
// //               <p className="text-xl">{uvIndex}</p>
// //             </CardContent>
// //           </Card>
// //         )}
// //         {humidity && (
// //           <Card className="bg-gray-900 p-4 rounded-lg text-center">
// //             <CardContent>
// //               <Droplets size={28} className="mx-auto text-blue-400" />
// //               <p className="mt-2">Humidity</p>
// //               <p className="text-xl">{humidity}%</p>
// //             </CardContent>
// //           </Card>
// //         )}
// //         {windSpeed && (
// //           <Card className="bg-gray-900 p-4 rounded-lg text-center">
// //             <CardContent>
// //               <Wind size={28} className="mx-auto text-gray-300" />
// //               <p className="mt-2">Wind</p>
// //               <p className="text-xl">{windSpeed} km/h</p>
// //             </CardContent>
// //           </Card>
// //         )}
// //         {sunriseTime && (
// //           <Card className="bg-gray-900 p-4 rounded-lg text-center">
// //             <CardContent>
// //               <Sunrise size={28} className="mx-auto text-orange-400" />
// //               <p className="mt-2">Sunrise</p>
// //               <p className="text-xl">{sunriseTime.split("T")[1]}</p>
// //             </CardContent>
// //           </Card>
// //         )}
// //         {sunsetTime && (
// //           <Card className="bg-gray-900 p-4 rounded-lg text-center">
// //             <CardContent>
// //               <Sunset size={28} className="mx-auto text-red-400" />
// //               <p className="mt-2">Sunset</p>
// //               <p className="text-xl">{sunsetTime.split("T")[1]}</p>
// //             </CardContent>
// //           </Card>
// //         )}
// //       </div>
// //     </MotionDiv>
// //   );
// // }

// // // Get Weather Icons
// // const getWeatherIcon = (condition: string) => (condition?.toLowerCase().includes("rain") ? <CloudRain size={48} /> : <CloudSun size={48} />);


// "use client";

// import { useEffect, useState } from "react";
// import { useRouter } from "next/navigation";
// import {
//   Sun, CloudRain, Wind, Droplets, ArrowLeft, CloudSun, Cloud, Sunrise, Sunset, AlertCircle
// } from "lucide-react";
// import { Card, CardContent } from "@/components/ui/card";
// import dynamic from "next/dynamic";

// const MotionDiv = dynamic(() => import("framer-motion").then(mod => mod.motion.div), { ssr: false });

// export default function WeatherApp() {
//   const router = useRouter();
//   const [weatherData, setWeatherData] = useState<any>(null);
//   const [aqiData, setAqiData] = useState<any>(null);
//   const [location, setLocation] = useState<string>("Your City");
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);

//   const API_KEY = process.env.NEXT_PUBLIC_TOMORROW_API_KEY;
//   const AQI_API_KEY = process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY;

//   const fetchWeather = async (lat: string, lon: string) => {
//     try {
//       setLoading(true);
//       setError(null);

//       // Fetch Location Name
//       const locationResponse = await fetch(
//         `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lon}&localityLanguage=en`
//       );
//       const locationData = await locationResponse.json();
//       setLocation(locationData.city || "Unknown Location");

//       // Fetch Weather Data
//       const response = await fetch(
//         `https://api.tomorrow.io/v4/weather/forecast?location=${lat},${lon}&timesteps=1d&apikey=${API_KEY}`
//       );
//       if (!response.ok) throw new Error("Failed to fetch weather data");
//       const data = await response.json();
//       setWeatherData(data?.timelines || null);

//       // Fetch AQI Data
//       const aqiResponse = await fetch(
//         `https://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${AQI_API_KEY}`
//       );
//       if (!aqiResponse.ok) throw new Error("Failed to fetch AQI data");
//       const aqiData = await aqiResponse.json();
//       setAqiData(aqiData?.list?.[0] || null);
//     } catch (err) {
//       setError("Failed to fetch weather or AQI data.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition(
//         (position) => {
//           const lat = position.coords.latitude.toString();
//           const lon = position.coords.longitude.toString();
//           localStorage.setItem("userLat", lat);
//           localStorage.setItem("userLon", lon);
//           fetchWeather(lat, lon);
//         },
//         () => {
//           setError("Location access denied. Please enable location services.");
//           setLoading(false);
//         }
//       );
//     } else {
//       setError("Geolocation not supported by your browser.");
//       setLoading(false);
//     }
//   }, []);

//   if (loading) return (
//     <div className="min-h-screen flex items-center justify-center bg-blue-100 text-blue-800">
//       <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-400"></div>
//     </div>
//   );

//   if (error) return (
//     <div className="min-h-screen flex items-center justify-center text-red-500">
//       {error}
//     </div>
//   );

//   const currentTemp = weatherData?.daily?.[0]?.values?.temperatureMax;
//   const minTemp = weatherData?.daily?.[0]?.values?.temperatureMin;
//   const condition = weatherData?.daily?.[0]?.values?.weatherCode;
//   const uvIndex = weatherData?.daily?.[0]?.values?.uvIndexMax;
//   const humidity = weatherData?.daily?.[0]?.values?.humidity;
//   const windSpeed = weatherData?.daily?.[0]?.values?.windSpeed;
//   const sunriseTime = weatherData?.daily?.[0]?.values?.sunrise?.split("T")[1];
//   const sunsetTime = weatherData?.daily?.[0]?.values?.sunset?.split("T")[1];

//   return (
//     <MotionDiv
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ duration: 1.2 }}
//       className="min-h-screen bg-gradient-to-b from-blue-300 via-blue-200 to-blue-100 text-blue-900 p-6"
//     >
//       {/* Header with Back Arrow & City Name */}
//       <div className="flex items-center mb-6">
//         <button onClick={() => router.back()} className="p-2">
//           <ArrowLeft size={28} className="text-blue-900" />
//         </button>
//         <h1 className="text-2xl font-semibold ml-3">{location}</h1>
//       </div>

//       {/* Current Temperature */}
//       <div className="flex justify-between items-center">
//         <h1 className="text-6xl font-bold">{currentTemp ? `${currentTemp}°` : "--"}</h1>
//         {getWeatherIcon(condition)}
//       </div>
//       <p className="text-lg text-blue-700">{minTemp ? `${minTemp}° / ${currentTemp}°` : "--"}</p>
//       <p className="text-lg text-blue-700">{condition || ""}</p>

//       {/* Weekly Forecast */}
//       <Card className="bg-white p-4 mt-6 rounded-lg shadow-md">
//         <CardContent>
//           <div className="flex flex-col space-y-4">
//             {weatherData?.daily?.slice(0, 7).map((day: any, index: number) => (
//               <div key={index} className="flex justify-between">
//                 <p>{new Date(day.time).toLocaleDateString('en-US', { weekday: 'long' })}</p>
//                 <div className="flex items-center">
//                   {getWeatherIcon(day.values.weatherCode)}
//                   <span className="ml-2">{day.values.temperatureMin}° / {day.values.temperatureMax}°</span>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </CardContent>
//       </Card>

//       {/* AQI Section */}
//       <Card className="bg-white p-4 mt-6 rounded-lg shadow-md">
//         <CardContent>
//           <h3 className="text-xl font-semibold">Air Quality Index</h3>
//           {aqiData ? (
//             <div className="flex items-center justify-between">
//               <p className="text-4xl font-bold" style={{ color: getAqiColor(aqiData.main.aqi) }}>
//                 {aqiData.main.aqi}
//               </p>
//               <p className="text-lg">{getAqiWarning(aqiData.main.aqi)}</p>
//             </div>
//           ) : null}
//         </CardContent>
//       </Card>
//     </MotionDiv>
//   );
// }

// // Helper Functions
// const getWeatherIcon = (condition: string) => {
//   if (!condition) return null;
//   const icon = condition.toLowerCase();
//   if (icon.includes("rain")) return <CloudRain size={48} />;
//   if (icon.includes("cloud")) return <Cloud size={48} />;
//   if (icon.includes("clear")) return <Sun size={48} />;
//   return <CloudSun size={48} />;
// };

// const getAqiColor = (aqi: number) => aqi <= 50 ? "#00E400" : aqi <= 100 ? "#FFFF00" : "#FF7E00";
// const getAqiWarning = (aqi: number) => aqi <= 50 ? "Good" : aqi <= 100 ? "Moderate" : "Unhealthy";


"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  Sun, CloudRain, Wind, Droplets, ArrowLeft, CloudSun, Cloud, Sunrise, Sunset
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import dynamic from "next/dynamic";

const MotionDiv = dynamic(() => import("framer-motion").then(mod => mod.motion.div), { ssr: false });

export default function WeatherApp() {
  const router = useRouter();
  const [weatherData, setWeatherData] = useState<any>(null);
  const [currentTemp, setCurrentTemp] = useState<number | null>(null);
  const [aqiData, setAqiData] = useState<any>(null);
  const [location, setLocation] = useState<string>("Your City");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const API_KEY = process.env.NEXT_PUBLIC_TOMORROW_API_KEY;
  const AQI_API_KEY = process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY;

  const fetchWeather = async (lat: string, lon: string) => {
    try {
      setLoading(true);
      setError(null);

      // 📍 Fetch Location Name
      const locationResponse = await fetch(
        `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lon}&localityLanguage=en`
      );
      const locationData = await locationResponse.json();
      setLocation(locationData.city || "Unknown Location");

      // 🌡️ Fetch Real-Time Weather
      const currentWeatherResponse = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m&timezone=auto`
      );
      const currentWeatherData = await currentWeatherResponse.json();
      setCurrentTemp(currentWeatherData?.current?.temperature_2m || null);

      // 🌤️ Fetch 7-Day Forecast
      const response = await fetch(
        `https://api.tomorrow.io/v4/weather/forecast?location=${lat},${lon}&timesteps=1d&apikey=${API_KEY}`
      );
      if (!response.ok) throw new Error("Failed to fetch weather data");
      const data = await response.json();
      setWeatherData(data?.timelines || null);

      // 🌫️ Fetch AQI Data
      const aqiResponse = await fetch(
        `https://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${AQI_API_KEY}`
      );
      if (!aqiResponse.ok) throw new Error("Failed to fetch AQI data");
      const aqiData = await aqiResponse.json();
      setAqiData(aqiData?.list?.[0] || null);
    } catch (err) {
      setError("Failed to fetch weather or AQI data.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const lat = position.coords.latitude.toString();
          const lon = position.coords.longitude.toString();
          localStorage.setItem("userLat", lat);
          localStorage.setItem("userLon", lon);
          fetchWeather(lat, lon);
        },
        () => {
          setError("Location access denied. Please enable location services.");
          setLoading(false);
        }
      );
    } else {
      setError("Geolocation not supported by your browser.");
      setLoading(false);
    }
  }, []);

  if (loading) return (
    <div className="min-h-screen flex items-center justify-center bg-blue-100 text-blue-800">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-400"></div>
    </div>
  );

  if (error) return (
    <div className="min-h-screen flex items-center justify-center text-red-500">
      {error}
    </div>
  );

  const minTemp = weatherData?.daily?.[0]?.values?.temperatureMin;
  const condition = weatherData?.daily?.[0]?.values?.weatherCode;
  const uvIndex = weatherData?.daily?.[0]?.values?.uvIndexMax;
  const humidity = weatherData?.daily?.[0]?.values?.humidity;
  const windSpeed = weatherData?.daily?.[0]?.values?.windSpeed;
  const sunriseTime = weatherData?.daily?.[0]?.values?.sunrise?.split("T")[1];
  const sunsetTime = weatherData?.daily?.[0]?.values?.sunset?.split("T")[1];

  return (
    <MotionDiv
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
      className="min-h-screen bg-gradient-to-b from-blue-300 via-blue-200 to-blue-100 text-blue-900 p-6"
    >
      {/* Header with Back Arrow & City Name */}
      <div className="flex items-center mb-6">
        <button onClick={() => router.back()} className="p-2">
          <ArrowLeft size={28} className="text-blue-900" />
        </button>
        <h1 className="text-2xl font-semibold ml-3">{location}</h1>
      </div>

      {/* Current Temperature */}
      <div className="flex justify-between items-center">
        <h1 className="text-6xl font-bold">{currentTemp ? `${currentTemp}°` : "--"}</h1>
        {getWeatherIcon(condition)}
      </div>
      <p className="text-lg text-blue-700">{minTemp ? `${minTemp}° / ${currentTemp}°` : "--"}</p>
      <p className="text-lg text-blue-700">{condition || ""}</p>

      {/* Weekly Forecast */}
      <Card className="bg-blue-100 p-4 mt-6 rounded-lg shadow-md">
  <CardContent>
    <h3 className="text-xl font-semibold mb-4 text-blue-800">7-Day Forecast</h3>
    <div className="flex flex-col space-y-4">
      {weatherData?.daily &&
        weatherData.daily
          .slice(1, 8) // ✅ Start from tomorrow (index 1), not today (index 0)
          .map((day: any, index: number) => {
            const dayOfWeek = new Date(day.time).toLocaleDateString("en-US", { weekday: "long" });

            return (
              <div key={index} className="flex justify-between bg-white p-2 rounded-md shadow-sm">
                <p className="font-medium text-blue-700">{dayOfWeek}</p>
                <div className="flex items-center text-blue-600">
                  {getWeatherIcon(day.values.weatherCode)}
                  <span className="ml-2 font-semibold">
                    {day.values.temperatureMin ?? "--"}° / {day.values.temperatureMax ?? "--"}°
                  </span>
                </div>
              </div>
            );
          })}
    </div>
  </CardContent>
</Card>



      {/* AQI Section */}
      <Card className="bg-white p-4 mt-6 rounded-lg shadow-md">
        <CardContent>
          <h3 className="text-xl font-semibold">Air Quality Index</h3>
          {aqiData ? (
            <div className="flex items-center justify-between">
              <p className="text-4xl font-bold" style={{ color: getAqiColor(aqiData.main.aqi) }}>
                {aqiData.main.aqi}
              </p>
              <p className="text-lg">{getAqiWarning(aqiData.main.aqi)}</p>
            </div>
          ) : null}
        </CardContent>
      </Card>
    </MotionDiv>
  );
}

// Helper Functions
const getWeatherIcon = (weatherCode: string | null) => {
  if (!weatherCode) return <Cloud size={24} />;
  return weatherCode.toLowerCase().includes("rain") ? <CloudRain size={24} /> : <Sun size={24} />;
};

const getAqiColor = (aqi: number) => aqi <= 50 ? "#00E400" : aqi <= 100 ? "#FFFF00" : "#FF7E00";
const getAqiWarning = (aqi: number) => aqi <= 50 ? "Good" : aqi <= 100 ? "Moderate" : "Unhealthy";
