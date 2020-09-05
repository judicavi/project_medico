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
					<h4>{translation('Titulo encabezado historial')}</h4>
				</div>
			}
			contentToolbar={
				<div className="px-24">
					<h4>{translation('toolbar')}</h4>
				</div>
			}
			content={
				<div className="p-24">
					<h4>content</h4>
					<br />
					<div>{translation('Contenido del historial del doctor')}</div>
				</div>
			}
		/>
	);
}

export default SheduleView;
