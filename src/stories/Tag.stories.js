import { fn } from '@storybook/test';

import MyTag from '../components/Tag.vue';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
  title: 'Example/Tag',
  component: MyTag,
  tags: ['autodocs'],
  argTypes: {
  },
};

export const Primary = {
  parameters: {
    slots: {
      default: {
        description: 'Default slot',
        template: `<p>{{ args.default }}</p>`,
      },
    },
  },
};

Primary.args = {
  default: `Test`,
}
