import React, { useState } from "react";
import {TextField,Button,Typography,Box,Card,CardContent,} from "@mui/material";
import "../SignUp/SignUp.css";
import { useNavigate } from "react-router-dom";
import otpImage from "../../assets/verify-otp.png";
import './VerifyUser.css';

const VerifyUser: React.FC = () => {
  const [otp, setOtp] = useState(["", "", "", ""]); 

  const handleInputChange = (index: number, value: string) => {
  
    if (/^[0-9]*$/.test(value) || value === "") {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
    }
  };

  const handleKeyDown = (
    index: number,
    event: React.KeyboardEvent<HTMLDivElement>
  ) => {
    //if we   Move to the previous input box if Backspace is pressed
    if (event.key === "Backspace" && index > 0) {
      const newOtp = [...otp];
      newOtp[index - 1] = "";
      setOtp(newOtp);
    }
  };

  const handleSubmit = () => {
   
    const enteredOTP = otp.join("");
    console.log("Entered OTP:", enteredOTP);
    navigate("/verify");
  };

  const navigate = useNavigate();

  return (
    <Box className="SignUp">
      <Box className="signin-header">
            <Typography>Logo</Typography>

        </Box>
      <Box className="header">
        <Card className="card-signin">
          <CardContent>
            <Box>
              <Typography>Welcome to <span className="verify-lorem">Lorem</span></Typography>
              <Typography className="header-title" mb={4}>
                Sign Up
              </Typography>
            </Box>
            <Box>
              <form onSubmit={handleSubmit}>
                <Box mb={4}>
                  <Typography mb={1}>
                    Enter OTP received to your email Id
                  </Typography>
                  {otp.map((digit, index) => (
                    <TextField
                      key={index}
                      type="text"
                      variant="outlined"
                      size="small"
                      value={digit}
                      onChange={(event) => handleInputChange(index, event.target.value)}
                      onKeyDown={(event) => handleKeyDown(index, event)}
                      style={{
                        width: "3rem",
                        padding: 8,
                        height: "2rem",
                        margin: "0.5rem",
                      }}
                    />
                  ))}
                </Box>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  fullWidth
                >
                  Verify
                </Button>
              </form>
              <Box className="no-account-text">
                <Typography>Did not receive yet? </Typography>
                <Typography
                  className="register-text"
                  onClick={() => navigate("/signup")}
                >
                  Resend OTP
                </Typography>
              </Box>
            </Box>
          </CardContent>
        </Card>
      </Box>
      <img src={otpImage} alt="imahe" className="signin-image" />
    </Box>
  );
};

export default VerifyUser;
