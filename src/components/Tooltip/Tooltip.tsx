import * as ReactTooltip from '@radix-ui/react-tooltip';
import styled from 'styled-components';

type Props = {
  children: React.ReactNode;
  trigger: React.ReactNode;
};

const Content = styled(ReactTooltip.Content)`
  border-radius: var(--radius-4xs);
  padding: 0.625rem 0.9375rem;
  font-size: var(--font-size-4xs);
  line-height: 1;
  background-color: white;
  box-shadow: hsl(206 22% 7% / 35%) 0px 10px 38px -10px,
    hsl(206 22% 7% / 20%) 0px 10px 20px -15px;
  animation-duration: 400ms;
  animation-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
  will-change: transform, opacity;
  z-index: 10;
`;

const Arrow = styled(ReactTooltip.Arrow)`
  fill: white;
`;

export const Tooltip = ({ children, trigger }: Props) => (
  <ReactTooltip.Provider>
    <ReactTooltip.Root>
      <ReactTooltip.Trigger asChild>
        {trigger}
      </ReactTooltip.Trigger>
      <ReactTooltip.Portal>
        <Content sideOffset={5}>
          {children}
          <Arrow />
        </Content>
      </ReactTooltip.Portal>
    </ReactTooltip.Root>
  </ReactTooltip.Provider>
);
