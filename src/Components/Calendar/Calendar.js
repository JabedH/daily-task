import { format } from "date-fns";
import React, { useState } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

const Calendar = () => {
  const [selected, setSelected] = useState(new Date());
  return (
    <div className="drawer">
      <div className="my-10">
        <h1 className="  text-2xl font-bold">Calendar</h1>
        <div className=" flex justify-center items-center">
          <DayPicker mode="single" selected={selected} onSelect={setSelected} />
        </div>
        <h1>You have selected: {format(selected, "PP")}</h1>
      </div>
    </div>
  );
};

export default Calendar;
