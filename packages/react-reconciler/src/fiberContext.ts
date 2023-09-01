import { ReactContext } from 'shared/ReactTypes';

let prevContextValue: any = null;
const prevContextValueStack: any[] = [];

function pushProvider<T>(context: ReactContext<T>, newValue: T) {
	prevContextValueStack.push(context);
	prevContextValue = context._currentValue;
	context._currentValue = newValue;
}

function popProvider<T>(context: ReactContext<T>) {
	context._currentValue = prevContextValue;

	prevContextValue = prevContextValueStack.pop();
}
