import { Input } from "@/components/ui/input";
import { InputFile } from "@/components/ui/input-file";
import { InputPassword } from "@/components/ui/input-password";
import * as InputPrimitive from "@/components/ui/input-primitive";
import { delay } from "@/lib/utils";
import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { useState } from "react";

const meta = {
  title: "Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
    onClick: fn(),
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const Variant: Story = {
  args: {
    type: "number",
    variant: "underlined",
    endAdornment: "cm",
  },
};

export const Placeholder: Story = {
  args: {
    placeholder: "Placeholder",
  },
};

export const Adornment: Story = {
  args: {
    startAdornment: "Rp.",
    endAdornment: ",00",
  },
};

export const CustomAdornment: Story = {
  args: {
    type: "number",
    startAdornment: <span>Rp.</span>,
    endAdornment: <span>,00</span>,
    startAdornmentClassName: "text-white bg-primary",
  },
};

export const TypesafeStringInput: Story = {
  render: () => {
    const [value, setValue] = useState("");
    return (
      <div className="flex flex-col gap-4">
        <p>{value}</p>
        <Input
          type="text"
          value={value}
          onValueChange={(value) => {
            setValue(value ?? "");
          }}
        />
      </div>
    );
  },
};

export const Password: Story = {
  render: () => {
    return (
      <InputPassword
        startAdornment="Password"
        startAdornmentClassName="bg-primary text-white"
      />
    );
  },
};

export const File: Story = {
  render: () => {
    return (
      <InputFile
        onFileUpload={async () => {
          await delay(10000);
        }}
        fileValidation={() => true}
      />
    );
  },
};
