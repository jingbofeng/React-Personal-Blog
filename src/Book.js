import React, {Component, Fragment} from 'react';
import {GlobalStyle} from './style.js';
import {GlobalStyleTwo} from './statics/iconfont/iconfont.js';
import Header from './common/Header/index.js';
import store from './store/index.js';
import {Provider} from 'react-redux';
import {BrowserRouter, Route} from 'react-router-dom';
import Login from './pages/login/index.js';
import Write from './pages/write';
import Home from './pages/home/index.js';
import Detail from './pages/detail/index.js';


class Book extends Component {
    
    render (){
      return (
      <Fragment>	
      	  <GlobalStyle />
      	  <GlobalStyleTwo />
      	<Provider store={store}>

          <BrowserRouter>
            <div>
      	      <Header />
              <Route path='/' exact component={Home}></Route>
              <Route path='/detail' exact component={Detail}></Route>
              <Route path='/login' exact component={Login}></Route>
              <Route path='/write' exact component={Write}></Route>
            </div>
          </BrowserRouter> 

      	</Provider>
      </Fragment>
      );
    }
}

export default Book;
