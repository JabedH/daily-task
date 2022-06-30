import React, { useState } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

const Calendar = () => {
  const [selected, setSelected] = useState(new Date());
  return (
    <div className="h-[500px]">
      <h1>Calendar</h1>
      <div className=" flex justify-center items-center">
        <DayPicker mode="single" selected={selected} onSelect={setSelected} />
      </div>
    </div>
  );
};

export default Calendar;
