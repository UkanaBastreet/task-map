import Input from "./Input";
import { action } from "@storybook/addon-actions";

export default {
  title: "UI/Input",
  component: Input,
};

const cb = action("INPUT onChange", {});

export const PrimaryInput = (props: any) => {
  return <Input placeholder="Primary" type="text" onChange={cb} {...props} />;
};

export const SecondaryInput = (props: any) => {
  return <Input placeholder="Secondary" type="text" onChange={cb} {...props} />;
};
