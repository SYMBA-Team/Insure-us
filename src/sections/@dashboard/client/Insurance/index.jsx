import { Card, Grid, Typography } from '@mui/material';
import style from './style.module.scss';

export default function Insurance() {
  return (
    <Card className={style.Card}>
      <Typography variant="h3">Calculating the Insurance fees</Typography>
      <Grid container>
        <Grid item xs={8}>
          <Typography variant="h4">Basic Fees</Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography variant="h5">4000 DA</Typography>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={4}>
          <Typography variant="h4">Risk assessment</Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography variant="h5">20%</Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography variant="h5">-600 DA</Typography>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={8}>
          <Typography variant="h4">Total</Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography variant="h5">3400 DA</Typography>
        </Grid>
      </Grid>
    </Card>
  );
}
