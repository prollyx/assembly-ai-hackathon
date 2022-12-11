import Login from "../components/login";
import CssBaseline from "@mui/material/CssBaseline";
import Paper from "@mui/material/Paper";
import Image from "next/image";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Stack } from "@mui/system";
import illus from "../../assets/illus.svg";
import logo from "../../assets/logo.png";

const theme = createTheme();

export default function SignUp() {
  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />

        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
          component={Paper}
          item
          sm={4}
          md={6}
          sx={{
            backgroundImage: "url(/illus.svg)",
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <Grid
          item
          xs={12}
          sm={8}
          md={6}
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <Box
            sx={{
              my: "auto",
              px: 3,
              py: 6,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              width: "50%",
              backgroundColor: "white",
              borderRadius: "5px",
              boxShadow: "1px 2px 18px 3px lightgrey",
            }}
          >
            <Box
              sx={{
                display: "flex",
                fontWeight: "bold",
                typography: "h1",
                textAlign: "left",
                mb: 4,
              }}
            >
              <Image src={logo} alt="logo" height={30} />
            </Box>
            <Stack spacing={8} direction="column">
              <Stack direction="column" spacing={3}>
                <h1>Spend less time planning and more time building⚡️</h1>

                <h3>
                  ProllyX helps you quickly and accurately generate detailed
                  test cases, user stories, and project requirements in seconds
                  ⏱
                </h3>
              </Stack>

              <Login fullWidth />
            </Stack>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

// const SignUp = () => {
//   return (
//     <>
//       <h1>Sign Up</h1>
//       <Login />
//     </>
//   );
// };

// export default SignUp;
