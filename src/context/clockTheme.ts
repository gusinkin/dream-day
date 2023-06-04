import { createTheme } from '@mui/material';
import { renderTimeViewClock } from '@mui/x-date-pickers';

export const theme = createTheme({
  components: {
    MuiDesktopTimePicker: {
      defaultProps: {
        viewRenderers: {
          hours: renderTimeViewClock,
          minutes: renderTimeViewClock,
          seconds: renderTimeViewClock,
        },
      },
    },
    MuiDesktopDateTimePicker: {
      defaultProps: {
        viewRenderers: {
          hours: renderTimeViewClock,
          minutes: renderTimeViewClock,
          seconds: renderTimeViewClock,
        },
      },
    },
  },
});
