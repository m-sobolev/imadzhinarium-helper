import React from 'react'
import io from 'socket.io-client'
import "./index.css"
class Screen extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            screenName: "initScreen"
        }


        this.socket = io('http://localhost:3000')
        this.setNewMessage = this.setNewMessage.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentDidMount() {
        this.socket.on('chat', message => {
            // message.key = JSON.stringify(message)
            // this.setState((prevState) => {
            //     let messages = prevState.messages
            //     messages.push(message)
            //     {
            //         messages: messages
            //     }
            // })
        })
        this.socket.on('whatYouWant', (name) => {
            console.log("whatYouWant",name)
            this.socket.on('whatYouWant', (name) => {
                console.log("whatYouWant",name)
            })
        })
    }

    render() {
        const initScreen =  this.state.screenName === "initScreen" && (
                <div className="screen initScreen">
                    <div>
                        <button className="btn btn-success btn-lg " onClick={this.handler}>Новая игра</button>
                    </div>
                    <div>
                        <input type="text" className="form-control" placeholder="Text input"></input>
                        <button className="btn btn-primary btn-lg " onClick={this.handler}>Присоединиться</button>
                    </div>

                </div>
            ),
            waitStart = this.state.screenName === "waitStart" && (
                <div className="screen waitScreen">
                    gvvv
                </div>
            ),
            canStart = this.state.screenName === "canStart" && (
                <div className="screen canStartScreen">
                    gvvv
                </div>
            ),
            canMove = this.state.screenName === "canMove" && (
                <div className="screen canMoveScreen">
                    gvvv
                </div>
            ),
            waitMove = this.state.screenName === "waitMove" && (
                <div className="screen waitMoveScreen">
                    gvvv
                </div>
            ),
            selectCard = this.state.screenName === "selectCard" && (
                <div className="screen selectCardScreen">
                    gvvv
                </div>
            ),
            showProgress = this.state.screenName === "showProgress" && (
                <div className="screen progressScreen">
                    gvvv
                </div>
            )
        return (
            <div className="screens">
                {initScreen}
                {waitStart}
                {canStart}
                {canMove}
                {waitMove}
                {selectCard}
                {showProgress}

            </div>
        )
    }

    componentWillUnmount() {
        this.socket.close()
    }

    setNewMessage(event) {
        this.setState({
            newMessage: event.target.value
        })
    }

    handleSubmit(event) {
        event.preventDefault()
        this.socket.emit('chat', {
            name: this.props.name,
            message: this.state.newMessage,
            timestamp: new Date().toISOString()
        })
        this.setState({
            newMessage: ''
        })
    }
}

export default Screen