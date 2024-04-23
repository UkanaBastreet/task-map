import Input from "./Input";
import { action } from "@storybook/addon-actions";

export default {
  title: "Input",
  component: Input,
};
const cb = action("INPUT onChange", {});
export const InputBaseExample = (props: any) => {
  return <Input placeholder="none" type="text" onChange={cb} />;
};
