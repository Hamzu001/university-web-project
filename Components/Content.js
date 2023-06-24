import React, { useEffect, useState } from "react";
// import Link from "next/link";

const Content = () => {


  return (
    <div className="container">
      <div className="row">
      <div className="col-3">
        </div>


        <div className="col-6">
          <h2>Principal </h2>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis
          incidunt molestias velit hic. Natus nihil impedit blanditiis ratione
          et, ad, non ipsam obcaecati harum voluptatibus officia exercitationem
          ipsa <br /> voluptatum. Omnis, doloribus laboriosam illo deserunt ut
          laudantium officiis ducimus odio eligendi atque! A necessitatibus,
          laudantium qui impedit, provident culpa odit quaerat temporibus quidem
          delectus soluta veniam repellendus, doloremque neque esse deserunt.{" "}
          <br />
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam
          nobis veniam eligendi maiores esse reiciendis quae rerum commodi sed
          ipsam nam ratione illum repellat fugiat suscipit, accusantium quia
          voluptates, vero aut mollitia? Saepe, facere? <br />
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta est
          cum molestiae ipsa exercitationem incidunt. Ratione aliquid hic sunt
          dolorem id numquam fuga est placeat nobis asperiores atque ad,
          cupiditate praesentium illum?
        </div>
        <div className="col-3">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Notifications</th>
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
    </div>
  );
};



export async function getServerSideProps() {
  const res = await fetch(`http://localhost:3000/api/getnews`);
  const data = await res.json();

  console.log(data)
  return { props: data };
}

export default Content;
