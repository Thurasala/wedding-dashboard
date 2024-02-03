import React, { useState } from "react";
import {TextField,Button,Typography, Box, CardContent, Card, InputAdornment,} from "@mui/material";

import "../SignIn/SignIn.css";
import { useNavigate } from "react-router-dom";
import LockIcon from '@mui/icons-material/Lock';
import handsImage from '../../assets/hands.png';

interface IState {
  formData: {
    password: string;
    confirmpassword: string;
  };
  error:string;
}

const Password = () => {
  const [formData, setFormData] = useState<IState['formData']>({
   
    password: "",
    confirmpassword:"",
  });

  const navigate = useNavigate();

  const [error, setError] = useState<IState['error']>("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSignIn = (event: React.FormEvent) => {
    event.preventDefault();

    const {  password, confirmpassword} = formData;

    if (!password || !confirmpassword) {
      setError("Please fill in all fields.");
    } else {
     
      setError("");
    }
  };

  return (
    <Box className="SignIn">
       <Box className="signin-header">
            <Typography>Logo</Typography>

        </Box>
      <Box className="header">
        <Card className="card-signin">
          <CardContent>
            <Box>
              <Typography>Welcome to <span className="signin-lorem">Lorem</span></Typography>
              <Typography className="header-title">Sign in</Typography>
            </Box>
            <Box>
              <form onSubmit={handleSignIn}>
                
                <Box mb={3}>
                  <Typography mb={1}>Enter your password</Typography>
                  <TextField
                    type="password"
                    name="password"
                    placeholder="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    fullWidth
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <LockIcon/>
                        </InputAdornment>
                      ),
                    }}
                  />
                 </Box>
                <Box mb={3}>
                  <Typography mb={1}>Confirm your password</Typography>
                  <TextField
                    type="confirmpassword"
                    name="confirmpassword"
                    placeholder="confirm Password"
                    value={formData.confirmpassword}
                    onChange={handleInputChange}
                    fullWidth
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <LockIcon/>
                        </InputAdornment>
                      ),
                    }}
                  />
                  
                </Box>
                {error && (
                  <Typography variant="body1" color="error">
                    {error}
                  </Typography>
                )}
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  fullWidth
                >
                  save & continue
                </Button>
              </form>
             
            </Box>
          </CardContent>
        </Card>
      </Box>
      <img src={handsImage} alt="signimagee" className="signin-image" />
    </Box>
  );
};

export default Password;