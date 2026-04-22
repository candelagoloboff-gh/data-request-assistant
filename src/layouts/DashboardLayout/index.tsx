import { type ReactNode, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { IconHome } from '@material-hu/icons/tabler';
import Stack from '@material-hu/mui/Stack';

import HomeHeader from '@material-hu/components/design-system/Header/Home';
import Sidebar from '@material-hu/components/design-system/Sidebar';
import {
  SIDEBAR_COLLAPSED_WIDTH,
  SIDEBAR_WIDTH,
} from '@material-hu/components/design-system/Sidebar/constants';
import { type NavSectionProps } from '@material-hu/components/design-system/Sidebar/types';

import humandLogo from '../../assets/humand.svg';

const SECTIONS: NavSectionProps[] = [
  {
    key: 'main',
    title: 'Main',
    items: [
      { key: 'home', title: 'Home', path: '/', icon: <IconHome /> },
    ],
  },
];

type DashboardLayoutProps = {
  children: ReactNode;
};

export const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const { pathname } = useLocation();

  const sidebarWidth = isCollapsed ? SIDEBAR_COLLAPSED_WIDTH : SIDEBAR_WIDTH;

  return (
    <Stack sx={{ minHeight: '100vh' }}>
      <HomeHeader
        onOpenMenu={() => setIsCollapsed(prev => !prev)}
        logoSrc={humandLogo}
        logoAlt="Humand"
        hideNotificationsButton
        hideSupportButton
        isAdmin={false}
        avatarProps={{ text: 'U' }}
        avatarPopoverContent={null}
        onOpenLanguageMenu={() => {}}
        supportButtonProps={{ href: '#' }}
        sx={{
          position: 'sticky',
        }}
      />
      <Stack sx={{ flexDirection: 'row' }}>
        <Sidebar
          isCollapsed={isCollapsed}
          pathname={pathname}
          sections={SECTIONS}
          openMenu={() => setIsCollapsed(false)}
          sx={{
            position: 'sticky',
            top: '70px',
            bottom: 0,
            left: 0,
            height: 'calc(100vh - 70px)',
          }}
        />
        <Stack
          component="main"
          sx={{
            flex: 1,
            pt: 5,
            pb: 5,
            px: 12,
            maxWidth: `calc(100% - ${sidebarWidth}px)`,
            bgcolor: 'new.background.layout.default',
            minHeight: 'calc(100vh - 70px)',
          }}
        >
          {children}
        </Stack>
      </Stack>
    </Stack>
  );
};
