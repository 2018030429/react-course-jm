import React from "react";
import { Fragment } from "react";
import MaterialCard from "./MaterialCard";
import MaterialDrawer from "./MaterialDrawer";

export default function MaterialUI() {
  return (
    <Fragment>
      <h2> Meterial UI </h2>
      <MaterialCard/>
      <MaterialDrawer/>
    </Fragment>
  );
}
