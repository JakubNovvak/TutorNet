import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

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

export default function TutorTabsInfo() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
    event;
  };

  return (
    <Box sx={{ width: '100%', maxWidth:"32rem",  marginTop: "0.5rem" }}>
      <Box sx={{ borderBottom: 3, borderColor: '#edeff2' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" variant='fullWidth'>
          <Tab label="Info" {...a11yProps(0)} />
          <Tab label="Pricing" {...a11yProps(1)} />
          <Tab label="Contact" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <Typography sx={{textAlign: "left"}}>
            Hi! I'm a former school teacher and I found my passion in being a "mobile teacher".
          </Typography>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <Typography variant='h6' sx={{textAlign: "left"}}>          
          Lesson at Home - 70zł
        </Typography>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <Typography variant='h6' sx={{textAlign: "left"}}>
          E-mail Address - johnsmith@test.com
        </Typography>
      </CustomTabPanel>
    </Box>
  );
}