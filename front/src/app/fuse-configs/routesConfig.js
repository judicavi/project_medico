import React from 'react';
import { Redirect } from 'react-router-dom';
import FuseUtils from '@fuse/utils';
import DoctorAvailabilityConfig from 'app/main/doctorAvailability/DoctorAvailabilityConfig';
import DoctorHistoryConfig from 'app/main/doctorHistory/DoctorHistoryConfig';
import DoctorScheduleConfig from 'app/main/doctorSchedule/DoctorScheduleConfig';
import LoginConfig from 'app/main/login/LoginConfig';

const routeConfigs = [DoctorScheduleConfig, DoctorHistoryConfig, DoctorAvailabilityConfig, LoginConfig];

const routes = [
	...FuseUtils.generateRoutesFromConfigs(routeConfigs),
	{
		path: '/',
		component: () => <Redirect to="/doctor_schedule" />
	}
];

export default routes;
