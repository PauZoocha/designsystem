import { Meta, StoryObj } from "@storybook/react";
import { Tabs } from "../../components/Tabs";
import TabsArgs from "../../components/Tabs/Tabs.args";

const TabsMeta: Meta<typeof Tabs> = {
  title: "Components/User Interface/Tabs",
  component: Tabs,
};

export default TabsMeta;

export const TabsWithIcon: StoryObj<typeof Tabs> = {
  args: TabsArgs.withIcon,
  name: "With Icon",
};

export const MultipleTabs: StoryObj<typeof Tabs> = {
  args: TabsArgs.fiveItems,
  name: "Five Items",
};
