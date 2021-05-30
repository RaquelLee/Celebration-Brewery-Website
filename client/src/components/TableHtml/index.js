import React from 'react';
import "./style.css";
import Moment from 'react-moment';

function TableHtml({ format, headings, rows, handleClickChange }) {
  // let { format, headings, rows, click } = props;
  return (
    <table className={`table ${format || "table-striped"}`} style={{marginTop: "2%", marginRight: "2%", marginLeft: "2%"}}>
      
      <thead>
        <tr>
          {headings.map(heading => {
            if (heading === "Name") {
              return <th key={heading} onClick={handleClickChange} scope="col">{heading}</th>
            }
            else { return <th key={heading} onClick={handleClickChange} scope="col">{heading}</th> }
          })
          }
        </tr>
      </thead>
      <tbody>
        {rows.map((item) => {
          return <tr key={item.id}>
            <td>
              <Moment format="MM-DD-YYYY">{item.date_created}</Moment>
            </td>
            <td>
              {item.name}
            </td>
            <td>
              {item.email}
            </td>
            <td>
              {item.checkbox ? "Yes" : "No"}
            </td>
            <td>
              {item.feedback}
            </td>
          </tr>
        }
        )}
      </tbody>
    </table>
  );
}

export default TableHtml;