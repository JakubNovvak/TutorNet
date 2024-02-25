import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ReservationTime from './ReservationTime';
import { CircularProgress, Paper } from '@mui/material';
import GetArrayOfCalendarEntries from "../API/FetchData";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function LessonsTabs() {
  const [value, setValue] = React.useState(0);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [monthArray, setMonthArray] = React.useState<boolean[][]>([]);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
    event;
  };

  React.useEffect(() => {
    GetArrayOfCalendarEntries(setIsLoading, setMonthArray);
    if(monthArray !== undefined && !isLoading)
      console.log("Loading state: " + isLoading + " test[][]: ");
  }, []);

  return (
    <>
      <Paper elevation={3} sx={{minHeight: "38rem", maxHeight: "50rem", minWidth: "32rem"}}>       
        <Box sx={{ width: '100%'}}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" variant='fullWidth'>
              <Tab label="At Home" {...a11yProps(0)} />
              <Tab label="Online" {...a11yProps(1)} disabled/>
              <Tab label="At Office" {...a11yProps(2)} disabled/>
            </Tabs>
          </Box>
          <CustomTabPanel value={value} index={0}>
            {!isLoading ? <ReservationTime monthArray={monthArray} isArrayLoading={isLoading}/> : <CircularProgress size={50} sx={{marginTop:"10rem"}} />}
          </CustomTabPanel>
          <CustomTabPanel value={value} index={1}>
            {/* <ReservationTime /> */}
          </CustomTabPanel>
          <CustomTabPanel value={value} index={2}>
            {/* <ReservationTime /> */}
          </CustomTabPanel>
        </Box>
      </Paper>
    </>
  );
}