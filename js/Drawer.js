/* @flow */

import React from "react";
import { DrawerNavigator } from "react-navigation";

import Home from "./components/home/";
import SideBar from "./components/sidebar";
import Login from "./components/login/";
import Register from "./components/register/";
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

/* Page Recruiter */

import LoginRecruiter from "./components/recruiter/login/";
import HomeRecruiter from "./components/recruiter/home/";
import JobsPosting from "./components/recruiter/jobs/";
import JobsPostingAdd from "./components/recruiter/jobs/jobs_add";
import CompanyDetail from "./components/recruiter/profile/companyDetail";
import CompanyVideo from "./components/recruiter/profile/companyVideo";


const Drawer = DrawerNavigator(
  {
    Login: { screen: Login },
    Home: { screen: Home },
    LoginRecruiter: { screen: LoginRecruiter },
    Register: { screen: Register },
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

    HomeRecruiter: { screen: HomeRecruiter },
    JobPosting: { screen: JobsPosting },
    JobsPostingAdd: { screen: JobsPostingAdd },
    CompanyDetail: { screen: CompanyDetail },
    CompanyVideo: { screen: CompanyVideo },
  },
  {
    initialRouteName: "Login",
    contentOptions: {
      activeTintColor: "#fff"
    },
    contentComponent: props => <SideBar {...props} />
  }
);

export default Drawer;
