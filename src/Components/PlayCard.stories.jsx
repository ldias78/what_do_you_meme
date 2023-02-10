import React from "react";
import PlayCard from "./PlayCard";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Example/PlayCard",
  component: PlayCard,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   backgroundColor: { control: "color" },
  // },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <PlayCard {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  primary: true,
  label: "PlayCard",
};

// export const Secondary = Template.bind({});
// Secondary.args = {
//   label: "PlayerHand",
// };

// export const Large = Template.bind({});
// Large.args = {
//   size: "large",
//   label: "PlayerHand",
// };

// export const Small = Template.bind({});
// Small.args = {
//   size: "small",
//   label: "PlayerHand",
// };

// WITH CLICKON THE CARD YOU WANT TEST
