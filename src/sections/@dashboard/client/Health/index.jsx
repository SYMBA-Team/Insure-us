import { Card, Grid, Typography } from '@mui/material';
import ReactApexChart from 'react-apexcharts';
import { useTheme } from '@mui/material/styles';
import style from './style.module.scss';
import AppWebsiteVisits from '../../app/AppWebsiteVisits';
import img from '../../../../images/person.svg';
import { AppConversionRates } from '../../app';

const data = {
  oxygen_data: {
    saturation_percentage: 95,
    max_volume_ml_per_min_per_kg: 45,
    saturation_samples: [
      {
        timestamp: '2021-03-21T04:00:00-07:00',
        percentage: 97,
      },
    ],
  },
  energy_data: {
    energy_kilojoules: 100,
    energy_planned_kilojoules: 100,
  },
  strain_data: {
    strain_level: 57,
  },
  power_data: {
    avg_watts: 210.0,
    power_samples: [
      {
        timestamp: '2021-03-21T04:00:00-07:00',
        watts: 210.0,
        timer_duration_seconds: 10,
      },
      {
        timestamp: '2021-03-21T04:05:00-07:00',
        watts: 210.0,
        timer_duration_seconds: 20,
      },
    ],
    max_watts: 220.1,
  },
  MET_data: {
    num_moderate_intensity_minutes: 213,
    num_low_intensity_minutes: 13,
    avg_level: 1.425,
    samples: [
      {
        timestamp: '2021-03-21T04:10:00-07:00',
        level: 0.9,
      },
      {
        timestamp: '2021-03-21T04:02:00-07:00',
        level: 0.9,
      },
    ],
    num_high_intensity_minutes: 423,
    num_inactive_minutes: 40,
  },
  polyline_map_data: {
    summary_polyline:
      'amdbIts}EDCDWRJF?r@[VGV?RFH?bAYn@?r@F`B?TBVCfBC~@Bx@Qb@Qb@MhACFBT?HA\\DtAIz@CZEZFh@ELETDp@Xv@IVUNC\\M~A{@f@yADCVyANa@JcAFsBGcAxCm@f@ZHNxAbAv@z@p@\\r@t@^VtAnA|@f@\\PbAZd@@t@PtC^HBBR^FjAZjBn@ZDb@Rd@Jz@\\ZTd@l@n@jATf@Tl@Rt@NbATjBVjDD~@MVDr@@`DG`DOlB_@tBu@|Bi@lAOX_BdC_@\\qA|@s@`@{Ar@}CnBe@b@e@p@qBvD]h@g@j@[n@e@vB{@r@e@h@gApDUf@g@zA?P@j@Vt@^pBN|Ad@dCPlBThAj@dBZx@z@|AZZj@f@hBlB|BzBn@d@p@`@bA^h@PvB?x@ExBDxC@{ALaCHmAEsCDo@IqAe@SKsAeAkAsAcBwAuBaCUa@Ym@i@m@[y@Oy@[iAG]g@wEIWOqCKs@Qy@Wk@FcA~@_BfAyDXi@`@a@\\WRi@^wA^gAZa@`BaD\\i@n@y@hFmD|D_Cb@[XYz@qA^w@Xy@Vc@XaALs@Am@Me@G_@\\sB@uBCqB@e@?RGt@HdCAdAIvAQzAS~@Uf@_AdAa@p@Wl@m@dA?FLAT[j@aAdAuBRw@\\y@F[VyCDiD?aBDm@Jy@Nq@?MI}@C}@[eCaAeEQm@k@mAe@m@WMo@COGHAfALXLx@dAt@zAPf@T~@\\`CRdC?HONKAKIOc@Ow@s@}Di@eBWe@[a@q@u@e@QcB_@u@MyBq@eB]g@Gc@A}Ae@GU@i@DCVAtALfA^BFE~@@JDJlBd@CEIEe@QgAOiBk@e@AiCm@a@MaAe@',
  },
  heart_rate_data: {
    summary: {
      user_hr_max_bpm: 190,
      min_hr_bpm: 60,
      avg_hr_variability_sdnn: 65,
      avg_hr_variability_rmssd: 65,
      avg_hr_bpm: 70,
      resting_hr_bpm: 60,
      max_hr_bpm: 80,
    },
    detailed: {
      hrv_samples_rmssd: [
        {
          timestamp: '2021-03-21T04:01:00-07:00',
          hrv_rmssd: 65,
        },
        {
          timestamp: '2021-03-21T04:02:00-07:00',
          hrv_rmssd: 65,
        },
      ],
      hrv_samples_sdnn: [
        {
          timestamp: '2021-03-21T04:01:00-07:00',
          hrv_sdnn: 65,
        },
        {
          timestamp: '2021-03-21T04:02:00-07:00',
          hrv_sdnn: 65,
        },
      ],
      hr_samples: [
        {
          timestamp: '2021-03-21T04:01:00-07:00',
          bpm: 70,
        },
        {
          timestamp: '2021-03-21T04:02:00-07:00',
          bpm: 71,
        },
      ],
    },
  },
  active_durations_data: {
    activity_seconds: 120,
    low_intensity_seconds: 90,
    rest_seconds: 1230,
    num_continuous_inactive_periods: 4,
    inactivity_seconds: 49,
    activity_levels_samples: [
      {
        timestamp: '2021-03-21T04:00:00-07:00',
        activity_level: 2,
      },
      {
        timestamp: '2021-03-21T04:02:00-07:00',
        activity_level: 2,
      },
    ],
    moderate_intensity_seconds: 500,
    vigorous_intensity_seconds: 700,
  },
  movement_data: {
    normalized_speed_meters_per_second: 4.05,
    avg_torque_newton_meters: 8,
    avg_pace_minutes_per_kilometer: 5.12,
    max_pace_minutes_per_kilometer: 6.05,
    max_speed_meters_per_second: 4.27,
    avg_cadence: 78,
    max_cadence: 78,
    avg_velocity_meters_per_second: 3,
    max_torque_newton_meters: 10,
    avg_speed_meters_per_second: 3.26,
    max_velocity_meters_per_second: 4,
    cadence_samples: [
      {
        timestamp: '2021-03-21T04:00:00-07:00',
        cadence_rpm: 1.3,
        timer_duration_seconds: 1,
      },
      {
        timestamp: '2021-03-21T04:02:00-07:00',
        cadence_rpm: 4.4,
        timer_duration_seconds: 2,
      },
    ],
    speed_samples: [
      {
        timestamp: '2021-03-21T04:00:00-07:00',
        speed_meters_per_second: 4.3,
        timer_duration_seconds: 1,
      },
      {
        timestamp: '2021-03-21T04:02:00-07:00',
        speed_meters_per_second: 5.4,
        timer_duration_seconds: 2,
      },
    ],
  },
  metadata: {
    city: 'London',
    type: 17,
    end_time: '2021-03-21T04:50:00-07:00',
    start_time: '2021-03-21T04:00:00-07:00',
    country: 'United Kingdom',
    name: 'Spinning',
    summary_id: String,
    upload_type: 1,
    state: 'None',
  },
  lap_data: {
    laps: [
      {
        start_time: '2021-03-21T04:00:00-07:00',
        calories: 40.0,
        distance: 342.0,
      },
    ],
  },
  TSS_data: {
    samples: [
      {
        intensity_factor_planned: 80,
        intensity_factor_actual: 89.94437,
        method: 'HR',
        planned: 80.0,
        actual: 89.9443,
        normalized_power_watts: 200,
      },
    ],
  },
  device_data: {
    software_version: '1.12.36',
    activation_timestamp: '2022-02-13T03:18:57+00:00',
    manufacturer: 'Suunto',
    serial_number: '1234567898765',
    name: 'Suunto Spartan Sport Wrist HR',
    hardware_version: 'LankkuD',
    other_devices: [],
  },
  work_data: {
    work_in_kilojoules: null,
  },
  distance_data: {
    summary: {
      floors_climbed: 1000,
      swimming: {
        pool_length_meters: 25,
        num_laps: 35,
        num_strokes: 493,
      },
      elevation: {
        gain_actual_meters: 28.7,
        avg_meters: Number,
        loss_actual_meters: 5.0,
        max_meters: 40.0,
        gain_planned_meters: 36.7,
        min_meters: 28.0,
      },
      distance_meters: 1203,
      steps: 10200,
    },
    detailed: {
      elevation_samples: [
        {
          timestamp: '2021-03-21T04:00:00-07:00',
          elev_meters: 109.4000244140625,
          timer_duration_seconds: 20,
        },
        {
          timestamp: '2021-03-21T04:07:00-07:00',
          elev_meters: 149.4123244140625,
          timer_duration_seconds: 30,
        },
      ],
      distance_samples: [],
    },
  },
  calories_data: {
    net_intake_calories: 2300,
    net_activity_calories: 700,
    BMR_calories: 2100,
    total_burned_calories: 2800,
  },
  position_data: {
    start_pos_lat_lng: [-0.061000000000000006, 51.531135],
    position_samples: [
      {
        timestamp: '2021-03-21T04:00:00-07:00',
        coords_lat_lng: [51.053232522681355, -114.06880217604339],
        timer_duration_seconds: 20,
      },
      {
        timestamp: '2021-03-21T04:05:00-07:00',
        coords_lat_lng: [51.053232522681355, -114.06880217604339],
        timer_duration_seconds: 10,
      },
    ],
    centre_pos_lat_lng: [-0.04478833333333333, 51.53568],
    end_pos_lat_lng: [-0.04478833333333333, 51.53568],
  },
};
const bodyDetails = [
  ['185 CM', 'Height'],
  ['70 kg', 'Weight'],
  ['40%', 'Water'],
  ['7h 30m', 'Sleep'],
];
const state = {
  series: [9000, 1000],
  options: {
    chart: {
      type: 'donut',
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: 'bottom',
          },
        },
      },
    ],
  },
};
export default function Health() {
  const theme = useTheme();
  return (
    <Grid container spacing={2}>
      <Grid item xs={8}>
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
              name: 'HEALTH RATE',
              type: 'area',
              fill: 'gradient',
              data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 50, 45, 70],
            },
          ]}
        />
      </Grid>
      <Grid item xs={4}>
        <Card className={style.Details}>
          <Typography variant="h4">His Body</Typography>
          <Grid container>
            <Grid item xs={4}>
              <img src={img} alt="person loading" />
            </Grid>
            <Grid item xs={8} container alignItems="flex-end">
              {bodyDetails.map((bD, i) => (
                <Grid xs={6} key={`d${i}`}>
                  <Typography variant={'body'}>
                    <strong>{bD[0]}</strong>
                  </Typography>
                  <Typography variant={'body2'}>{bD[1]}</Typography>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Card>
        <Card className={style.Details}>
          <Typography variant="h4">His Body</Typography>
          <ReactApexChart options={state.options} series={state.series} type="donut" />
        </Card>
      </Grid>
      <Grid item xs={6}>
        <AppConversionRates
          title="Heart Rates"
          subheader=""
          chartData={Object.keys(data.heart_rate_data.summary).map((key) => ({
            label: key,
            value: data.heart_rate_data.summary[key],
          }))}
        />
      </Grid>
      <Grid item xs={6}>
        <AppConversionRates
          title="Heart Rates"
          subheader=""
          chartData={Object.keys(data.heart_rate_data.summary).map((key) => ({
            label: key,
            value: data.heart_rate_data.summary[key],
          }))}
        />
      </Grid>
    </Grid>
  );
}
