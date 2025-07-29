import { TooltipContainer } from '../../modal/TooltipContainer/TooltipContainer';
import { NavMenuItem } from '../NavMenuItem/NavMenuItem';
import { tabs } from '../NavMenuItem/NavMenuItem.constant';
import { NavMenuList } from '../NavMenuList/NavMenuList';

interface Props {
  showLabel: boolean;
}

export const NavMenu = ({ showLabel }: Props) => {
  return (
    <NavMenuList>
      <TooltipContainer text={tabs.new.label} showTooltip={!showLabel}>
        <NavMenuItem type="new" showLabel={showLabel} />
      </TooltipContainer>
      <TooltipContainer text={tabs.home.label} showTooltip={!showLabel}>
        <NavMenuItem type="home" showLabel={showLabel} />
      </TooltipContainer>
      <TooltipContainer text={tabs.favorite.label} showTooltip={!showLabel}>
        <NavMenuItem type="favorite" showLabel={showLabel} />
      </TooltipContainer>
      <TooltipContainer text={tabs.archive.label} showTooltip={!showLabel}>
        <NavMenuItem type="archive" showLabel={showLabel} />
      </TooltipContainer>
    </NavMenuList>
  );
};
