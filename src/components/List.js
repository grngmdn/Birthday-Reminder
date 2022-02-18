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
                justifyContent: "flex-start",
                alignItems: "center",
                color: "#21254A",
                paddingBottom: "10px",
                paddingTop: "10px"
              }}
            >
              <Box
                sx={{
                }}
              >
                <img 
                  src={people.image}
                  alt="The picture of the people"
                  className='circle'
                />
              </Box>

              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  paddingLeft: "30px"
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