import React from "react";
import Link from "next/link";


const Events = () => {
  return (
    <div className="row">
       <div className="col-sm-9 ">
            <div className="embed-responsive embed-responsive-16by9">
              <iframe
                style={{ height: "400px", width: "800px" }}
                className="embed-responsive-item my-5"
                src="https://www.youtube.com/embed/oMQIgZPf5Ng"
              ></iframe>
            </div>
          </div>
      
      <div className="col-sm-3">
        <table className="table">
          <thead>
            <tr>
              <th style={{ color: "#be6257" }} scope="col">
                <h4>Events</h4>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td scope="row">
                Visit of Commissioner Faisalabad <br />
                Read more
              </td>
            </tr>
            <tr>
              <td scope="row">
                Visit of Commissioner Faisalabad <br />
                Read more
              </td>
            </tr>
            <tr>
              <td scope="row">
                Visit of Commissioner Faisalabad <br />
                Read more
              </td>
            </tr>
            <tr>
              <td scope="row">
                Visit of Commissioner Faisalabad <br />
                Read more
              </td>
            </tr>
            <tr>
              <td scope="row">
                Visit of Commissioner Faisalabad <br />
                Read more
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Events;
