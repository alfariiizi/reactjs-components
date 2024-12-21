import Button from "@/components/ui/button";
import { Dialog } from "@/components/ui/dialog";
import type { Meta, StoryObj } from "@storybook/react";
import { LayoutDashboard } from "lucide-react";
import { useState } from "react";

const meta = {
  title: "Dialog",
  component: Dialog,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {},
  argTypes: {},
} satisfies Meta<typeof Dialog>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    trigger: <Button icon={<LayoutDashboard />}>Dashboard</Button>,
    title: "List Dashboard",
    titleIcon: <LayoutDashboard />,
    children: (
      <div>
        <p>Here is the list of all dashboards.</p>
        <p>
          Click on the dashboard to view its details and manage its settings.
        </p>
      </div>
    ),
  },
};

export const Description: Story = {
  args: {
    trigger: <Button icon={<LayoutDashboard />}>Dashboard</Button>,
    title: "List Dashboard",
    titleIcon: <LayoutDashboard />,
    description: "Here is the list of all dashboards.",
    children: (
      <div>
        <p>Here is the list of all dashboards.</p>
        <p>
          Click on the dashboard to view its details and manage its settings.
        </p>
      </div>
    ),
  },
};

export const CustomHeaderStyle: Story = {
  args: {
    trigger: <Button icon={<LayoutDashboard />}>Dashboard</Button>,
    headerClassName: "bg-primary text-white",
    closeClassName: "text-white",
    title: "List Dashboard",
    titleIcon: <LayoutDashboard />,
    children: (
      <div>
        <p>Here is the list of all dashboards.</p>
        <p>
          Click on the dashboard to view its details and manage its settings.
        </p>
      </div>
    ),
  },
};

export const ControlledCloseContent: Story = {
  args: {
    trigger: <Button icon={<LayoutDashboard />}>Dashboard</Button>,
    headerClassName: "bg-primary text-white",
    closeClassName: "text-white",
    title: "List Dashboard",
    titleIcon: <LayoutDashboard />,
    children: (props) => {
      return (
        <div>
          <p>Here is the list of all dashboards.</p>
          <p>
            Click on the dashboard to view its details and manage its settings.
          </p>
          <Button
            onClick={() => {
              props.onOpenChange(false);
            }}
          >
            Close
          </Button>
        </div>
      );
    },
  },
};

export const BlurOverlay: Story = {
  args: {
    isOverlayBlur: true,
    trigger: <Button icon={<LayoutDashboard />}>Dashboard</Button>,
    headerClassName: "bg-primary text-white",
    closeClassName: "text-white",
    title: "List Dashboard",
    titleIcon: <LayoutDashboard />,
    children: (
      <div>
        <p>Here is the list of all dashboards.</p>
        <p>
          Click on the dashboard to view its details and manage its settings.
        </p>
      </div>
    ),
  },
  render(args) {
    return (
      <div className="flex flex-col">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <Dialog {...args} />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
    );
  },
};

export const ControlledCloseTrigger: Story = {
  args: {
    trigger: (props) => {
      return (
        <Button
          icon={<LayoutDashboard />}
          onClick={() => {
            props.onOpenChange(true);
          }}
        >
          Dashboard
        </Button>
      );
    },
    headerClassName: "bg-primary text-white",
    closeClassName: "text-white",
    title: "List Dashboard",
    titleIcon: <LayoutDashboard />,
    children: (props) => {
      return (
        <div>
          <p>Here is the list of all dashboards.</p>
          <p>
            Click on the dashboard to view its details and manage its settings.
          </p>
          <Button
            onClick={() => {
              props.onOpenChange(false);
            }}
          >
            Close
          </Button>
        </div>
      );
    },
  },
};

