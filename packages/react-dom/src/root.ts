// ReactDOM.createRoot(root).render(<App />)

import { createContainer, updateContainer } from 'react-reconciler/src/fiberReconciler';
import { ReactElementType } from 'shared/ReactTypes';
import { Container } from './hostConfig';

export function createRoot(contaner: Container) {
	const root = createContainer(contaner);

	return {
		render(element: ReactElementType) {
			updateContainer(element, root);
		}
	};
}
