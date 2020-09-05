import HistoryView from './components/HistoryView';

const DoctorScheduleConfig = {
	settings: {
		layout: {
			config: {}
		}
	},
	routes: [
		{
			path: '/doctor_history',
			component: HistoryView
		}
	]
};

export default DoctorScheduleConfig;
