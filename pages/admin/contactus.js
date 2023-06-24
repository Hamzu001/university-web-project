import AdminNav from '@/Components/AdminNav'
import Head from 'next/head'
import React from 'react'

const contactus = (props) => {
    const data = props.n.reverse()
    // console.log(props.n)
  return (
    <>
    <Head>
        <title>Admin-Contact US</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <AdminNav/>
    <div className='container'> 
    <div
        style={{ color: "#be6257", backgroundColor: "#efefef" }}
        className="shadow-lg text-center p-2 mb-4 my-4 rounded"
      >
        <h2>Contact Us page Info</h2>
      </div>
  
    <table className="table my-3">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Message</th>
    </tr>
  </thead>
  {data.map((items,index)=>{
    return(<tbody key={index}>
    <tr>
      <th scope="row">{index+1}</th>
      <td>{items.name}</td>
      <td>{items.email}</td>
      <td>{items.message}</td>
    </tr>
  </tbody>)})}
</table>
    </div>
    </>
  )
}

export async function getServerSideProps() {

    const res = await fetch(`http://localhost:3000/api/getcontacts`);
    const data = await res.json();

    return { props: data };
  }


export default contactus
