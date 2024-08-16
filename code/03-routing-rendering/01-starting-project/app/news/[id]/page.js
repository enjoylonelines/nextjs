import React from "react";

const page = ({ params }) => {
  const { id } = params;
  return <div>{id}번 상세 페이지</div>;
};

export default page;
