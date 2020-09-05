import mock from '../mock';

const calendarDB = {
	events: [
		{
			id: 0,
			title: 'All Day Event very long title',
			allDay: true,
			start: new Date(2018, 3, 0),
			end: new Date(2018, 3, 1)
		},
		{
			id: 1,
			title: 'Long Event',
			allDay: false,
			start: new Date(2018, 3, 7),
			end: new Date(2018, 3, 10)
		}
	]
};

mock.onGet('/api/doctor_shedule/shedule').reply(config => {
	return [200, calendarDB.events];
});
