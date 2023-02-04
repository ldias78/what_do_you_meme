import React from "react";

import CardCaptions from "./CardCaptions";

export default {
  title: "Example/Card",
  component: CardCaptions,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

const Template = (args) => <CardCaptions {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  primary: true,
  label: "Card",
};
