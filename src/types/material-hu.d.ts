import type {} from 'material-hu/lib/theme/material-hu';

declare module '@material-hu/mui/Typography' {
  interface TypographyPropsVariantOverrides {
    globalXXS: true;
    globalXS: true;
    globalS: true;
    globalM: true;
    globalL: true;
  }
}
