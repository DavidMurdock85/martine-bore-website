import cx from "classnames";
import React from "react";

import { Base, BaseProps } from "./Base";

interface RowProps {
  noGutters?: boolean;
}

const rowPropsMap: { [x: string]: string } = {
  noGutters: "no-gutters",
};

function getRowProps(props: RowProps & BaseProps): BaseProps {
  const className = props.className;
  const classes: string[] = [];
  const results: BaseProps = {};

  for (const prop in props) {
    if (prop in rowPropsMap) {
      classes.push(`${rowPropsMap[prop]}`);
    } else {
      results[prop] = props[prop];
    }
  }
  const htmlClasses = cx(className, classes);
  results.className = htmlClasses ? htmlClasses : null;
  return results;
}

export function Row(props: RowProps & BaseProps) {
  return <Base grid="row" {...getRowProps(props)} />;
}
