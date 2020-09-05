import FusePageSimple from '@fuse/core/FusePageSimple';
import React from 'react';
import { translation } from '../../../util/utilities';

function AvailabilityView(props) {
	return (
		<FusePageSimple
			classes={{
				root: {}
			}}
			header={
				<div className="p-24">
					<h4>{translation('Titulo para vista de disponibilidad')}</h4>
				</div>
			}
			contentToolbar={
				<div className="px-24">
					<h4>{translation('Contenido de la barra de herramientas')}</h4>
				</div>
			}
			content={
				<div className="p-24">
					<h4>Content</h4>
					<br />
					<div>{translation('Contenido de la vista principal')}</div>
				</div>
			}
		/>
	);
}

export default AvailabilityView;
