import { NavMenuItem } from '../NavMenuItem/NavMenuItem';
import { NavMenuList } from '../NavMenuList/NavMenuList';

interface Props {
  showLabel: boolean;
}

export const NavMenu = ({ showLabel }: Props) => {
  return (
    <NavMenuList>
      <NavMenuItem type="new" showLabel={showLabel} />
      <NavMenuItem type="home" showLabel={showLabel} />
      <NavMenuItem type="favorite" showLabel={showLabel} />
      <NavMenuItem type="archive" showLabel={showLabel} />
    </NavMenuList>
  );
};
