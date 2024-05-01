import logo from "./logo.svg";
import "./App.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
function App() {
  const [startDate, setStartDate] = useState(new Date("05/01/2020"));
  console.log(startDate);
  return (
    <div className="App">
      <DatePicker
        showTimeSelect={true}
        minDate={new Date("05/01/2020")}
        maxDate={new Date("05/04/2020")}
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        timeIntervals={60}
      />
    </div>
  );
}

export default App;
