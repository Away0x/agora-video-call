import { CSSProperties } from 'react';

export const IconStyle: CSSProperties = {
  width: '40px',
  height: '40px',
  cursor: 'pointer'
};

export type SwitcherProps = {
  defaultValue?: boolean;
  style?: CSSProperties;
  onChange?: (status: boolean) => void;
};
