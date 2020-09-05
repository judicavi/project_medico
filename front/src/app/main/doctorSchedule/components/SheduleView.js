import FusePageSimple from '@fuse/core/FusePageSimple';
import React from 'react';
import { translation } from '../../../util/utilities';

function SheduleView(props) {
	return (
		<FusePageSimple
			classes={{
				root: {}
			}}
			header={
				<div className="p-24">
					<h4>{translation('Título agendamiento')}</h4>
				</div>
			}
			contentToolbar={
				<div className="px-24">
					<h4>Content Toolbar</h4>
				</div>
			}
			content={
				<div className="p-24">
					<h4>Content</h4>
					<br />
					<div>{translation('CONTENT')}</div>
				</div>
			}
		/>
	);
}

export default SheduleView;
