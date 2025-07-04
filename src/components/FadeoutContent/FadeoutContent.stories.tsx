import type { Meta, StoryObj } from '@storybook/nextjs';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa6';
import { FadeoutContent } from './FadeoutContent';

const iconMap = {
  none: null,
  left: <FaArrowLeft />,
  right: <FaArrowRight />,
};

const meta = {
  title: 'Example/FadeoutContent',
  component: FadeoutContent,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: 'text',
    },
  },
} satisfies Meta<typeof FadeoutContent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children:
      '시를 좋아하고, 사랑하고, 읽고, 쓰고, 책으로 만드는 사람들은 마음속에 어떤 단어를 품고 있을까요? 아침달에서 책을 만들고 있는 사람들, 아침달에서 시집을 출간한 시인들, 아침달을 좋아하는 독자들과 함께 써 내려간 『여름어 사전』을 출간합니다. 총 157개의 단어로 구성된 이 책은, 여름이면 떠오르는 단어를 골라 기존의 뜻을 넘어 자기만의 이야기로 의미를 만들어가는 책이기도 합니다. 우리 피부 안에 흐르는, 눈동자에 머물러 있던 여름 풍경을 불러 모아 새로운 여름을 정의 내립니다. 여름에 나타났다가 불현듯 사라진 줄 알았던 장면들이 단어로 하여금 상영되는 동안, 우리는 보다 여름을 더 풍성하고 깊게 감각해볼 수 있습니다. 우리는 앞으로 몇 번의 여름을 더 만나게 될까요? 이미 지나온 여름에게 다가올 여름을 만나게 해주는 일로, 157개의 단어에 맺힌 이야기를 소개합니다. 여름의 한가운데에 놓여 있는 단어들부터, 여름이면 신기루처럼 사라지던 단어들까지. 여름을 다양한 경로로 만날 수 있는 단어들을 통해, 지난여름보다 아름답고, 다가올 여름보다 애틋해질 풍경을 만나보시길 바랍니다.',
    height: 108,
  },
};
