import { Card, CardHeader, Box, Container } from '@mui/material';
import style from "./style.module.scss";
import AppWebsiteVisitsSimple from '../../../sections/@dashboard/app/AppWebsiteVisitsSimple';

// ----------------------------------------------------------------------
export default function Home() {

  return(
    <div>
  <Container>
    <h1>Hi sofian !</h1>
    <p className='text'>Saturday 14 May</p>
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
              options={{yaxis:{labels:{style:{colors:['#ffffff'],}}},xaxis:{type: 'datetime' ,labels:{style:{colors:['#ffffff'],}}},
              colors:['#ffffff'], fill:{opacity:0.2,type:'solid',colors:['#ffffff'],},
            }}
              chartData={[
                
                {
                  
                  type: 'area',
                  fill: 'solid',
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
      <div className={style.header}><h3>Daily steps</h3></div>
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
              
              
            />
      </Card>
      <Card className={style.squarcard}>
      <div className={style.header}><h3>Daily steps</h3> <img src="" alt="" /></div>
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
      options={{  colors:['#ffffff'], fill:{type:'solid',colors:['#1A73E8']},plotOptions: {
        bar: {
          borderRadius: 1,
          columnWidth: '50%',
        }
      },legend:{show:false},xaxis:{
        labels:{show:false}
    },yaxis:{
      labels:{show:false}
  }}
       
      }
           chartData={[
                
            {
                  
              type: 'bar',
              fill: 'solid',
              data: [50,52,44,60,65,70,75,68,44,60,65,70,75]
            }
            
            ]}
           
              height={90}
         
              
            />
            <p className='desc'>6h 32min</p>
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
             options={{yaxis:{
              labels:{show:false}},
              plotOptions: { 
            
              radialBar: {
               hollow: {
                 size: '70%',
              }
            },}}}
              height={350}
             
              
            />
      </Card>
  
</div>
</div>
    );
}
