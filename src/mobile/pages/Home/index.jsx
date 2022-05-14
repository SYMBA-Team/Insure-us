import { Card, CardHeader, Box, Container } from '@mui/material';
import style from "./style.module.scss";
import AppWebsiteVisitsSimple from '../../../sections/@dashboard/app/AppWebsiteVisitsSimple';

// ----------------------------------------------------------------------
export default function Home() {

  return(
    <div>
  <Container>
    <Card className={style.card}>
      <div className={style.header}><h2>Health State</h2><h2>56%</h2></div>
      <AppWebsiteVisitsSimple
      className={style.chart}
        
              chartLabels={[
                '01/01/2003',
                '02/01/2003',
                '03/01/2003',
                '04/01/2003',
                '05/01/2003',
                '06/01/2003',
                '07/01/2003',
                '08/01/2003',
                '09/01/2003',
                '10/01/2003',
                '11/01/2003',
              ]}
             
              chartData={[
                
                {
                  
                  type: 'area',
                  fill: 'gradient',
                  data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39],
                },
                {
                 
                  type: 'line',
                  fill: 'solid',
                  data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39],
                },
              ]}
              height={250}
          
              
            />
      </Card>
      </Container>
      <div className={style.slider}>
     
         <Card className={style.squarcard}>
      <div className={style.header}><h2>Daily steps</h2></div>
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
      <Card className={style.squarcard}>
      <div className={style.header}><h2>Daily steps</h2></div>
      <AppWebsiteVisitsSimple
      className={style.radial}
      chartLabels={[
        '01/01/2003',
        '02/01/2003',
        '03/01/2003',
        '04/01/2003',
        '05/01/2003',
        '06/01/2003',
        '07/01/2003',
        '08/01/2003',
        '09/01/2003',
        '10/01/2003',
        '11/01/2003',
      ]}
           chartData={[
                
            {
                  
              type: 'bar',
              fill: 'solid',
              data: [44, 55, 41, 67, 22, 43, 21, 33, 45, 31, 87, 65, 35]
            }
            
            ]}
             
              height={120}
         
              
            />
      </Card>
      <Card className={style.squarcard}>
      <div className={style.header}><h2>Daily steps</h2></div>
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
  
</div>
</div>
    );
}
