// 简易版
import React from 'react';
export default class User extends React.PureComponent{
  render(){
    return <div>用户</div>
  }
}






// 请求数据版
// import React from 'react';
// import { Link } from 'react-router-dom';
// import { bindActionCreators } from 'redux';
// import { connect } from 'react-redux';
// import axios from 'axios';
// import * as actions from './redux/actions';
// @connect(
//   state => state.user,
//   dispatch => bindActionCreators(actions, dispatch)
// )
// class User extends React.PureComponent {
//   static loadData = (store) => {
//     // 建议版本走3000 完整走8000
//     const url = 'http://localhost:3000/api/users' // 'http://localhost:8000/api/users'
//     //axios本身就是基于Promise封装的，因此axios.get()返回的就是一个Promise对象
//     return axios.get(url).then((response) => {
//       const { data } = response;
//       const { changeUsers } = bindActionCreators(actions, store.dispatch);
//       changeUsers(data);
//     });
//   }
//   render() {
//     const { users } = this.props;
//     return <div>
//       <table>
//         <thead>
//           <tr>
//             <th>姓名</th>
//             <th>身高</th>
//             <th>生日</th>
//           </tr>
//         </thead>
//         <tbody>
//           {
//             users.map((user) => {
//               const { name, birthday, height } = user;
//               return <tr key={name}>
//                 <td>{name}</td>
//                 <td>{birthday}</td>
//                 <td>{height}</td>
//               </tr>
//             })
//           }
//         </tbody>
//       </table>
//     </div>
//   }
// }

// export default User;

// 完整功能版
// import React from 'react';
// import { Link } from 'react-router-dom';
// import { Helmet } from "react-helmet";
// import withStyles from 'isomorphic-style-loader/withStyles';
// import { bindActionCreators } from 'redux';
// import { connect } from 'react-redux';
// import axios from 'axios';
// import * as actions from './redux/actions';
// import style from './style.css';

// class User extends React.PureComponent {
//   static loadData = (store) => {
//     return axios.get('http://localhost:3000/api/a/users').then((response) => {
//       const { data } = response;
//       const { changeUsers } = bindActionCreators(actions, store.dispatch);
//       changeUsers(data);
//     });
//   }
//   handleClick = (e) => {
//     alert(e.target.innerHTML)
//   }
//   render() {
//     const { users } = this.props;
//     return <div>
//       <Helmet>
//         <title>用户页</title>
//         <meta name="keywords" content="user" />
//         <meta name="description" content={users.map(user => user.name).join('，')} />
//       </Helmet>
//       <div onClick={this.handleClick}>
//         这是用户页
//       </div>
//       <Link to="/login">登陆页</Link>
//       <table className={style.table}>
//         <thead>
//           <tr>
//             <th>姓名</th>
//             <th>身高</th>
//             <th>生日</th>
//           </tr>
//         </thead>
//         <tbody>
//           {
//             users.map((user) => {
//               const { name, birthday, height } = user;
//               return <tr key={name}>
//                 <td>{name}</td>
//                 <td>{birthday}</td>
//                 <td>{height}</td>
//               </tr>
//             })
//           }
//         </tbody>
//       </table>
//     </div>
//   }
// }

// export default connect(
//   state => state.user,
//   dispatch => bindActionCreators(actions, dispatch)
// )(withStyles(style)(User));