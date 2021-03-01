import { BrowserRouter, Route } from 'react-router-dom'
import Landing from './Landing'
import PageProfile from './page-profile'

function Routes(){
    return(
        <BrowserRouter>
            <Route exact path='/' component={Landing}/>
            <Route exact path='/profile' component={PageProfile}/>
        </BrowserRouter>
    )
}

export default Routes