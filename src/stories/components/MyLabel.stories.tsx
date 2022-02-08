import { MyLabel } from "../../components/MyLabel";
import { ComponentMeta, ComponentStory } from '@storybook/react';


export default {
  title: 'UI/MyLabel',
  component: MyLabel,
  argTypes: {
    // size: { control: 'select', options: ['normal', 'h1']}
    size: { control: 'select'},
    color: { control: 'select'},
    fontColor: { control: 'color' },
  },
} as ComponentMeta<typeof MyLabel>



const Template: ComponentStory<typeof MyLabel> = ( args ) => <MyLabel { ...args } />


export const Basic = Template.bind({});
Basic.args = {
  label: 'My label',
  size: "h2",
  allCaps: false // true: capitalizar toda la palabra
}


export const AllCaps = Template.bind({});
AllCaps.args = {
  size: "h2",
  allCaps: true
}

export const Secondary = Template.bind({});
Secondary.args = {
  size: "h2",
  color: 'secondary'
}

export const Tertiary = Template.bind({});
Tertiary.args = {
  size: "h2",
  color: 'tertiary'
}
