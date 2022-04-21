import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";
import { useState } from "react";
import { Box } from "@mui/system";
import { useMediaQuery } from "@mui/material";

function TabPanel(props) {
  const { children, value, index, title, workExperience, node, ...other } =
    props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3, pt: 0 }}>
          <Typography variant="h6" sx={{ textDecoration: "underline" }}>
            {title}
          </Typography>
          {workExperience.map(({ details }, i) => (
            <Typography key={`${title}${i}`}>• {details}</Typography>
          ))}
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

const SectionJobs = ({ router }) => {
  const matchesSM = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const matchesXS = useMediaQuery((theme) => theme.breakpoints.down("xs"));

  const workMMP = [
    {
      details: `Created custom plugins and features in WordPress`
    },
    {
      details: `Handled 3rd party application integration such as Blueshift and Thinkific`
    },
    {
      details: `Translated designer vision from Adobe XD to a responsive and enjoyable experience`
    },
    {
      details: `Created and maintained inhouse automation to help facilitate and speed up certain processes`
    },
    {
      details: `In the process of a complete site revamp using NextJS and MUI`
    },
    {
      details: `Participate in code reviews`
    },
  ];

  const workCov = [
    {
      details: `Create responsive landing pages using Magento CMS as well as hard coded HTML, CSS, and JavaScript languages`
    },
    {
      details: `Develop custom Magento modules using PHP`
    },
    {
      details: `Design and create custom email templates based on marketing strategies to further sales`
    },
    {
      details: `Utilize Mailchimp services to hit more targeted demographic`
    },
    {
      details: `Observe and improve site performance via Google Web Analytic tools and SEO friendly meta-data`
    },
    {
      details: `Maintain code base using Git development workflow.`
    },
  ];

  const workSig = [
    {
      details: `Setup workstations (Windows / Linux)`
    },
    {
      details: `Assist employees help requests and troubleshooting via a ticketing system`
    },
    {
      details: `Utilize Active Directory to reset employee's password, create account, and place into appropriate work groups`
    },
    {
      details: `Develop building plans and emergency plans using Microsoft Visio`
    },
  ];

  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      component="section"
      container
      sx={{
        position: "relative",
        width: matchesSM ? "100%" : "80%",
        margin: matchesXS ? "inherit" : "auto",
        maxWidth: "900px",
        height: matchesSM ? "75vh" : "55vh",
        overflow: "hidden",
      }}
    >
      <Typography variant="h2" textAlign="center" sx={{ mb: 10 }} id="experience">
        Work History
      </Typography>
      <Box
        sx={{
          flexGrow: 1,
          bgcolor: "background.paper",
          display: "flex",
          height: 224,
        }}
      >
        <Tabs
          orientation="vertical"
          variant="scrollable"
          value={value}
          onChange={handleChange}
          aria-label="Vertical tabs example"
          sx={{
            borderRight: 1,
            borderColor: "divider",
            minWidth: matchesSM ? "120px" : "200px",
          }}
        >
          <Tab label="Money Map Press" {...a11yProps(0)} />
          <Tab label="Covalent Activewear" {...a11yProps(1)} />
          <Tab label="Sigma Space" {...a11yProps(2)} />
        </Tabs>
        <TabPanel
          value={value}
          index={0}
          title="Frontend Developer"
          workExperience={workMMP}
        />
        <TabPanel
          value={value}
          index={1}
          title="Web Developer"
          workExperience={workCov}
        />
        <TabPanel
          value={value}
          index={2}
          title="Intern / Jr. System Admin"
          workExperience={workSig}
        />
      </Box>
    </Box>
  );
};

export default SectionJobs;
