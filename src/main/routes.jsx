import React from 'react'
import { HashRouter, Route, Redirect } from 'react-router-dom';

import Tasks from '../tasks/tasks'

export default props => (
    <HashRouter>
        <Route path='/tasks' component={Tasks} />
        <Route path='*' render={() => <Redirect from='*' to='/tasks' />} />        
    </HashRouter>
)