export const OverflowContent: Story = {
  args: {
    overflow: "content",
    trigger: <Button icon={<LayoutDashboard />}>Dashboard</Button>,
    headerClassName: "bg-primary text-white",
    closeClassName: "text-white",
    title: "List Dashboard",
    titleIcon: <LayoutDashboard />,
    children: (
      <div>
        <p>Here is the list of all dashboards.</p>
        <p>
          Click on the dashboard to view its details and manage its settings.
        </p>
        <p>
          Click on the dashboard to view its details and manage its settings.
        </p>
        <p>
          Click on the dashboard to view its details and manage its settings.
        </p>
        <p>
          Click on the dashboard to view its details and manage its settings.
        </p>
        <p>
          Click on the dashboard to view its details and manage its settings.
        </p>
        <p>
          Click on the dashboard to view its details and manage its settings.
        </p>
        <p>
          Click on the dashboard to view its details and manage its settings.
        </p>
        <p>
          Click on the dashboard to view its details and manage its settings.
        </p>
        <p>
          Click on the dashboard to view its details and manage its settings.
        </p>
        <p>
          Click on the dashboard to view its details and manage its settings.
        </p>
        <p>
          Click on the dashboard to view its details and manage its settings.
        </p>
        <p>
          Click on the dashboard to view its details and manage its settings.
        </p>
        <p>
          Click on the dashboard to view its details and manage its settings.
        </p>
        <p>
          Click on the dashboard to view its details and manage its settings.
        </p>
        <p>
          Click on the dashboard to view its details and manage its settings.
        </p>
        <p>
          Click on the dashboard to view its details and manage its settings.
        </p>
        <p>
          Click on the dashboard to view its details and manage its settings.
        </p>
        <p>
          Click on the dashboard to view its details and manage its settings.
        </p>
        <p>
          Click on the dashboard to view its details and manage its settings.
        </p>
        <p>
          Click on the dashboard to view its details and manage its settings.
        </p>
        <p>
          Click on the dashboard to view its details and manage its settings.
        </p>
        <p>
          Click on the dashboard to view its details and manage its settings.
        </p>
        <p>
          Click on the dashboard to view its details and manage its settings.
        </p>
        <p>
          Click on the dashboard to view its details and manage its settings.
        </p>
        <p>
          Click on the dashboard to view its details and manage its settings.
        </p>
        <p>
          Click on the dashboard to view its details and manage its settings.
        </p>
        <p>
          Click on the dashboard to view its details and manage its settings.
        </p>
      </div>
    ),
  },
};

export const OverflowChildren: Story = {
  args: {
    overflow: "children",
    trigger: <Button icon={<LayoutDashboard />}>Dashboard</Button>,
    headerClassName: "bg-primary text-white",
    closeClassName: "text-white",
    title: "List Dashboard",
    titleIcon: <LayoutDashboard />,
    children: (
      <div>
        <p>Here is the list of all dashboards.</p>
        <p>
          Click on the dashboard to view its details and manage its settings.
        </p>
        <p>
          Click on the dashboard to view its details and manage its settings.
        </p>
        <p>
          Click on the dashboard to view its details and manage its settings.
        </p>
        <p>
          Click on the dashboard to view its details and manage its settings.
        </p>
        <p>
          Click on the dashboard to view its details and manage its settings.
        </p>
        <p>
          Click on the dashboard to view its details and manage its settings.
        </p>
        <p>
          Click on the dashboard to view its details and manage its settings.
        </p>
        <p>
          Click on the dashboard to view its details and manage its settings.
        </p>
        <p>
          Click on the dashboard to view its details and manage its settings.
        </p>
        <p>
          Click on the dashboard to view its details and manage its settings.
        </p>
        <p>
          Click on the dashboard to view its details and manage its settings.
        </p>
        <p>
          Click on the dashboard to view its details and manage its settings.
        </p>
        <p>
          Click on the dashboard to view its details and manage its settings.
        </p>
        <p>
          Click on the dashboard to view its details and manage its settings.
        </p>
        <p>
          Click on the dashboard to view its details and manage its settings.
        </p>
        <p>
          Click on the dashboard to view its details and manage its settings.
        </p>
        <p>
          Click on the dashboard to view its details and manage its settings.
        </p>
        <p>
          Click on the dashboard to view its details and manage its settings.
        </p>
        <p>
          Click on the dashboard to view its details and manage its settings.
        </p>
        <p>
          Click on the dashboard to view its details and manage its settings.
        </p>
        <p>
          Click on the dashboard to view its details and manage its settings.
        </p>
        <p>
          Click on the dashboard to view its details and manage its settings.
        </p>
        <p>
          Click on the dashboard to view its details and manage its settings.
        </p>
        <p>
          Click on the dashboard to view its details and manage its settings.
        </p>
        <p>
          Click on the dashboard to view its details and manage its settings.
        </p>
        <p>
          Click on the dashboard to view its details and manage its settings.
        </p>
        <p>
          Click on the dashboard to view its details and manage its settings.
        </p>
      </div>
    ),
  },
};

