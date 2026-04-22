import Stack from '@material-hu/mui/Stack';

import Title from '@material-hu/components/design-system/Title';

import { DashboardLayout } from '../../layouts/DashboardLayout';

export const HomePage = () => {
  return (
    <DashboardLayout>
      <Stack sx={{ gap: 3 }}>
        <Title
          title="Welcome"
          description="Your Humand app is ready. Start building."
          variant="XL"
        />
      </Stack>
    </DashboardLayout>
  );
};
