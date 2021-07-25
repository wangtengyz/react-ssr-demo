// commonjs 模块化规范
const express = require('express');
const app = express();
const React = require('react');
const {renderToString} = require('react-dom/server');
const App = class extends React.PureComponent{
  render(){
    return React.createElement("h1",null,"Hello,ssr，服务端渲染（react版）");;
  }
};
// webpack-打包模式
// const App = class extends React.PureComponent{
//   handleClick=(e)=>{
//     alert(e.target.innerHTML);
//   }
//   render(){
//     return <h1 onClick={this.handleClick}>Hello World!</h1>;
//   }
// };
app.get('/',function(req,res){
  // const content = renderToString(<App/>); webpack-打包模式
  const content = renderToString(React.createElement(App));
  console.log(content);
  res.send(content);
});
app.listen(3000);

// ES6 module
// 简单demo
// import express from 'express';
// import React from 'react';
// import {renderToString} from 'react-dom/server';
// import App from  './src/app';
// const app = express();
// // 配置静态资源托管的文件夹 app为express实例 use使用中间件
// app.use(express.static("dist"))
// //这时可将dist文件看成web服务的根目录

// app.get('/',function(req,res){
//   const content = renderToString(<App/>);
//   res.send(`
//         <!doctype html>
//         <html>
//             <title>ssr</title>
//             <body>
//                 <div id="root">${content}</div>
//                 <script src="/client/index.js"></script>
//             </body> 
//         </html>
//     `);
// });
// app.listen(3000);

// 路由demo
// import express from 'express';
// import React from 'react';
// import { renderToString } from 'react-dom/server';
// import { createRouter } from '@/router';
// const app = express();
// app.use(express.static("dist"))
// app.get('/api/users', function (req, res) {
//     res.send([{
//         "name": "JZMB",
//         "birthday": "1984-03-03",
//         "height": "161"
//     }, {
//         "name": "DQWJ",
//         "birthday": "1987-12-24",
//         "height": "158"
//     }, {
//         "name": "XCY",
//         "birthday": "1988-08-04",
//         "height": "158"
//     }, {
//         "name": "AYMLY",
//         "birthday": "1996-02-22",
//         "height": "165"
//     }]);
// });
// app.get('*', function (req, res) {
//     const context = {};
//     const content = renderToString(<div>
//         {createRouter('server')({
//             location: req.url,
//             context
//         })}
//     </div>);
//     /**
//   * ------重点开始
//   */
//     //当Redirect被使用时，context.url将包含重新向的地址
//     if (context.url) {
//         //302
//         res.redirect(context.url);
//     } else {
//         // 404
//         if (context.NOT_FOUND) res.status(404);//判断是否设置状态码为404
//         //200
//         res.send(`
//         <!doctype html>
//         <html>
//             <title>ssr</title>
//             <body>
//                 <div id="root">${content}</div>
//                 <script src="/client/index.js"></script>
//             </body>
//         </html>
//     `);
//     }
//     /**
//     * ------重点结束
//     */
// });
// app.listen(3000);

// 注入redux
// import express from 'express';
// import React from 'react';
// import { renderToString } from 'react-dom/server';
// import { Provider } from 'react-redux';
// import { createRouter, routeConfs } from '@/router';
// import { matchPath } from "react-router-dom";
// import getStore from '@/store';
// const app = express();
// app.use(express.static("dist"))
// app.get('/api/users', function (req, res) {
//     res.send([{
//         "name": "jzmb",
//         "birthday": "1984-03-03",
//         "height": "161"
//     }, {
//         "name": "dqwj",
//         "birthday": "1987-12-24",
//         "height": "158"
//     }, {
//         "name": "xcy",
//         "birthday": "1988-08-04",
//         "height": "158"
//     }, {
//         "name": "aymly",
//         "birthday": "1996-02-22",
//         "height": "165"
//     }]);
// });
// app.get('*', function (req, res) {
//     const context = {};
//     const store = getStore();
//     const promises = [];
//     routeConfs.forEach((route) => {
//         const match = matchPath(req.path, route);
//         if (match && route.loadData) {
//             console.log('match=====loadData111', route, route.loadData);
//             promises.push(route.loadData(store));
//         };
//     });
//     Promise.all(promises).then(() => {
//         const content = renderToString(<Provider store={store}>
//             {createRouter('server')({
//                 location: req.url,
//                 context
//             })}
//         </Provider>);
//         if (context.url) {
//             res.redirect(context.url);
//         } else {
//             res.send(`
//             <html>
//                 <head>
//                     <title>ssr</title>
//                     <script>
//                         window.INITIAL_STATE = ${JSON.stringify(store.getState())}
//                     </script>
//                 </head>
//                 <body>
//                     <div id="root">${content}</div>
//                     <script src="/client/index.js"></script>
//                 </body>
//             </html>
//         `);
//         }
//     });
// });
// app.listen(3000);

// node层加入代理/处理css样式/react-helmet
// import express from 'express';
// import React from 'react';
// import { renderToString } from 'react-dom/server';
// import { Provider } from 'react-redux';
// import { Helmet } from "react-helmet";
// import proxy from 'http-proxy-middleware';
// import StyleContext from 'isomorphic-style-loader/StyleContext';
// import { createRouter, routeConfs } from '@/router';
// import { matchPath } from "react-router-dom";
// import getStore from '@/store';
// const app = express();
// const findProxyTarget = (path) => {
//     console.log(path.split('/'));
//     switch (path.split('/')[1]) {
//         case 'a':
//             return 'http://localhost:8000';
//         case 'b':
//             return 'http://localhost:8001';
//         default:
//             return "http://localhost:8002"
//     }
// }
// app.use(express.static("dist"))
// app.use('/api', function (req, res, next) {
//     proxy({
//         target: findProxyTarget(req.path),
//         pathRewrite: {
//             "^/api/a": "/api",
//             "^/api/b": "/api"
//         },
//         changeOrigin: true
//     })(req, res, next);
// })
// app.get('*', function (req, res) {
//     const context = {};
//     const store = getStore();
//     const promises = [];
//     routeConfs.forEach((route) => {
//         const match = matchPath(req.path, route);
//         if (match && route.loadData) {
//             promises.push(route.loadData(store));
//         };
//     });
//     Promise.all(promises).then(() => {
//         const css = new Set()
//         const insertCss = (...styles) => styles.forEach(style => css.add(style._getCss()))
//         const content = renderToString(
//             <StyleContext.Provider value={{ insertCss }}>
//                 <Provider store={store}>
//                     {createRouter('server')({
//                         location: req.url,
//                         context
//                     })}
//                 </Provider>
//             </StyleContext.Provider>
//         );
//         const helmet = Helmet.renderStatic();
//         if (context.url) {
//             res.redirect(context.url);
//         } else {
//             if (context.NOT_FOUND) res.status(404);
//             res.send(`
//         <!doctype html>
//         <html>
//           <head>
//             ${helmet.title.toString()}
//             ${helmet.meta.toString()}
//             <style>${[...css].join('')}</style>
//             <script>
//               window.INITIAL_STATE = ${JSON.stringify(store.getState())}
//             </script>
//           </head>
//           <body>
//             <div id="root">${content}</div>
//             <script src="/client/index.js"></script>
//           </body>
//         </html>
//       `);
//         }
//     }).catch((err) => {
//         console.log(err);
//         res.status(500);
//         res.send('500');
//     });
// });
// app.listen(3000);