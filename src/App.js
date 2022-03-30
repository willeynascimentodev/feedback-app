import Header from "./components/Header"
import FeedbackList from './components/FeedbackList'
import { useState } from 'react'
import PropTypes from 'prop-types'
import FeedbackData from "./data/FeedbackData"

function App () {
    const [feedback, setFeedback] = useState(FeedbackData)
    return (
        <>
            <Header text="Feedback UI" />
            <div className="container" >
                <FeedbackList feedback={feedback} />
            </div>
        </>
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