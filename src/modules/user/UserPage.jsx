// NPM and others

import React,{Component} from 'react';
import { Route, withRouter } from 'react-router-dom'

class User extends Component {
  render(){
    return <div>
      <Route path="/profile" />
    </div>
  }
}

export default withRouter(User)

