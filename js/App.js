/* @flow */

import React from "react";

import { Platform } from "react-native";
import { Root } from "native-base";
import { StackNavigator, TabNavigator } from "react-navigation";

import Drawer from "./Drawer";
import DrawerRecruiter from "./DrawerRecruiter";
import Login from "./components/login/";
import Register from "./components/register/";
import Home from "./components/home/";
import Education from "./components/register/education";
import EducationAdd from "./components/register/educationAdd";
import WorkExperience from "./components/register/workExperience";
import WorkExperienceAdd from "./components/register/workExperienceAdd";
import MyProfile from "./components/profile/";
import ChangePassword from "./components/profile/changePassword";
import EducationProfile from "./components/profile/education";
import PersonalInfo from "./components/profile/personalInfo";
import SelfPromotingVideo from "./components/profile/selfPromotingVideo";
import WorkExperienceProfile from "./components/profile/workExperience";
import JobDetail from "./components/jobDetail/";
import Notification from "./components/home/notification";
import JobSearch from "./components/home/jobSearch";
import ForgotPassword from "./components/forgotPassword/";

import History from "./components/myhistory/";
import Interview from "./components/interview/";
import InterviewStep1 from "./components/interview/step1";
import InterviewStep2 from "./components/interview/step2";


/* Page Recruiter */

import LoginRecruiter from "./components/recruiter/login/";
import HomeRecruiter from "./components/recruiter/home/";
import JobsPosting from "./components/recruiter/jobs/";
import JobsPostingAdd from "./components/recruiter/jobs/jobs_add";
import CompanyProfile from "./components/recruiter/profile/";
import CompanyDetail from "./components/recruiter/profile/companyDetail";
import CompanyVideo from "./components/recruiter/profile/companyVideo";
import LocationA from "./components/recruiter/profile/locationA";
import Schedule from "./components/recruiter/schedule/index";
import ScheduleI from "./components/recruiter/schedule/indexI";
import ScheduleS from "./components/recruiter/schedule/indexS";
import Candidate from "./components/recruiter/candidate/";
import CandidateI from "./components/recruiter/candidate/indexI";
import CandidateS from "./components/recruiter/candidate/indexS";

const AppNavigator = StackNavigator(
    {
        Drawer: { screen: Drawer },
        Login: { screen: Login },
        LoginRecruiter: { screen: LoginRecruiter },
        Register: { screen: Register },
        Home: { screen: Home },
        Education: { screen: Education },
        EducationAdd: { screen: EducationAdd },
        WorkExperience: { screen: WorkExperience },
        WorkExperienceAdd: { screen: WorkExperienceAdd },
        MyProfile: { screen: MyProfile },
        JobDetail: { screen: JobDetail },
        Notification: { screen: Notification },
        JobSearch: { screen: JobSearch },
        ForgotPassword: { screen: ForgotPassword },
        ChangePassword: { screen: ChangePassword },
        EducationProfile: { screen: EducationProfile },
        PersonalInfo: { screen: PersonalInfo },
        SelfPromotingVideo: { screen: SelfPromotingVideo },
        WorkExperienceProfile: { screen: WorkExperienceProfile },
        History: { screen: History },
        Interview: { screen: Interview },
        InterviewStep1: { screen: InterviewStep1 },
        InterviewStep2: { screen: InterviewStep2 },

        HomeRecruiter: { screen: HomeRecruiter },
        JobPosting: { screen: JobsPosting },
        JobsPostingAdd: { screen: JobsPostingAdd },
        CompanyProfile: { screen: CompanyProfile },
        CompanyDetail: { screen: CompanyDetail },
        LocationA: { screen: LocationA },
        CompanyVideo: { screen: CompanyVideo },
        Schedule  : { screen: Schedule },
        ScheduleI  : { screen: ScheduleI },
        ScheduleS  : { screen: ScheduleS },
        Candidate : { screen: Candidate },
        CandidateI: { screen: CandidateI },
        CandidateS: { screen: CandidateS },
    },
    {
        initialRouteName: "Drawer",
        headerMode: "none",
    }
);

export default () =>
    <Root>
        <AppNavigator />
    </Root>;
