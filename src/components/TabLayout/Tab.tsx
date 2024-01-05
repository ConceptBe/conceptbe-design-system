import { ReactNode } from 'react';

export interface Props {
  label: string;
  children: ReactNode;
}

const Tab = ({ label, children }: Props) => {
  return <div id={label}>{children}</div>;
};

export default Tab;
