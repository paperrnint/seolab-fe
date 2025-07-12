import { NavItem } from '../NavItem/NavItem';

import { Tab, tabs } from './NavMenuItem.constant';

interface Props {
  type: Tab;
  showLabel?: boolean;
  isAccent?: boolean;
}

export const NavMenuItem = ({ type, showLabel = false, isAccent = false }: Props) => {
  const { icon, label, href } = tabs[type];

  if (showLabel) {
    return (
      <NavItem href={href} icon={icon} isAccent={isAccent}>
        {label}
      </NavItem>
    );
  }

  return <NavItem href={href} icon={icon} isAccent={isAccent} />;
};
