import SheduleView from './components/SheduleView';

const DoctorScheduleConfig = {
	settings: {
		layout: {
			config: {}
		}
	},
	routes: [
		{
			path: '/doctor_schedule',
			component: SheduleView
		}
	]
};

export default DoctorScheduleConfig;
