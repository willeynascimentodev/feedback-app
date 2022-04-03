import FeedbackData from "./data/FeedbackData"
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import PropTypes from 'prop-types'
import Header from "./components/Header"
import FeedbackForm from "./components/FeedbackForm"
import FeedbackStats from "./components/FeedbackStats"
import FeedbackList from './components/FeedbackList'
import AboutPage from './pages/AboutPage'
import AboutIconLink from './components/AboutIconLink'
import { FeedbackProvider } from './context/FeedBackContext'

function App () {
 
    return (
        <FeedbackProvider>
        <Router>
            <Header text="Feedback UI" />
            <div className="container" >
                <Routes>
                    
                    <Route exact path='/' element={
                        <>
                            <FeedbackForm />
                            <FeedbackStats />
                            <FeedbackList/>
                            <AboutIconLink />
                        </>
                    }>
                        
                    </Route>
                    
                    <Route path='/about' element={ <AboutPage/> }/>
                    

                </Routes>
            </div>
        </Router>
        </FeedbackProvider>
    )
}
Header.defaultProps = {
    text: 'Feedback UI',
    bgColor: 'rgba(0,0,0,0.4)',
    color: '#ff6a95'

}
Header.propTypes = {
    text: PropTypes.string,
    bgColor: PropTypes.string,
    color: PropTypes.string
}

export default App