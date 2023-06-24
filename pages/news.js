import Link from "next/link";
import React from "react";
import Navbar from '@/Components/Navbar';
import TopNav from '@/Components/TopNav';
import Footer from "@/Components/Footer";
import Head from "next/head";

const news = (props) => {
  const ary = props.n.reverse();
  return (
    <>
    <Head>
        <title>GMGC-News</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <TopNav/>
    <Navbar/>
    
    <div className="container">
      <div
        style={{ color: "#be6257", backgroundColor: "#efefef" }}
        className="shadow-lg text-center p-2 mb-4 my-3 rounded"
      >
        <h2>Latest News</h2>
      </div>
      {ary.map((item,index)=>{
        return (<div key={index} className="shadow p-3 mb-5 bg-body rounded my-4 ">
        <div className="card-body">
          <Link href={`/news/${item._id}`} style={{"textDecoration":"blink"}} className="card-title">{item.title}</Link>
          <p className="my-2 card-text">
          {item.des}
          </p>
        </div>
      </div>)
      })}
    </div>
    <Footer/>
    </>
  );
};

export async function getServerSideProps() {
  const res = await fetch(`http://localhost:3000/api/getnews`);
  const data = await res.json();

  return { props: data };
}

export default news;