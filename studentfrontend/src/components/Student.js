import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Container } from '@mui/system';
import Paper from '@mui/material/Paper';
import { useState } from 'react';

export default function Student() {
    
    const paperStyle={padding:'50px 20px', width:600, margin:'20px auto'};
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');

    return (
        <Container>
            <Paper elevation={3} style={paperStyle}>
                <h1><u>Student System</u></h1>
                <h3> Add a new student </h3>
                <Box
                    component="form"
                    sx={{
                        '& > :not(style)': { m: 1, width: '25ch' },
                    }}
                    noValidate
                    autoComplete="off"
                >

                    <TextField id="outlined-basic" label="Name" variant="outlined" value={name}
                    onChange={(e)=>setName(e.target.value)}/>

                    <TextField id="outlined-basic" label="Addresss" variant="outlined" value={address}
                    onChange={(e)=>setAddress(e.target.value)}/>
                </Box>
            </Paper>
        </Container>
    
  );
}