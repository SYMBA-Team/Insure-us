import { useState } from 'react';
import { Container, Card, Tab, Tabs, Avatar, Typography } from '@mui/material';

import style from './style.module.scss';
import Profile from '../../sections/@dashboard/client/Profile';
import Insurance from '../../sections/@dashboard/client/Insurance';
import Risk from '../../sections/@dashboard/client/Risk';
import Health from '../../sections/@dashboard/client/Health';

import img from '../../images/xteam1.jpg';

const client = {
  firstname: 'Tony',
  lastname: 'Stark',
  gender: 'Male',
  sex: 'M',
  date_of_birth: '1970-05-29',
  bio: 'Iron Man',
  email: 'owner@starkenterprises.com',
  city: 'Malibu',
  state: 'California',
  country: 'United States',
};

function TabsProps(index) {
  return {
    id: `tab-${index}`,
    color: 'default',
    'aria-controls': `tabpanel-${index}`,
  };
}
function TabPanel({ children, value, index, ...other }) {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && children}
    </div>
  );
}
const tabs = [
  {
    title: 'Profile',
    Component: Profile,
  },
  {
    title: 'Health details',
    Component: Health,
  },
  {
    title: 'Risk amassment',
    Component: Risk,
  },
  {
    title: 'Insurance calculation ',
    Component: Insurance,
  },
];
export default function Client() {
  const [value, setValue] = useState(0);
  const handleChange = (_event, newValue) => setValue(newValue);
  return (
    <Container className={style.Client}>
      <Card className={style.Card}>
        <div className={style.Profile}>
          <Avatar src={img} sx={{ width: '160px', height: '160px' }} />
          <div className={style.text}>
            <Typography variant="h3" color="white">{`${client.firstname} ${client.lastname}`}</Typography>
            <Typography variant="h5" color="white">
              {client.country}
            </Typography>
          </div>
        </div>
        <div className={style.Tabs}>
          <Tabs value={value} onChange={handleChange}>
            {tabs.map((tab, i) => (
              <Tab key={tab.title} label={tab.title} {...TabsProps(i)} />
            ))}
          </Tabs>
        </div>
      </Card>
      {tabs.map((tab, i) => (
        <TabPanel key={tab.title} className={style.Tab} index={i} value={value}>
          <tab.Component />
        </TabPanel>
      ))}
    </Container>
  );
}
