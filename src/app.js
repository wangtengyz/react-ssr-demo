// import React from 'react';
// import {createRouter} from '@/router';
// const App = class extends React.PureComponent{
//   handleClick=(e)=>{
//     alert(e.target.innerHTML);
//   }
//   render(){
//     return  <div>{createRouter('client')()}</div>
//   }
// };

// export default App
// redux store 注入
import React from 'react';
import {Provider} from 'react-redux';
import {createRouter} from '@/router';
import getStore from '@/store';
const store = getStore(window.INITIAL_STATE);
class App extends React.PureComponent{
  render(){
    return  <Provider store={store}>{createRouter('client')()}</Provider>
  }
};
export default App;