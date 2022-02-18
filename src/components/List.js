import React from 'react'
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';

function List({people}) {
  return (
    <div>
      {people.map(
        people => {
          return (
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                color: "#21254A",
              }}
            >
              <img 
                src={people.image}
                alt="The picture of the people"
                className='circle'
              />
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  padding: "30px"
                }}
              >
                <Typography
                  variant='body1'
                >{people.name}
                </Typography>

                <Typography
                  variant="body2"
                  color="textSecondary"
                >{people.age} years
                </Typography>
              </Box>
              <br />
            </Box>
          )
        }
      )}
    </div>
  )
}

export default List