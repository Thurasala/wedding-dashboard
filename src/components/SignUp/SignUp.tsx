import React, { useState } from "react";
import { TextField, Button, Typography, Box, Card, CardContent, InputAdornment,} from "@mui/material";
import "./SignUp.css";
import { useNavigate } from "react-router-dom";
import sigupImage from "../../assets/signup.png";
import EmailIcon from "@mui/icons-material/Email";
import otpImage from "../../assets/verify-otp.png";
interface IState{
  formData:{
    username:string;
    contactnumber:string;
    password:string;
   }
  
   verifyOtp:boolean;
}
const SignUp: React.FC = () => {
  const [formData, setFormData] = useState<IState['formData']>({
    username: "",
    contactnumber: "",
    password: "",
  });

  const navigate = useNavigate();
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [verifyOtp, setverifyOtp] = useState<IState['verifyOtp']>(false);

  const handleOtpChange = (index: number, value: string) => {
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
    // navigate to dashboard
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSignUp = (event: React.FormEvent) => {
    event.preventDefault();
    setverifyOtp(true);
  };

  return (
    <Box className="SignUp">
      <Typography className="signin-header" mb={3}>
        Logo
      </Typography>
      <Box className="header">
        <Card className="card-signin">
          <CardContent>
            <Box>
              <Typography>
                Welcome to <span className="signup-lorem">Lorem</span>
              </Typography>
              <Typography className="header-title" mb={4}>
                Sign Up
              </Typography>
              {verifyOtp ? (
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
                          onChange={(event) =>
                            handleOtpChange(index, event.target.value)
                          }
                          onKeyDown={(event) => handleKeyDown(index, event)}
                          className="otp-input"
                          style={{
                            
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
              ) : (
                <Box>
                  <form onSubmit={handleSignUp}>
                    <Box mb={4}>
                      <Typography mb={1}>
                        Enter your username or email address
                      </Typography>
                      <TextField
                        type="text"
                        name="username"
                        placeholder="username or email address"
                        value={formData.username}
                        onChange={handleInputChange}
                        fullWidth
                        InputProps={{
                          endAdornment: (
                            <InputAdornment position="end">
                              <EmailIcon />
                            </InputAdornment>
                          ),
                        }}
                      />

                      <Box></Box>
                    </Box>
                    <Button
                      type="submit"
                      variant="contained"
                      color="primary"
                      fullWidth
                    >
                      Register
                    </Button>
                  </form>
                  <Box className="no-account-text">
                    <Typography>Already have a account? </Typography>
                    <Typography
                      className="register-text"
                      onClick={() => navigate("/")}
                    >
                      Sign in
                    </Typography>
                  </Box>
                </Box>
              )}{" "}
            </Box>
          </CardContent>
        </Card>
      </Box>
      <img
        src={verifyOtp ? otpImage : sigupImage}
        alt="imahe"
        className="signin-image"
      />
    </Box>
  );
};

export default SignUp;
