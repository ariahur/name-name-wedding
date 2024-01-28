import { Grid } from '@mui/material';
import React from 'react'
import { Contact, Footer, Gallery, Invitation, Summary, Location, Rsvp } from '@components';

// https://www.barunsonmcard.com/preview/1149

const App = () => {
  return (
    <div>
      <Summary />
      <Invitation />
      <Contact />
      <Gallery />
      <Location />
      <Rsvp />
      <Footer />
    </div>
  );
};

export default App;