import { Grid2 } from "@mui/material";
import React from "react";
import { getDate } from "../../utils";

const Signature = ({data}) => {
  const todayDate = getDate();
  return (
    <Grid2 id="cert-sign" container spacing={10}>
      <Grid2 item size={6} id="sign1">
        <p className="font-bold text-sm">{data.manager} </p>
        <p className="designation text-gray-700">Training Manager </p>
        <p className="border-b border-black h-7 w-32 mb-1"> </p>
        <p className="designation text-gray-700">Dubai, {todayDate} </p>
      </Grid2>
      <Grid2  size={6} id="sign2">
        <p className="font-bold text-sm">{data.md} </p>
        <p className="designation text-gray-700">Managing Director </p>
        <p className="border-b border-black h-7 w-32 mb-1"> </p>
        <p className="designation text-gray-700">Dubai, {todayDate} </p>
      </Grid2>
    </Grid2>
  );
};

export default Signature;
