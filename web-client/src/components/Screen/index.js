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
        return (
            <div className="screens">
                <div className="screen initScreen" display={this.state.screenName === "initScreen" ? "block" : "none"}>
                    sdfsdf
                </div>
                <div className="screen initScreen" display={this.state.screenName === "initScreen" ? "block" : "none"}>
                    gvvv
                </div>
                <div className="screen initScreen" display={this.state.screenName === "initScreen" ? "block" : "none"}>
                    gvvv
                </div>
                <div className="screen initScreen" display={this.state.screenName === "initScreen" ? "block" : "none"}>
                        dsfsfd
                </div>
                <div className="screen initScreen" display={this.state.screenName === "initScreen" ? "block" : "none"}>
                            vsdvsdv
                </div>
                <div className="screen initScreen" display={this.state.screenName === "initScreen" ? "block" : "none"}>
                        vsccxvxcv
                </div>
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