import NewsList from "@/components/news-list";
import { DUMMY_NEWS } from "@/dummy-news";
import React from "react";

const page = () => {
  return <NewsList newsList={DUMMY_NEWS} />;
};

export default page;
