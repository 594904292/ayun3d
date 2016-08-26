调用流程:  

webpack.config.js  
... 
APP_ENTRY_PATHS( main.js )  
..  
1.  
main.js -->   
{  
```
.render(  
<AppContainer  
      store={store}  
      history={history}  
      routes={routes}  
  />  
)
```
}  
1.1  
const store = createStore(initialState, browserHistory)  
{  
```
...  
  store =(...   
          makeRootReducer()(./reducers)  
          {  
              return combineReducers(..router(react-router-redux) ..)  
          }  
	  ...
	 )  
	
...  
```
}  
1.2  
const routes = require('./routes/index').default(store)  
{  
```
	createRoutes(store)  
	{  
	   path: '/',  
	   component: CoreLayout,  
	   indexRoute: Home,  
	   childRoutes: [  
	    CounterRoute(store)(from './Counter')  
	   ]  
	} 
```
}  

2.
AppContainer.js  
{  
```
	static propTypes = {  
	    history: PropTypes.object.isRequired,  
	    routes: PropTypes.object.isRequired,  
	    store: PropTypes.object.isRequired  
	}  
	render () {  
		 <Provider store={store}>  
		 ..  
		 <Router history={history} children={routes} />  
		 ..  
		 </Provider>  
	} 
```
}  

3.Counter view  
{  
```
  <div>  
    Counter:{props.counter}  
    <button  onClick={props.increment}>Increment</button>  
    <button onClick={props.doubleAsync}>Double</button>  
  </div>  
///  
  Counter.propTypes = {  
  counter: React.PropTypes.number.isRequired,  
  doubleAsync: React.PropTypes.func.isRequired,  
  increment: React.PropTypes.func.isRequired  
  } 
```
}  

-->  
3.1 counter router  
 ./routes/Counter/index.js  
{  
```
import { injectReducer } from '../../store/reducers'  
...  
   getComponent (nextState, cb) {  
    //action  
    const Counter = require('./containers/CounterContainer').default  
    //reduce  
    const reducer = require('./modules/counter').default  
    //  
    injectReducer(store, { key: 'counter', reducer }){  
       ...  
       store.asyncReducers[key] = reducer  
       store.replaceReducer(makeRootReducer(store.asyncReducers))  
       ..  
    }  
    cb(null, Counter)  
  ｝  
...  
```
}  
3.2 connect  
./routes/Counter/containers/CounterContainer.js  
{  
```
//actions  
import { increment, doubleAsync } from '../modules/counter'  
//view  
import Counter from 'components/Counter'  
...  

connect(mapStateToProps, mapActionCreators)(Counter)  
```
}  

3.3 action & reducer  
./routes/Counter/modules/counter.js  
```
...  
i.action  
//create action  
export function increment (value = 1) {  
  return {  
    type: COUNTER_INCREMENT,  
    payload: value  
  }  
}  
doubleAsync  
...  
ii.reducer  
...  
export default  counterReducer(state = initialState, action) {  
  const handler = ACTION_HANDLERS[action.type]  
  return handler ? handler(state, action) : state  
}  
...  
```
[README文件语法解读](https://github.com/guodongxiaren/README)  
