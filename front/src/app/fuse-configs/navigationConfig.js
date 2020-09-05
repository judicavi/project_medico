import i18next from 'i18next';
import en from './navigation-i18n/en';
import es from './navigation-i18n/es';

i18next.addResourceBundle('en', 'navigation', en);
i18next.addResourceBundle('es', 'navigation', es);

const navigationConfig = [
	{
		id: 'applications',
		title: 'Applications',
		translate: 'APPLICATIONS',
		type: 'group',
		icon: 'apps',
		children: [
			{
				id: 'doctor_schedule-component',
				title: 'XX',
				translate: 'SCHEDULE',
				type: 'item',
				icon: 'today',
				url: '/doctor_schedule'
			},
			{
				id: 'availability-component',
				title: 'ZZ',
				translate: 'AVAILABILITY',
				type: 'item',
				icon: 'access_alarm',
				url: '/availability'
			},
			{
				id: 'doctor_history-component',
				title: 'YY',
				translate: 'HISTORY',
				type: 'item',
				icon: 'history',
				url: '/doctor_history'
			}
		]
	}
];

export default navigationConfig;
