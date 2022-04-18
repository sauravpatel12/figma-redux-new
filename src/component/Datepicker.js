import * as React from 'react';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import { red } from '@mui/material/colors';

const Datepicker =()=>{
return(
<>

<Stack component="form" noValidate spacing={3}>
      <TextField
        id="date"
        label="Birthday"
        type="date"
        defaultValue="2017-05-24"
        sx={{ width: "21vw",backgroundColor:'#F9F9F9' }}
        InputLabelProps={{
          shrink: true,
        }}
      />
     
    </Stack>



</>

)

}
export default Datepicker;