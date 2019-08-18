const Header = () => <h1>Pomodoro Clock</h1>

const SetTimer = ({ type, value, handleClick }) => (
    <div className='setTimer'>
        <div id={`${type}-label`}>{`${type === 'session' ? 'Session ' : 'Break '} Length`}</div>        
        <div className='setTimer-controls'>
            <button id={`${type}-decrement`} onClick={() => handleClick(false, `${type}Value`)}>&darr;</button>
            <div id={`${type}-length`}>{value}</div>
            <button id={`${type}-increment`} onClick={() => handleClick(true, `${type}Value`)}>&uarr;</button>
        </div>
    </div>
)

const Timer = ({ mode, time}) => (
    <div className='Timer'>
        <h1 id='timer-label'>{mode === 'session' ? 'Session ' : 'Break '}</h1>
        <h1 id='timer-left'>{time}</h1>
    </div>
)

const Controls = ({ active, handleReset, handlePlayPause }) => (
    <div className='Controls'>
    <button id='start_stop' onClick={handlePlayPause}>{ active ? <span>&#10074;&#10074;</span> : <span>&#9658;</span> }</button>
    <button id='reset' onClick={handleReset}>&#8635;</button>
    </div>
)

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            breakValue: 5,
            sessionValue: 25,
            mode: 'session',
            time: 25 * 60 * 1000,
            active: false,
            touched: false
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.time === 0 && prevState.mode === 'session') {
            this.setState({time: this.state.breakValue * 60 * 1000, mode: 'break'})
        }
        if (prevState.time === 0 && prevState.mode === 'break') {
            this.setState({ time: this.state.sessionValue * 60 * 1000, mode: 'session'})
        }
    }

    handleSetTimers = (inc, type) => {
        if (inc && this.state[type] === 60 && inc) return
        if (!inc && this.state[type] === 1 && !inc) return
        this.setState({ [type]: this.state[type] + (inc ? 1 : -1) })
      }

    handleReset = () => {
        this.setState({ breakValue: 5, 
            sessionValue: 25, 
            time: 25 * 60 * 1000,
            touched: false,
            active: false
        })
        clearInterval(this.pomodoro)
    }

    handlePlayPause = () => {
        if(this.state.active) {
            clearInterval(this.pomodoro)
            this.setState({ active: false })
        }   else {
                if (this.state.touched) {                
                this.pomodoro = setInterval(()  => this.setState({ time: this.state.time - 1000}), 1000)
                this.setState({ active: true })
              } else {
                    this.setState({ time: this.state.sessionValue * 60 * 1000, 
                        touched: true,
                        active: true }, () => this.pomodoro = setInterval(()  => this.setState({ time: this.state.time - 1000}), 1000))         
            }
            }
    }

    render() {
        return(
            <div>
                <Header/>
                <div className='settings'>
                    <SetTimer type='break' value={this.state.breakValue} handleClick={this.handleSetTimers}/>
                    <SetTimer type='session' value={this.state.sessionValue} handleClick={this.handleSetTimers}/>
                </div>
                <Timer mode={this.state.mode} time={moment(this.state.time).format('mm:ss')}/>
                <Controls active={this.state.active} handlePlayPause={this.handlePlayPause} handleReset={this.handleReset}/>
            </div>

        )
    }
}

ReactDOM.render(<App/>, document.getElementById('root'))