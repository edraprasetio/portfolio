import { Routes, Route } from 'react-router-dom'
import { Home } from './Home'
import { Practice } from './Practice'

const Main = () => (
    <Routes>
        <Route
            path='/'
            element={
                <>
                    <Home />
                </>
            }
        ></Route>
        <Route
            path='/home'
            element={
                <>
                    <Practice />
                </>
            }
        ></Route>
    </Routes>
)

export default Main
