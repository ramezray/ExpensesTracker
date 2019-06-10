import React from "react";
import MaterialTable from "material-table";
export default function Dec() {
  const [state, setState] = React.useState({
    columns: [
      { title: "Date", field: "Date" },
      { title: "Description", field: "Description" },
      { title: "Method", field: "Method" },
      { title: "Amount", field: "number", type: "numeric" }
    ],
    data: [
      { Date: "01/01/01", Description: "Gas", Method: "Cash", Amount: 63 },
      { Date: "01/01/01", Description: "Food", Method: "Cash", Amount: 63 }
    ]
  });

  return (
    <MaterialTable
      title="January Expenses"
      columns={state.columns}
      data={state.data}
      editable={{
        onRowAdd: newData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              const data = [...state.data];
              data.push(newData);
              setState({ ...state, data });
            }, 600);
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              const data = [...state.data];
              data[data.indexOf(oldData)] = newData;
              setState({ ...state, data });
            }, 600);
          }),
        onRowDelete: oldData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              const data = [...state.data];
              data.splice(data.indexOf(oldData), 1);
              setState({ ...state, data });
            }, 600);
          })
      }}
    />
  );
}
