import Card from './shared/Card'
import Button from './shared/Button'
import  { useState } from 'react'
// import { isDisabled } from '@testing-library/user-event/dist/utils'

function FeedbackForm () {
    const [text, setText] = useState('')
    const [btnDisabled, setBtnDisabled] = useState(true)
    const [message, setMessage] = useState('')

    const handleTextChange = (e) => {
        if (text === '') {
            setBtnDisabled(true)
            setMessage(true)
        } else if (text !== '' && text.trim().length <= 10) {
            setBtnDisabled(true)
            setMessage('Text must be at least 10 caracteres')
        } else {
            setBtnDisabled(false)
            setMessage(null)
        }
        setText(e.target.value)
    }

    return <Card>
            <form>
                <h2>How would you rate your service with us</h2>
                
                <div className='input-group'>
                    <input onChange={ handleTextChange } value={ text } type="text" />
                    <Button isDisabled={btnDisabled} type='submit' >
                        Send
                    </Button>
                </div>

                {message && <div className="message">{ message }</div>}
            </form>
    </Card>
}

export default FeedbackForm