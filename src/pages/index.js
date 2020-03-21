import React from "react";
import { Helmet } from "react-helmet";
import { useSiteMetadata } from "../hooks/use-site-metadata";

export default () => {
  const { title, description } = useSiteMetadata();
  return (
    <>
      <Helmet htmlAttributes={{ lang: "en" }}>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Helmet>
      <div className="p-20">
        <h1 className="font-bold text-xl">{title}</h1>
        <div className="mt-4">Hello world!</div>
      </div>
    </>
  );
};
