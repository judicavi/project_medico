import AvailabilityView from './components/AvailabilityView';

const DoctorScheduleConfig = {
	settings: {
		layout: {
			config: {}
		}
	},
	routes: [
		{
			path: '/availability',
			component: AvailabilityView
		}
	]
};

export default DoctorScheduleConfig;
