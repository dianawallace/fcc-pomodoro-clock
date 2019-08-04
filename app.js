const Header = () => <h1>Pomodoro Clock</h1>

const SetTimer = ({ type, value }) => (
    <div className='setTimer'>
        <div id={`${type}-label`}>{`${type} Length`}></div>        
        <div className='setTimer-controls'>
            <button id={`${type}-decrement`}>&darr;</button>
            <div id={`${type}-length`}>{value}</div>
            <button id={`${type}-increment`}>&uarr;</button>
        </div>
    </div>
)

const Timer = ({ mode, time}) => (
    <div className='Timer'>
        <h1 id='timer-label'>{mode === 'session' ? 'Session ' : 'Break '}</h1>
        <h1 id='timer-left'>{time}</h1>
    </div>
)


class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            breakValue: 5,
            sessionValue: 25,
            mode: 'session',
            time: 25
        }
    }

    render() {
        return(
            <div>
                <Header/>
                <div className='settings'>
                    <SetTimer type='Break' value={this.state.breakValue}/>
                    <SetTimer type='Session' value={this.state.sessionValue}/>
                </div>
                <Timer Mode={this.state.mode} time={moment(this.state.time).format('mm:ss')}/>
            </div>

        )
    }
}

ReactDOM.render(<App/>, document.getElementById('root'))