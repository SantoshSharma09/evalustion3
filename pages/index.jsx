import Head from "next/head";
import React from "react";
// import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";

const Page = ({ details }) => {
  console.log("san", details);

  return (
    <>
      <Head>
        <title>Portfolio Page</title>
        <meta titile="description" content="blogs,react.js,typescript"></meta>
        {/* <link ref="icon" href="/favicon.ico" /> */}
      </Head>
      <div style={{ display: "flex" }}>
        <div
          style={{
            display: "grid",
            width: "25%",
            border: "1px solid black",
            margin: "auto",
          }}
        >
          <div style={{ margin: "auto" }}>
            <img
              style={{ borderRadius: "50%", width: "60%", margin: "auto" }}
              src="https://avatars.githubusercontent.com/u/109049556?v=4"
            />
            <p>Santosh Sharma</p>
          </div>
          <div>
            <h1>Resume</h1>
            <a href="https://drive.google.com/file/d/1ah7a1cotcmOdPCiiUR-GtJnQJWep75HT/view?usp=share_link">
              Santosh_Sharma_Resume.pdf
            </a>
          </div>
          <div>
            <h1>Tech Stack</h1>
            <p>Javascript</p>
            <p>HTML</p>
            <p>CSS</p>
            <p>ReactJs</p>

            <p>Express</p>
          </div>
          <div>
            <h1>Experience & Education</h1>
            <p>Full Stack Develooment, Masai School, Bengaluru</p>
            <p>B.A (Hons) University of Delhi</p>
          </div>
        </div>
        <div style={{ width: "75%", paddingLeft: "20px" }}>
          <div>
            <main>
              {details.items.map((blog) => {
                console.log(blog.title);
                return (
                  <a href="https://mailchimp.com" key={blog.id}>
                    <h1>Project name: {blog.name}</h1>
                    <p>Star count: {blog.stargazers_count}</p>
                    <p>Fork count:{blog.forks_count}</p>
                    <p> Language: {blog.language}</p>
                  </a>
                );
              })}
            </main>
            <h1></h1>
          </div>
        </div>
      </div>
    </>
  );
};

export async function getStaticProps() {
  let response = await fetch(
    `https://api.github.com/search/repositories?q=user:SantoshSharma09+fork:true&sort=updated&per_page=10&type=Repositories`,
    {
      method: "GET",
    }
  );
  let data = await response.json();
  console.log(data);
  return {
    props: {
      details: data,
    },
  };
}
export default Page;
