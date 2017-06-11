import xs from 'xstream'

export default function intent(sources) {
  const inputLogin$ = sources.DOM.select('#text-login')
    .events('input')
    .map(ev =>  ev.target.value)
    .map(payload => ({type: 'inputLogin', payload}));

  const inputPassword$ = sources.DOM.select('#text-password')
    .events('input')
    .map(ev =>  ev.target.value)
    .map(payload => ({type: 'inputPassword', payload}));

  const clickLogin$ = sources.DOM.select('.btn')
    .events('click')
    .mapTo({
        url: 'https://jsonplaceholder.typicode.com/users/1',
        category: 'users',
        method: 'GET'
    });
  
  const clickLogin1$ = sources.DOM.select('#btn')
    .events('click')
    .mapTo({
        url: 'https://jsonplaceholder.typicode.com/users1/1',
        category: 'users',
        method: 'GET'
    });

  const responseUser$ = sources.HTTP.select('users')
    .map(res$ => res$.replaceError(xs.of))
    .flatten()
    .map(res => res.body ? {type: 'responseUser', payload: res.body} : {type: 'responseUserError', payload: res})

  return {
    action$: xs.merge(inputLogin$, inputPassword$, responseUser$), 
    eff$: xs.merge(clickLogin$, clickLogin1$)};
}
