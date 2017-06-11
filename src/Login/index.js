import intent from './intent';
import model from './model';
import view from './view';

export function Login (sources) {
  const {action$, eff$} = intent(sources);
  const state$ = model(action$).startWith({});
  const vtree$ = view(state$);

  const sinks = {
    DOM: vtree$,
    HTTP: eff$
  };

  return sinks;
}
