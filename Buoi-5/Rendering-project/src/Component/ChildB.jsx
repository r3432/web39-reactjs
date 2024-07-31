import React from 'react';

const ChildB = ({ array }) => {
  const lengtharr = array.length;

  return (
    <>
      {lengtharr > 0 ? (
        array.map((item, index) => (
          <h1 key={index}>{item.name}</h1>
        ))
      ) : "ko có dữ liệu"}
    </>
  );
};

export default ChildB;
