import React from "react";
import DataTable from "react-data-table- component";

const TableComponent = (props) => {
  console.log("props of tablecomponent", props);

  return (
    <div>
      <DataTable data={props.data} columns={props.columns} />
    </div>
  );
};
export default TableComponent;
