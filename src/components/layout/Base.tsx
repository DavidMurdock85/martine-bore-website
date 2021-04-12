import cx from "classnames";
import React from "react";

// Let's create a mapping of the props for our react component and the classNames we want them to produce
// This has a few benefits:
// 1. We can leverage tooling like TS, Flow & Proptypes to enforce APIs
// 2. We can use this to help generate documentation
// 3. We can contain our common css classes - making it easier to find and delete as the codebase grows

const layoutPropMap: { [x: string]: { [x: string]: string } | string } = {
  objectFit: {
    contain: "img-contain",
    fill: "img-fill",
    cover: "img-cover",
  },
  fluid: "img-fluid",
  display: {
    flex: "d-flex",
    inlineFlex: "d-inline-flex",
    block: "d-block",
    none: "d-none",
  },
  grid: {
    row: "row",
    container: "container",
  },
  textAlign: {
    left: "text-left",
    center: "text-center",
    right: "text-right",
  },
  flexDirection: {
    colReverse: "flex-column-reverse",
    column: "flex-column",
    row: "flex-row",
    rowReverse: "flex-row-reverse",
  },
  justifyContent: {
    "flex-start": "justify-content-start",
    center: "justify-content-center",
    "flex-end": "justify-content-end",
    "space-between": "justify-content-between",
    "space-around": "justify-content-around",
  },
  alignItems: {
    "flex-start": "align-items-start",
    center: "align-items-center",
    "flex-end": "align-items-end",
    "space-between": "align-items-between",
    "space-around": "align-items-around",
  },
  alignSelf: {
    "flex-start": "align-self-start",
    center: "align-self-center",
    "flex-end": "align-self-end",
  },
  flexWrap: {
    wrap: "flex-wrap",
    nowrap: "flex-nowrap",
    wrapReverse: "flex-wrap-reverse",
  },
  center: "align-items-center justify-content-center",
  expand: {
    all: "a-full",
    height: "h-full",
    width: "w-full",
  },
};

const spacingPropMap: { [x: string]: string } = {
  mb: "mb-val",
  mt: "mt-val",
  mr: "mr-val",
  ml: "ml-val",
  mx: "mx-val",
  my: "my-val",
  m: "m-val",
  p: "p-val",
  pb: "pb-val",
  pt: "pt-val",
  pr: "pr-val",
  pl: "pl-val",
  px: "px-val",
  py: "py-val",
};

// this needs to match the definition of `BaseProps` so that we can not propagate those into the tag
const ownProps = {
  tag: true,
  style: true,
  className: true,
};

interface Sizing<T> {
  xs?: T;
  sm?: T;
  md?: T;
  lg?: T;
  xl?: T;
}

type keyTypes = "xs" | "sm" | "md" | "lg" | "xl";
const sizingKeys = (["xs", "sm", "md", "lg", "xl"] as unknown) as [keyTypes];

export interface BaseProps extends JSX.IntrinsicAttributes {
  tag?: string;
  style?: { [x: string]: string };
  className?: string;
  // layout properties
  objectFit?: "contain" | "fill" | "cover";
  fluid?: true;
  display?: "flex" | "inlineFlex" | "block" | "none";
  textAlign?: "left" | "center" | "right";
  flexDirection?: "colReverse" | "column" | "row" | "rowReverse";
  justifyContent?: "flex-start" | "center" | "flex-end" | "space-between" | "space-around";
  alignSelf?: "flex-start" | "center" | "flex-end" | "space-between" | "space-around";
  alignItems?: "flex-start" | "center" | "flex-end" | "space-between" | "space-around";
  alignContent?: "flex-start" | "center" | "flex-end" | "space-between" | "space-around";
  flexWrap?: "nowrap" | "wrap" | "wrapReverse";
  center?: true;
  expand?: "width";
  // spacing properties
  mb?: number | Sizing<number>;
  mt?: number | Sizing<number>;
  mr?: number | Sizing<number>;
  ml?: number | Sizing<number>;
  mx?: number | Sizing<number>;
  my?: number | Sizing<number>;
  m?: number | Sizing<number>;
  p?: number | Sizing<number>;
  pb?: number | Sizing<number>;
  pt?: number | Sizing<number>;
  pr?: number | Sizing<number>;
  pl?: number | Sizing<number>;
  px?: number | Sizing<number>;
  py?: number | Sizing<number>;
  // this is the pass through tag properties
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [x: string]: any;
}

function getProps(props: BaseProps): BaseProps {
  const classes: string[] = [];
  const results: BaseProps = {};
  const style = props.style || {};
  const className = props.className;

  for (const prop in props) {
    if (prop in spacingPropMap) {
      let addClass = false;
      const value = props[prop] as number | Sizing<number>;
      const setStyleValue = (propertyValue?: number | Sizing<number>, styleKey?: string): void => {
        if (typeof propertyValue === "number") {
          // magic that sets the css variable and enforces a unit of 8
          // because we are using numbers here we can do things like mx={1} to get the "nudges"
          const defaultKey = `--${spacingPropMap[prop]}`;
          const styleValue = `${propertyValue * 0.5}rem`;

          if (style[defaultKey]) {
            style[`--${spacingPropMap[prop]}-${styleKey}`] = styleValue;
          } else {
            style[defaultKey] = styleValue;
          }
          addClass = true;
        } else if (typeof propertyValue === "object") {
          // push each in order
          sizingKeys.forEach((item) => {
            setStyleValue((value as Sizing<number>)[item], item);
          });
        }
      };
      setStyleValue(value);
      if (addClass) {
        // These prop map directly to the css we defined so we add the classname
        classes.push(prop);
      }
    } else if (prop in layoutPropMap) {
      // next we map the main layout properties
      // Map the prop values to css classNames
      const mapped =
        typeof layoutPropMap[prop] === "object"
          ? (layoutPropMap[prop] as { [x: string]: string })[props[prop]]
          : (layoutPropMap[prop] as string);
      // Add the classNames to our classNames list
      classes.push(mapped);
    } else if (!(prop in ownProps)) {
      // Assign the rest of the properties to the return object
      results[prop] = props[prop];
    }
  }

  // Return the modified set of props to the component
  const htmlClasses = cx(className, classes);
  results.className = htmlClasses ? htmlClasses : null;
  results.style = style;
  return results;
}

/* export function Base(props: BaseProps): React.ReactElement {
  const Tag = props.tag || "div";
  return <Tag {...getProps(props)} />;
} */

export const Base = React.forwardRef((props: BaseProps, ref) => {
  const Tag = props.tag || "div";
  return <Tag ref={ref} {...getProps(props)} />;
});
