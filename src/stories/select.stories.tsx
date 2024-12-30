import { Select } from "@/components/ui/select";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Select",
  component: Select,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    className: "min-w-[200px]",
  },
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

const options = [
  { label: "Option 1", value: "option1" },
  { label: "Option 2", value: "option2" },
  { label: "Option 3", value: "option3" },
  { label: "Option 4", value: "option4" },
  { label: "Option 5", value: "option5" },
  { label: "Option 6", value: "option6" },
  { label: "Option 7", value: "option7" },
  { label: "Option 8", value: "option8" },
  { label: "Option 9", value: "option9" },
  { label: "Option 10", value: "option10" },
  { label: "Option 11", value: "option11" },
  { label: "Option 12", value: "option12" },
  { label: "Option 13", value: "option13" },
  { label: "Option 14", value: "option14" },
  { label: "Option 15", value: "option15" },
  { label: "Option 16", value: "option16" },
  { label: "Option 17", value: "option17" },
  { label: "Option 18", value: "option18" },
  { label: "Option 19", value: "option19" },
  { label: "Option 20", value: "option20" },
];

export const Default: Story = {
  args: {
    options,
  },
  render: (args) => {
    return <Select {...args} />;
  },
};

export const MultiSelect: Story = {
  args: {
    options,
    isMulti: true,
    onChange(newValue) {},
  },
  render: (args) => {
    return <Select {...args} />;
  },
};
