import UiIcon from '.';

import { uiIconNamesArray } from '../../../types/icon-names';

const UiIconStory = {
  title: 'Atoms/Icons/UI Icons',
  component: UiIcon,
};

const Template = () => {
  return (
    <ul
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        gap: '1rem',
        color: '#2d3131',
        margin: '0',
        padding: '0',
      }}>
      {uiIconNamesArray.map((iconName, key) => (
        <UiIcon key={key} size={32} name={iconName} />
      ))}
    </ul>
  );
};

const Example = (args) => {
  return <UiIcon {...args} />;
};

export const All = Template.bind({});

export const UIIcon = Example.bind({});

UIIcon.args = {
  name: 'ChevronRight',
  size: 32,
  color: '#2d3131',
};

UIIcon.argTypes = {
  size: {
    control: {
      type: 'select',
      options: [16, 20, 24, 32],
    },
  },
};

export default UiIconStory;
