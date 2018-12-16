import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";

// storiesOf("Button", module)
//   .addWithJSX(
//     "with background",
//     withInfo(
//       `some descriptive text here. Maybe a description of the component`
//     )(() => <Button bg="palegoldenrod">Hello world</Button>)
//   )
//   .addWithJSX("with background 2", () => (
//     <Button bg={text("bg", "blue")}>Hello world2</Button>
//   ));

import { text, boolean } from "@storybook/addon-knobs/react";
import { Button } from "./Button";
storiesOf("Button", module)
  .addWithJSX(
    "with background",
    withInfo(`
      description
      
      ~~~js
      <Button>slkdjslkdj</Button>
      ~~~
      `)(() => <Button bg="palegoldenrod">Hello world</Button>)
  )
  .addWithJSX("with background 2", () => (
    <Button disabled={boolean("disabled", false)}>
      {text("text", "Hello world")}
    </Button>
  ));
