import React from "react";
import Select from "react-select";
import { ScheduleMeeting } from "react-schedule-meeting";
const App = () => {
  const availableTimeslots = [0, 1, 2, 3, 4, 5].map((id) => {
    return {
      id,
      startTime: new Date(
        new Date(new Date().setDate(new Date().getDate() + id)).setHours(
          0,
          0,
          0,
          0
        )
      ),
      endTime: new Date(
        new Date(new Date().setDate(new Date().getDate() + id)).setHours(
          24,
          0,
          0,
          0
        )
      ),
    };
  });

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "10px",
        }}
      >
        <Select
          name="Select Mentor"
          isSearchable={true}
          options={[
            {
              value: "Demo Mentor",
              label: "Demo Mentor",
            },
          ]}
        />
      </div>
      <ScheduleMeeting
        borderRadius={10}
        primaryColor="#3f5b85"
        eventDurationInMinutes={60}
        availableTimeslots={availableTimeslots}
        onStartTimeSelect={console.log}
      />
    </>
  );
};

export default App;
