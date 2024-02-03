import React, { useState } from "react";
import {
  TextField,
  Button,
  Typography,
  Box,
  CardContent,
  Card,
  InputAdornment,
} from "@mui/material";
import siginImage from "../../assets/signin.png";
import "./SignIn.css";
import { useNavigate } from "react-router-dom";
import PersonIcon from "@mui/icons-material/Person";
import LockIcon from "@mui/icons-material/Lock";

interface IState {
  formData: {
    username: string;
    password: string;
  };
  error: string;
}

const SignIn = () => {
  const [formData, setFormData] = useState<IState["formData"]>({
    username: "",
    password: "",
  });

  const navigate = useNavigate();

  const [error, setError] = useState<IState["error"]>("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSignIn = (event: React.FormEvent) => {
    event.preventDefault();

    const { username, password } = formData;

    if (!username || !password) {
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
              <Typography>
                Welcome to <span className="signin-lorem">Lorem</span>
              </Typography>
              <Typography className="header-title">Sign in</Typography>
            </Box>
            <Box>
              <form onSubmit={handleSignIn}>
                <Box mb={3}>
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
                          <PersonIcon />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Box>
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
                          <LockIcon />
                        </InputAdornment>
                      ),
                    }}
                  />
                  <Typography className="forgt-pwd">forgot password</Typography>
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
                  Sign in
                </Button>
              </form>
              <Box className="no-account-text">
                <Typography>NoAccount ? </Typography>
                <Typography
                  className="register-text"
                  onClick={() => navigate("/signup")}
                >
                  Register
                </Typography>
              </Box>
            </Box>
          </CardContent>
        </Card>
      </Box>
      <img src={siginImage} alt="signimagee" className="signin-image" />
    </Box>
  );
};

export default SignIn;
