import {
  Box,
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  Link,
  OutlinedInput,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import React, { useState } from "react";

const Signin = () => {
  const [form, setForm] = useState();
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const handleOnChange = (e) => {
    e.preventDefault();

    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };
  return (
    <div>
      <Box
        className='bg-gradient-to-r from-indigo-500 to-blue-500 '
        sx={{ height: "100dvh" }}
      >
        <form
          action='post'
          onSubmit={handleOnSubmit}
          className='flex justify-center items-center h-[70dvh] flex-col'
        >
          <Stack gap={2}>
            <Typography
              variant='h4'
              sx={{
                marginTop: "3rem",
              }}
              className=' bg-gradient-to-r from-yellow-300 to-orange-700 bg-clip-text text-transparent flex justify-center'
            >
              LinkShare
            </Typography>
            <TextField
              id='standard-basic'
              label='User Name'
              name='Username'
              variant='filled'
              sx={{
                background: "white",
                width: "25ch",
                borderRadius: ".3rem",
              }}
              onChange={handleOnChange}
            />
            <FormControl
              sx={{
                width: "25ch",
                backgroundColor: "white",
                borderRadius: ".3rem",
              }}
              variant='filled'
            >
              <InputLabel htmlFor='outlined-adornment-password'>
                Password
              </InputLabel>
              <OutlinedInput
                id='outlined-adornment-password'
                type={showPassword ? "text" : "password"}
                endAdornment={
                  <InputAdornment position='end'>
                    <IconButton
                      aria-label='toggle password visibility'
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge='end'
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label='Password'
                name='password'
                onChange={handleOnChange}
              />
            </FormControl>

            <Button
              variant='contained'
              sx={{ backgroundColor: "#002966" }}
              type='submit'
            >
              Login
            </Button>
          </Stack>
          <Typography
            variant='subtitle1'
            className='text-center bg-gradient-to-r  from-white  via-sky-300  bg-clip-text text-transparent'
          >
            Create A New{" "}
            <Link
              href='/register'
              sx={{ color: "#002966" }}
            >
              Accout
            </Link>
          </Typography>
          <Typography
            variant='subtitle1'
            className='text-center bg-gradient-to-r  from-white  via-sky-300  bg-clip-text text-transparent'
          >
            | Forget
            <Link
              href='/forgetPassword'
              sx={{ color: "#002966" }}
            >
              Password ?
            </Link>
          </Typography>
        </form>
      </Box>
    </div>
  );
};

export default Signin;
