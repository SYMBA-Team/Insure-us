import { Card, Container, Grid } from '@mui/material';
import React from 'react';
import ApexCharts from 'apexcharts';
import hart from "react-apexcharts";
import style from "./style.module.scss";
import AppWebsiteVisitsSimple from '../../../sections/@dashboard/app/AppWebsiteVisitsSimple';



export default function Fitness() {

  return <Container  className={style.Fitness}>
<Grid container spacing>

    {/* This is the first title : "today" */}
    <div className={style.Header}>
    <h5>Today</h5>
    </div>
    
    {/* These are the dates */}

    <div className={style.Dates}>
    <Grid item xs={2} className={style.Date}>
      <Card className={style.Card}>
        <p className={style.Day}>Mon</p>

        <p className={style.TheDate}>12</p>
      </Card>
     </Grid>


     <Grid item xs={2} className={style.Date}>
      <Card className={style.Card}>
        <p className={style.Day}>Tue</p>
        <p className={style.TheDate}>13</p>

      </Card>
     </Grid>


     <Grid item xs={2} className={style.Date}>
      <Card className={style.Card}>
        <p className={style.Day}>Wed</p>

        <p className={style.TheDate}>14</p>
      </Card>
     </Grid>


     <Grid item xs={2} className={style.Date}>
      <Card className={style.Card}>
        <p className={style.Day}>Thu</p>

        <p className={style.TheDate}>15</p>
      </Card>
     </Grid>


     <Grid item xs={2} className={style.Date}>
      <Card className={style.Card}>
        <p className={style.Day}>Fri</p>

        <p className={style.TheDate}>16</p>
      </Card>
     </Grid>


     <Grid item xs={2} className={style.Date}>
      <Card className={style.Card}>
        <p className={style.Day}> {'>>>'} </p>
      </Card>
     </Grid>
    </div>
    
      
    <Grid item xs={6} className={style.ShowHabits}>
        <p className={style.ShowHabits}>Show all habits</p>
    </Grid>


    <Grid item xs={6} className={style.cardGauche}>
      <Card className={style.Card}>
          <h6 className={style.CardTitle}>Running</h6>
          <h5 className={style.pourcentage}>75%</h5>
          <AppWebsiteVisitsSimple
      className={style.radial}
      chartLabels={[
        
      ]}
           chartData={[
                
            {
                  
              type: 'radialBar',
              fill: 'solid',
              data: [70],
            }
            
            ]}
             
              height={350}
              type={'radialBar'}
              
            />
      </Card>

    </Grid>


    <Grid item xs={6} className={style.cardGauche}>
      <Card className={style.Card}>
          <h6 className={style.CardTitle}>Water</h6>
          <h5 className={style.pourcentage}>40%</h5>
      </Card>

    </Grid>

    

    <Grid item xs={6} className={style.cardDroite}>
      <Card className={style.Card}>
          <h6 className={style.CardTitle}>Cycling</h6>
          <h5 className={style.pourcentage}>40%</h5>
      </Card>

    </Grid>


    {/* These are the components that displays the fitness stats */}
  
    <Grid item xs={6} className={style.cardDroite}>
      <Card className={style.Card}>
          <h6 className={style.CardTitle}>Walking</h6>
          <h5 className={style.pourcentage}>30%</h5>
      </Card>

    </Grid>
  </Grid>
  </Container>
}