export const OverflowOverlay: Story = {
  args: {
    overflow: "overlay",
    trigger: <Button icon={<LayoutDashboard />}>Dashboard</Button>,
    headerClassName: "bg-primary text-white",
    closeClassName: "text-white",
    title: "List Dashboard",
    titleIcon: <LayoutDashboard />,
    children: (
      <div>
        <p>Here is the list of all dashboards.</p>
        <p>
          Click on the dashboard to view its details and manage its settings.
        </p>
        <p>
          Click on the dashboard to view its details and manage its settings.
        </p>
        <p>
          Click on the dashboard to view its details and manage its settings.
        </p>
        <p>
          Click on the dashboard to view its details and manage its settings.
        </p>
        <p>
          Click on the dashboard to view its details and manage its settings.
        </p>
        <p>
          Click on the dashboard to view its details and manage its settings.
        </p>
        <p>
          Click on the dashboard to view its details and manage its settings.
        </p>
        <p>
          Click on the dashboard to view its details and manage its settings.
        </p>
        <p>
          Click on the dashboard to view its details and manage its settings.
        </p>
        <p>
          Click on the dashboard to view its details and manage its settings.
        </p>
        <p>
          Click on the dashboard to view its details and manage its settings.
        </p>
        <p>
          Click on the dashboard to view its details and manage its settings.
        </p>
        <p>
          Click on the dashboard to view its details and manage its settings.
        </p>
        <p>
          Click on the dashboard to view its details and manage its settings.
        </p>
        <p>
          Click on the dashboard to view its details and manage its settings.
        </p>
        <p>
          Click on the dashboard to view its details and manage its settings.
        </p>
        <p>
          Click on the dashboard to view its details and manage its settings.
        </p>
        <p>
          Click on the dashboard to view its details and manage its settings.
        </p>
        <p>
          Click on the dashboard to view its details and manage its settings.
        </p>
        <p>
          Click on the dashboard to view its details and manage its settings.
        </p>
        <p>
          Click on the dashboard to view its details and manage its settings.
        </p>
        <p>
          Click on the dashboard to view its details and manage its settings.
        </p>
        <p>
          Click on the dashboard to view its details and manage its settings.
        </p>
        <p>
          Click on the dashboard to view its details and manage its settings.
        </p>
        <p>
          Click on the dashboard to view its details and manage its settings.
        </p>
        <p>
          Click on the dashboard to view its details and manage its settings.
        </p>
        <p>
          Click on the dashboard to view its details and manage its settings.
        </p>
      </div>
    ),
  },
};

export const ExampleInPage: Story = {
  args: {
    trigger: <Button icon={<LayoutDashboard />}>Dashboard</Button>,
    headerClassName: "bg-primary text-white",
    closeClassName: "text-white",
    title: "List Dashboard",
    titleIcon: <LayoutDashboard />,
    children: (
      <div>
        <p>Here is the list of all dashboards.</p>
        <p>
          Click on the dashboard to view its details and manage its settings.
        </p>
      </div>
    ),
  },
  render: (args) => {
    const [open, setOpen] = useState(false);
    return (
      <div className="flex flex-col gap-5 p-8">
        Test 1
        <Dialog open={open} onOpenChange={setOpen} {...args} />
        Test 2 Test 3 Test 4
      </div>
    );
  },
};
