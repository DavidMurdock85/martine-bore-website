import cx from "classnames";
import React from "react";

import { Base, BaseProps } from "./Base";

interface ColProps {
  xs?: number;
  sm?: number;
  md?: number;
  lg?: number;
}

const colPropsMap: { [x: string]: string } = {
  xs: "col",
  sm: "col-sm",
  md: "col-md",
  lg: "col-lg",
};

function getColProps(props: ColProps & BaseProps): BaseProps {
  const className = props.className;
  const classes: string[] = ["col"];
  const results: BaseProps = {};

  for (const prop in props) {
    if (prop in colPropsMap) {
      classes.push(`${colPropsMap[prop]}-${props[prop]}`);
    } else {
      results[prop] = props[prop];
    }
  }
  const htmlClasses = cx(className, classes);
  results.className = htmlClasses ? htmlClasses : undefined;
  return results;
}

export function Col(props: ColProps & BaseProps) {
  return <Base {...getColProps(props)} />;
}
