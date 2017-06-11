import xs from 'xstream'

function makeReducer$(action$){
  const loginInputReducer$ = action$
    .filter(action => action.type === 'inputLogin')
    .map(action => data => ({...data, login: action.payload}));

  const passwordInputReducer$ = action$
    .filter(action => action.type === 'inputPassword')
    .map(action => data => ({...data, password: action.payload}));

  const responseUserReducer$ = action$
    .filter(action => action.type === 'responseUser')
    .map(action => data => ({...data, key: action.payload.name}));

  const responseUserErrorReducer$ = action$
    .filter(action => action.type === 'responseUserError')
    .map(action => data => ({...data, err: action.payload}));

  return xs.merge(
    loginInputReducer$,
    passwordInputReducer$,
    responseUserReducer$,
    responseUserErrorReducer$
  );
}

export default function model(action$) {
  const reducer$ = makeReducer$(action$);

  return reducer$.fold((data, reducer) => reducer(data), {});
}
