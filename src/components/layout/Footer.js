import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer>
      <Box
        px={{ xs: 3, sm: 10 }}
        py={{ xs: 5, sm: 10 }}
        bgcolor="text.secondary"
        color="white"
        fontSize="18px"
      >
        <Container maxWidth="lg">
          <Grid container spacing={5}>
            <Grid item xs={12} sm={12}>
              <Box borderBottom={1}>Account</Box>
              <Box>
                <Link to="/userlogin" color="inherit">
                  Login
                </Link>
              </Box>
              <Box>
                <Link to="/usersignup" color="inherit">
                  Register
                </Link>
              </Box>
            </Grid>
          </Grid>
          <Box
            textAlign="center"
            color="white"
            pt={{ xs: 5, sm: 10 }}
            pb={{ xs: 5, sm: 0 }}
          >
            Municipal Corporation CMS &reg; {new Date().getFullYear()}
          </Box>
        </Container>
      </Box>
    </footer>
  );
}
