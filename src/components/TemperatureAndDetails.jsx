import React from "react";
import {
  UilTemperature,
  UilTear,
  UilWind,
  UilSun,
  UilSunset,
} from "@iconscout/react-unicons";
import {
  formatToLocalTime,
  iconUrlFromCode,
  findDirection,
} from "../services/WeatherService";

function TemperatureAndDetails({
  weather: { details, icon, temp, temp_min, temp_max, deg, speed, humidity },
}) {
  return (
    <div>
      <div className="flex items-center justify-center py-6 text-xl text-grey-500">
        <p>{details}</p>
      </div>

      <div className="flex flex-row items-center justify-between text-white py-3">
        <img src={iconUrlFromCode(icon)} alt="" className="w-20" />
        <p className="text-5xl">{`${temp.toFixed()}°`}</p>
        <div className="flex flex-col space-y-2">
          <div className="flex font-light text-sm items-center justify-center">
            <UilTear size={18} className="mr-1" />
            Humidity:
            <span className="font-medium ml-1">{`${humidity.toFixed()}%`}</span>
          </div>
          <div className="flex font-light text-sm items-center justify-center">
            <UilWind size={18} className="mr-1" />
            Wind:
            <span className="font-medium ml-1">
              {`${speed.toFixed()} km/h`}
            </span>
          </div>
          <div className="flex font-light text-sm items-center justify-center">
            <UilWind size={18} className="mr-1" />
            Wind Direction:
            {/* if ((degree>337.5 && degree<360)|| (degree>22.5 && degree<22.5))
    {return 'Northerly';}
    else if(degree>22.5 && degree<67.5){return 'North Easterly';}
    else if(degree>67.5 && degree<112.5){return 'Easterly';}
    else if(degree>122.5 && degree<157.5){return 'South Easterly';} 
    else if(degree>157.5 && degree<202.5){return 'Southerly';}
    else if(degree>202.5 && degree<247.5){return 'South Westerly';}
    else if(degree>247.5 && degree<292.5){return 'Westerly';}
    else if(degree>292.5 && degree<337.5){return 'North Westerly';} */}
            <span className="font-medium ml-1">{`${findDirection(deg)}`}</span>
          </div>
        </div>
      </div>

      <div className="flex flex-row items-center justify-center space-x-2 text-white text-sm py-3">
        <UilSun />
        <p className="font-light">
          High:{" "}
          <span className="font-medium ml-1">{`${temp_max.toFixed()}°`}</span>
        </p>
        <p className="font-light">|</p>

        <UilSun />
        <p className="font-light">
          Low:{" "}
          <span className="font-medium ml-1">{`${temp_min.toFixed()}°`}</span>
        </p>
      </div>
    </div>
  );
}

export default TemperatureAndDetails;
