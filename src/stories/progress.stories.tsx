import { Progress } from "@/components/ui/progress";
import type { Meta, StoryObj } from "@storybook/react";
import { useEffect, useState } from "react";

const meta = {
  title: "Progress",
  component: Progress,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {},
} satisfies Meta<typeof Progress>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: 40,
    className: "w-[500px]",
  },
  render: (args) => {
    const [progress, setProgress] = useState(13);

    useEffect(() => {
      const timer = setTimeout(() => setProgress(66), 800);
      return () => clearTimeout(timer);
    }, []);
    return <Progress {...args} value={progress} />;
  },
};
