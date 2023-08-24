import {
  Container,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Heading,
  TabProps,
  Box,
  Grid,
} from "@chakra-ui/react";
import React, { useState , useEffect } from "react";
import InterviewSettingsForm from "./InterviewSettingsForm";
import JobDetailsForm from "./JobDetailsForm";
import RequisitionForm from "./RequisitionDetailsForm";
import DisplayCard from "./PreviewCard";
import { PageNumbers } from "../../interface/home";
import { IRequisitionDetails , IJobDetails , IInterViewSettings} from "../../interface/forms";


const CustomTab: React.FC<TabProps> = ({ children, ...props }) => {
  return (
    <Tab p="1rem" fontFamily="Poppins" {...props}>
      {children}
    </Tab>
  );
};

const HomeLayout = () => {
  const [page, setPage] = useState<PageNumbers>(0);
  const [requisition, setRequisition] = useState<IRequisitionDetails>();
  const [jobDetails, setJobDetails] = useState<IJobDetails>();
  const [interviewSettings, setInterviewSettings] = useState<IInterViewSettings>();

  const requisitionDetails = (data : IRequisitionDetails) =>{
    setRequisition(data)
  }

  const jobDetailsInfo = (data : IJobDetails) =>{
    setJobDetails(data)
  }

  const interviewSettinsInfo = (data : IInterViewSettings) =>{
    setInterviewSettings(data)
  }

  const handlePage = (pageNumber: PageNumbers) => {
    setPage(pageNumber);
  };

  return (
    <Box w="100%">
      <Container maxW="1200px">
        <Heading fontFamily="Poppins" fontSize="1.5rem" my="2rem">
          Create Candidate Requisition
        </Heading>
        <Tabs index={page} isLazy lazyBehavior="keepMounted">
          <TabList>
            <CustomTab>Requistion Details</CustomTab>
            <CustomTab>Job Details</CustomTab>
            <CustomTab>Interview Settings</CustomTab>
          </TabList>
          <Grid display="grid" gridTemplateColumns="3fr 2fr" gap="24px">
            <TabPanels>
              <TabPanel>
                <RequisitionForm handleTab={handlePage} setDataHere = {requisitionDetails} />
              </TabPanel>
              <TabPanel>
                <JobDetailsForm handleTab={handlePage} setDataHere2 = {jobDetailsInfo} />
              </TabPanel>
              <TabPanel>
                <InterviewSettingsForm handleTab={handlePage}  setData = {interviewSettinsInfo} />
              </TabPanel>
            </TabPanels>
            <DisplayCard requisitionDetails={requisition} jobDetails={jobDetails} interviewSettings = {interviewSettings} />
          </Grid>
        </Tabs>
      </Container>
    </Box>
  );
};

export default HomeLayout;
