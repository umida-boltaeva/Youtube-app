import React from "react";
import { Container, Tabs, Tab, Box, Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import VideoPlayer from "./VideoPlayer";
import SearchList from "./SearchList";

const styles = {
  container: {
    backgroundImage: "url('images/background.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "100vh",
  },
};

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

const MainScreen = ({ selected, classes }) => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Container className={classes.container}>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
      >
        <Tab label="Search" />
        <Tab label="Likes" />
      </Tabs>
      <TabPanel value={value} index={0}>
        <SearchList />
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      {/* <VideoPlayer /> */}
    </Container>
  );
};

export default withStyles(styles)(MainScreen);
