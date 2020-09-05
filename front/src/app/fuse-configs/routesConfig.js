import React from 'react';
import { Redirect } from 'react-router-dom';
import FuseUtils from '@fuse/utils';
import DoctorAvailabilityConfig from 'app/main/doctorAvailability/DoctorAvailabilityConfig';
import DoctorHistoryConfig from 'app/main/doctorHistory/DoctorHistoryConfig';
import DoctorScheduleConfig from 'app/main/doctorSchedule/DoctorScheduleConfig';

const routeConfigs = [DoctorScheduleConfig, DoctorHistoryConfig, DoctorAvailabilityConfig];

const routes = [
	...FuseUtils.generateRoutesFromConfigs(routeConfigs),
	{
		path: '/',
		component: () => <Redirect to="/doctor_schedule" />
	}
];

export default routes;
