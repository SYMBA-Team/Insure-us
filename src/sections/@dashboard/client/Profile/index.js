import React from 'react';
import { Grid, Card, Typography, TextField, Button } from '@mui/material';

import style from './style.module.scss';

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
const Diagnoses = [
  {
    title: 'Diagnose 1',
    paragraphs: [
      `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum dolor in architecto possimus itaque eius
      consequuntur aperiam suscipit vitae nobis? Natus eum sequi libero alias dolor illum iste repellendus maiores
      voluptate accusamus, cumque quos ipsa, mollitia ratione deleniti porro? Repudiandae dolore, ipsam quam rerum
      unde, corrupti adipisci, repellendus vitae officia ea voluptates excepturi odio.`,
      `Reiciendis amet cupiditate natus, ratione laboriosam tempora eos molestiae autem harum consectetur itaque
      nulla, architecto labore! Cumque sapiente molestias perferendis, accusantium obcaecati ab iusto a ad in
      repellat corrupti? Perferendis, modi recusandae ab enim distinctio animi nam quam nobis necessitatibus
      quidem laudantium dignissimos, sed fuga praesentium.`,
    ],
  },
  {
    title: 'Diagnose 2',
    paragraphs: [
      `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum dolor in architecto possimus itaque eius
      consequuntur aperiam suscipit vitae nobis? Natus eum sequi libero alias dolor illum iste repellendus maiores
      voluptate accusamus, cumque quos ipsa, mollitia ratione deleniti porro? Repudiandae dolore, ipsam quam rerum
      unde, corrupti adipisci, repellendus vitae officia ea voluptates excepturi odio.`,
      `Reiciendis amet cupiditate natus, ratione laboriosam tempora eos molestiae autem harum consectetur itaque
      nulla, architecto labore! Cumque sapiente molestias perferendis, accusantium obcaecati ab iusto a ad in
      repellat corrupti? Perferendis, modi recusandae ab enim distinctio animi nam quam nobis necessitatibus
      quidem laudantium dignissimos, sed fuga praesentium.`,
    ],
  },
];
export default function Profile() {
  return (
    <Grid spacing={3} container fullWidth>
      <Grid item xs={4}>
        <Card className={style.Card}>
          <Typography variant="body2">
            <strong>Email:</strong> {client.email}
          </Typography>
          <Typography variant="body2">
            <strong>City:</strong> {client.city}
          </Typography>
          <Typography variant="body2">
            <strong>State:</strong> {client.state}
          </Typography>
          <Typography variant="body2">
            <strong>Country:</strong> {client.country}
          </Typography>
          <Typography variant="body2">
            <strong>BirthDate:</strong> {client.date_of_birth}
          </Typography>
          <Typography variant="body2">
            <strong>Gender:</strong> {client.gender}
          </Typography>
          <Typography variant="body2">
            <strong>bio:</strong>
          </Typography>
          <Typography variant="body2">{client.bio}</Typography>
        </Card>
      </Grid>
      <Grid item xs={8} className={style.Right}>
        <Card className={style.Card}>
          <TextField
            name={'Title'}
            className={style.input}
            label="Diagnose's Title"
            placeholder={'Put something'}
            fullWidth
          />
          <TextField
            name={'Description'}
            className={style.input}
            label="Description"
            placeholder={'Put something'}
            multiline
            rows={4}
            fullWidth
          />
          <Button color="secondary" variant="contained" sx={{ marginLeft: 'auto' }}>
            Post
          </Button>
        </Card>
        {Diagnoses.map((d) => (
          <Card key={d.title} className={style.Card}>
            <Typography variant="h5">{d.title}</Typography>
            {d.paragraphs.map((p, i) => (
              <Typography key={`p${i}`} variant="body2">
                {p}
              </Typography>
            ))}
          </Card>
        ))}
      </Grid>
    </Grid>
  );
}
