import { TooltipContainer } from '@/components/modal/TooltipContainer/TooltipContainer';

import { NavItem } from '../NavItem/NavItem';

import { Tab, tabs } from './NavMenuItem.constant';

interface Props {
  type: Tab;
  showLabel?: boolean;
  isAccent?: boolean;
}

export const NavMenuItem = ({ type, showLabel = false, isAccent = false }: Props) => {
  const { icon, label, href } = tabs[type];

  return (
    <li>
      <TooltipContainer text={label} showTooltip={!showLabel}>
        <NavItem href={href} icon={icon} isAccent={isAccent} aria-label={`${label} 페이지로 이동`}>
          {showLabel ? label : null}
        </NavItem>
      </TooltipContainer>
    </li>
  );
};
