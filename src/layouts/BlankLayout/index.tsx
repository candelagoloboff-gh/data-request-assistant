import { type ReactNode } from 'react';

type BlankLayoutProps = {
  children: ReactNode;
};

export const BlankLayout = ({ children }: BlankLayoutProps) => {
  return <>{children}</>;
};
