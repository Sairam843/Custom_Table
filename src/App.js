import React, { useEffect, useState } from "react";
import "./styles.css";

// Dataset which needs to be converted to be table
const datas = {
  4533: {
    name: "john",
    email: "john@test.com",
    age: 22,
    city: "NewYork",
    address: "test",
    blood_group: "A+",
    country: "USA",
  },
  3477: {
    name: "Alice",
    email: "alicetest.com",
    age: 26,
    city: "New jercy",
    address: "t",
    bloodGroup: "A+",
    country: "USA",
  },
  6677: {
    name: "mike",
    email: "mike@test.com",
    age: 24,
    city: "Miami",
    address: "test",
    bloodGroup: "A+",
    country: "USA",
  },
  6759: {
    name: "sham",
    email: "shame@test.com",
    age: 29,
    city: "Bengaluru",
    address: "test",
    bloodGroup: "A+",
    country: "USA",
  },
};

// Order of the table data
const tableOrder = [6677, 3477, 4533, 6759];

const headerData = datas[tableOrder[0]];
const header = Object.keys(headerData);

export default function App() {
  return (
    <div>
      {/* Expected Output */}
      <img
        alt="img"
        src="https://kapture-p.s3.amazonaws.com/ticket-action/0723/y4kayjmi8x/dynamicdataTable.png"
      />
      <table>
        <tr>
          {header.map((key) => (
            <th key={key}>{key}</th>
          ))}
        </tr>
        {tableOrder.map((key) => (
          <tr key={key}>
            {console.log(datas[key])}
            {Object.values(datas[key]).map((value, index) => (
              <td key={index}>{value}</td>
            ))}
          </tr>
        ))}
      </table>
    </div>
  );
}
