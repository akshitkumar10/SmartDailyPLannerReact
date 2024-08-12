import React from 'react';
import { Chart } from 'react-google-charts';

const GanttChart = ({res}) => {
    const response = res
    
    // Function to convert the JSON to a list of lists
    function convertJsonToListOfLists(jsonData) {
      //console.log(jsonData)
      jsonData = jsonData.replaceAll('```json', '')
      jsonData = jsonData.replace('```', '')
      var formattedJson = JSON.parse(jsonData)
      console.log(formattedJson)
      return formattedJson.map(item => [
        item.id,
        item.name,
        item.name,
        new Date(item.start),
        new Date(item.end),
        null,
        100,
        null
      ]);
    }    

    const columns = [
        { type: "string", label: "Task ID" },
        { type: "string", label: "Task Name" },
        { type: "string", label: "Resource" },
        { type: "date", label: "Start Date" },
        { type: "date", label: "End Date" },
        { type: "number", label: "Duration" },
        { type: "number", label: "Percent Complete" },
        { type: "string", label: "Dependencies" },
    ]; 
    
    // console.log(res)
    
    var rows = (!res) ? [
      [
              "2014Spring",
              "Spring 2014",
              "spring",
              new Date('2024-03-08T06:30:00'),
              new Date('2024-03-08T07:00:00'),
              null,
              100,
              null,
            ],
    ] : convertJsonToListOfLists(res)
    const data = [columns, ...rows];
      
    const options = {
        height: 35*rows.length,
        gantt: {
          trackHeight: 30,
        },
      };

  return (
    <div>
      <Chart
      chartType="Gantt"
      width="100%"
      height="50%"
      data={data}
      options={options}
    />
    </div>
  );
};

export default GanttChart;