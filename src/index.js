import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import "./index.css";
import { Table } from "antd";
import Data from "./countries";
const { Column } = Table;

const data = Data;

ReactDOM.render(
  <Table dataSource={data}>
    <Column title="Country Name" dataIndex="name" key="name" />
    <Column title="Country Code" dataIndex="code" key="code" />
  </Table>,
  document.getElementById("container")
);
