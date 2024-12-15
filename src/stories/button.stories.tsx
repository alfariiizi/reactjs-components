import { Button } from "@/components/ui/button";
import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { LayoutDashboard } from "lucide-react";

const meta = {
  title: "Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    children: "Button",
    variant: "default",
    size: "default",
    isLoading: false,
    // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
    onClick: fn(),
  },
  argTypes: {
    variant: {
      options: ["default", "secondary", "outline"],
      control: { type: "select" },
    },
    size: {
      options: ["default", "sm", "lg"],
      control: { type: "select" },
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: "default",
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
  },
};

export const Outline: Story = {
  args: {
    variant: "outline",
  },
};

export const Large: Story = {
  args: {
    size: "lg",
  },
};

export const Small: Story = {
  args: {
    size: "sm",
  },
};

export const Loading: Story = {
  args: {
    isLoading: true,
  },
};

export const IsNotif: Story = {
  name: "Notification",
  args: {
    isNotif: true,
  },
};

export const WithIcon: Story = {
  args: {
    icon: <LayoutDashboard className="size-5" />,
    children: "Dashboard",
  },
};
