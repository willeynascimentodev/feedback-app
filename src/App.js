import FeedbackData from "./data/FeedbackData"
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import { useState } from 'react'
import PropTypes from 'prop-types'
import Header from "./components/Header"
import FeedbackForm from "./components/FeedbackForm"
import FeedbackStats from "./components/FeedbackStats"
import FeedbackList from './components/FeedbackList'
import AboutPage from './pages/AboutPage'
import { v4 as uuidv4 } from 'uuid'
import AboutIconLink from './components/AboutIconLink'

function App () {
    const [feedback, setFeedback] = useState(FeedbackData)
    
    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4()
        setFeedback([newFeedback, ...feedback])
    }

    const deleteFeedback = (id) => {
        if (window.confirm('Are you sure you want to delete?')) {
            setFeedback(feedback.filter((item) => item.id !== id))
        }
    }

    return (
        <Router>
            <Header text="Feedback UI" />
            <div className="container" >
                <Routes>
                    
                    <Route exact path='/' element={
                        <>
                            <FeedbackForm handleAdd={ addFeedback }  />
                            <FeedbackStats feedback={ feedback }/>
                            <FeedbackList feedback={ feedback } handleDelete={ deleteFeedback }/>
                            <AboutIconLink />
                        </>
                    }>
                        
                    </Route>
                    
                    <Route path='/about' element={ <AboutPage/> }/>
                    

                </Routes>
            </div>
        </Router>
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