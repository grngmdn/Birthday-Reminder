import Box from '@mui/material/Box';
import React, { useState } from "react";
import List from "./components/List";
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import data from "./Data"
import Typography from '@mui/material/Typography';
import {format} from "date-fns"

function App() {

  const [people, setPeople] = useState(data)

  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Card 
        sx={{ 
          maxWidth: 450,
          width: 400,
          bgcolor: "#FBF2FB", 
          padding: "50px",
          }}>
        <Typography
          variant='body1'
          sx={{
            color: "#21254A",
          }}
        >
          {people.length} BIRTHDAYS TODAY
        </Typography>

        <Typography
          color="textSecondary"
          variant="body2"
          sx={{
            paddingBottom: "15px"
          }}
        >
          {format(new Date(), "do MMM Y")}
        </Typography>

          <List people={people}/>
          <br />

          <Button
              variant='contained'
              size='small'
              sx={{
                backgroundColor: '#D4A6D3',
                "&:hover" :{
                  backgroundColor: '#B2B9C1'
                }
              }}
              fullWidth
              onClick={() => setPeople([])}	
            >
              Clear List
          </Button>
      </Card>
    </Box>
  );
}

export default App;
