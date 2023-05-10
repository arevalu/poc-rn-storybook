import React, { FunctionComponent, PropsWithChildren } from 'react';
import { ThemeProvider as Provider } from '@emotion/react';
import { Colors } from './colors';
import { Fonts } from './fonts';
import { Spacers } from './spacers';

export const ThemeProvider: FunctionComponent<PropsWithChildren> = ({
  children
}) => (
  <Provider
    theme={{
      Colors,
      Spacers,
      Fonts,
    }}>
    {children}
  </Provider>
);
