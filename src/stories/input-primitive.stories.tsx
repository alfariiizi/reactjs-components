import { Input } from "@/components/ui/input-primitive";
import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { useState } from "react";

const meta = {
  title: "Input Primitive",
  component: Input,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    className: "border border-primary",
    // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
    onClick: fn(),
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const InputText: Story = {
  render: (args) => {
    const [value, setValue] = useState<string | undefined>();
    return (
      <div className="grid grid-cols-2 gap-x-10 gap-y-6">
        <p>Value:</p>
        <p>{value}</p>
        <p>Type:</p>
        <p>{typeof value}</p>
        <p>Component:</p>
        <Input
          {...args}
          type="text"
          value={value}
          onValueChange={(value) => {
            setValue(value);
          }}
        />
      </div>
    );
  },
};

export const InputNumber: Story = {
  render: (args) => {
    const [value, setValue] = useState<number | undefined>();
    return (
      <div className="grid grid-cols-2 gap-x-10 gap-y-6">
        <p>Value:</p>
        <p>{value}</p>
        <p>Type:</p>
        <p>{typeof value}</p>
        <p>Component:</p>
        <Input
          {...args}
          type="number"
          value={value}
          onValueChange={(value) => {
            setValue(value);
          }}
        />
      </div>
    );
  },
};

export const InputTel: Story = {
  render: (args) => {
    const [value, setValue] = useState<string | undefined>();
    return (
      <div className="grid grid-cols-2 gap-x-10 gap-y-6">
        <p>Value:</p>
        <p>{value}</p>
        <p>Type:</p>
        <p>{typeof value}</p>
        <p>Component:</p>
        <Input
          {...args}
          type="tel"
          value={value}
          onValueChange={(value) => {
            setValue(value);
          }}
        />
      </div>
    );
  },
};

export const InputDate: Story = {
  render: (args) => {
    const [value, setValue] = useState<string | undefined>();
    return (
      <div className="grid grid-cols-2 gap-x-10 gap-y-6">
        <p>Value:</p>
        <p>{value}</p>
        <p>Type:</p>
        <p>{typeof value}</p>
        <p>Component:</p>
        <Input
          {...args}
          type="date"
          value={value}
          onValueChange={(value) => {
            setValue(value);
          }}
        />
      </div>
    );
  },
};

export const InputFile: Story = {
  render: (args) => {
    const [value, setValue] = useState<File | undefined>();
    return (
      <div className="grid grid-cols-2 gap-x-10 gap-y-6">
        <p>Value:</p>
        <p>{value?.name}</p>
        <p>Type:</p>
        <p>{typeof value}</p>
        <p>Component:</p>
        <Input
          {...args}
          type="file"
          multiple={false}
          value={value}
          onValueChange={(value) => {
            setValue(value);
          }}
        />
      </div>
    );
  },
};

export const InputFileMultiple: Story = {
  render: (args) => {
    const [value, setValue] = useState<FileList | undefined>();
    return (
      <div className="grid grid-cols-2 gap-x-10 gap-y-6">
        <p>Value:</p>
        <p>{value?.length}</p>
        <p>Type:</p>
        <p>{typeof value}</p>
        <p>Component:</p>
        <Input
          {...args}
          type="file"
          multiple
          value={value}
          onValueChange={(value) => {
            setValue(value);
          }}
        />
      </div>
    );
  },
};

export const InputColor: Story = {
  render: (args) => {
    const [value, setValue] = useState<string | undefined>();
    return (
      <div className="grid grid-cols-2 gap-x-10 gap-y-6">
        <p>Value:</p>
        <p>{value}</p>
        <p>Type:</p>
        <p>{typeof value}</p>
        <p>Component:</p>
        <Input
          {...args}
          type="color"
          value={value}
          onValueChange={(value) => {
            setValue(value);
          }}
        />
      </div>
    );
  },
};

export const InputEmail: Story = {
  render: (args) => {
    const [value, setValue] = useState<string | undefined>();
    return (
      <div className="grid grid-cols-2 gap-x-10 gap-y-6">
        <p>Value:</p>
        <p>{value}</p>
        <p>Type:</p>
        <p>{typeof value}</p>
        <p>Component:</p>
        <Input
          {...args}
          type="email"
          value={value}
          onValueChange={(value) => {
            setValue(value);
          }}
        />
      </div>
    );
  },
};

export const InputMonth: Story = {
  render: (args) => {
    const [value, setValue] = useState<string | undefined>();
    return (
      <div className="grid grid-cols-2 gap-x-10 gap-y-6">
        <p>Value:</p>
        <p>{value}</p>
        <p>Type:</p>
        <p>{typeof value}</p>
        <p>Component:</p>
        <Input
          {...args}
          type="month"
          value={value}
          onValueChange={(value) => {
            setValue(value);
          }}
        />
      </div>
    );
  },
};

export const InputWeek: Story = {
  render: (args) => {
    const [value, setValue] = useState<string | undefined>();
    return (
      <div className="grid grid-cols-2 gap-x-10 gap-y-6">
        <p>Value:</p>
        <p>{value}</p>
        <p>Type:</p>
        <p>{typeof value}</p>
        <p>Component:</p>
        <Input
          {...args}
          type="week"
          value={value}
          onValueChange={(value) => {
            setValue(value);
          }}
        />
      </div>
    );
  },
};

export const InputTime: Story = {
  render: (args) => {
    const [value, setValue] = useState<string | undefined>();
    return (
      <div className="grid grid-cols-2 gap-x-10 gap-y-6">
        <p>Value:</p>
        <p>{value}</p>
        <p>Type:</p>
        <p>{typeof value}</p>
        <p>Component:</p>
        <Input
          {...args}
          type="time"
          value={value}
          onValueChange={(value) => {
            setValue(value);
          }}
        />
      </div>
    );
  },
};

export const InputDateTimeLocal: Story = {
  render: (args) => {
    const [value, setValue] = useState<string | undefined>();
    return (
      <div className="grid grid-cols-2 gap-x-10 gap-y-6">
        <p>Value:</p>
        <p>{value}</p>
        <p>Type:</p>
        <p>{typeof value}</p>
        <p>Component:</p>
        <Input
          {...args}
          type="datetime-local"
          value={value}
          onValueChange={(value) => {
            setValue(value);
          }}
        />
      </div>
    );
  },
};

export const InputPassword: Story = {
  render: (args) => {
    const [value, setValue] = useState<string | undefined>();
    return (
      <div className="grid grid-cols-2 gap-x-10 gap-y-6">
        <p>Value:</p>
        <p>••••••••</p>
        <p>Type:</p>
        <p>{typeof value}</p>
        <p>Component:</p>
        <Input
          {...args}
          type="password"
          value={value}
          onValueChange={(value) => {
            setValue(value);
          }}
        />
      </div>
    );
  },
};

export const FormExample: Story = {
  render: (args) => {
    const [name, setName] = useState<string | undefined>();
    const [email, setEmail] = useState<string | undefined>();
    const [address, setAddress] = useState<string | undefined>();
    const [password, setPassword] = useState<string | undefined>();
    return (
      <form
        onSubmit={(event) => {
          event.preventDefault();
          console.log({ name, email, address, password });
        }}
      >
        <div className="grid grid-cols-4 gap-x-10 gap-y-6">
          <p>Name: </p>
          <Input
            {...args}
            type="text"
            value={name}
            onValueChange={(value) => {
              setName(value);
            }}
          />
          <p>
            Value: "<span>{name}</span>"
          </p>
          <p>Type: {typeof name}</p>
          <p>Email:</p>
          <Input
            {...args}
            type="email"
            value={email}
            onValueChange={(value) => {
              setEmail(value);
            }}
          />
          <p>
            Value: "<span>{email}</span>"
          </p>
          <p>Type: {typeof email}</p>
          <p>Address:</p>
          <Input
            {...args}
            type="text"
            value={address}
            onValueChange={(value) => {
              setAddress(value);
            }}
          />
          <p>
            Value: "<span>{address}</span>"
          </p>
          <p>Type: {typeof address}</p>
          <p>Password:</p>
          <Input
            {...args}
            type="password"
            value={password}
            onValueChange={(value) => {
              setPassword(value);
            }}
          />
          <p>
            Value: "<span>{password}</span>"
          </p>
          <p>Type: {typeof password}</p>
        </div>
        <button type="submit" className="">
          Submit
        </button>
      </form>
    );
  },
};
