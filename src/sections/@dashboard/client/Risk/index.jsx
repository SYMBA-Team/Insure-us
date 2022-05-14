import { AppWebsiteVisits } from '../../app';

export default function Risk() {
  return (
    <div>
      <AppWebsiteVisits
        title={'Health rate'}
        subheader="(+43%) than last day"
        chartLabels={[
          '05/01/2022',
          '05/02/2022',
          '05/03/2022',
          '05/04/2022',
          '05/05/2022',
          '05/06/2022',
          '05/07/2022',
          '05/08/2022',
          '05/09/2022',
          '05/10/2022',
          '05/11/2022',
          '05/12/2022',
          '05/13/2022',
          '05/14/2022',
        ]}
        chartData={[
          {
            name: 'Risk RATE',
            type: 'area',
            fill: 'gradient',
            data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 40, 45, 20],
          },
        ]}
      />
    </div>
  );
}
