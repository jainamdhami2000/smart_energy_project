import DatePicker from "react-datepicker";
import { Button, ButtonGroup, Form, ToggleButton } from "react-bootstrap";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
export const DatePick = () => {
  const [startDate, setStartDate] = useState(new Date("05/01/2020"));
  const [checked, setChecked] = useState(false);
  const [reportContent, setReportContent] = useState(
    "The report will be generated here"
  );
  const onSubmit = (e) => {
    //use startdate and checked to make api call
    //result in setReportContent
  };
  console.log(startDate);
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "2rem",
        }}
      >
        <div style={{ marginRight: "16px" }}>
          <DatePicker
            showTimeSelect={checked}
            minDate={new Date("05/01/2020")}
            maxDate={new Date("05/04/2020")}
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            timeIntervals={60}
          />
        </div>
        <ButtonGroup style={{ width: "100%" }}>
          <ToggleButton
            id="toggle-check"
            type="checkbox"
            variant="outline-primary"
            checked={checked}
            onChange={(e) => setChecked(e.currentTarget.checked)}
            size="sm"
          >
            Hour
          </ToggleButton>
          <ToggleButton
            id="toggle-check"
            type="checkbox"
            variant="outline-primary"
            checked={!checked}
            onChange={(e) => setChecked(!e.currentTarget.checked)}
            size="sm"
          >
            Day
          </ToggleButton>
        </ButtonGroup>
      </div>

      <Form.Control
        as="textarea"
        placeholder="Leave a comment here"
        value={reportContent}
        style={{ height: "600px", width: "600px", marginTop: "10px" }}
        disabled
      />

      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "16px" }}
      >
        <Button size="md" onClick={onSubmit}>
          Generate Report
        </Button>
      </div>
    </div>
  );
};
