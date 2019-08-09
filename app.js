const Header = () => <h1>Pomodoro Clock</h1>

const SetTimer = ({ type, value, handleClick }) => (
    <div className='setTimer'>
        <div id={`${type}-label`}>{`${type} Length`}></div>        
        <div className='setTimer-controls'>
            <button id={`${type}-decrement`} onClick={() => handleClick(false, `${type}Value`)}>&darr;</button>
            <div id={`${type}-length`}>{value}</div>
            <button id={`${type}-increment`} onClick={() => handleClick(false, `${type}Value`)}>&uarr;</button>
        </div>
    </div>
)

const Timer = ({ mode, time}) => (
    <div className='Timer'>
        <h1 id='timer-label'>{mode === 'session' ? 'Session ' : 'Break '}</h1>
        <h1 id='timer-left'>{time}</h1>
    </div>
)

const Controls = ({ active}) => (
    <div className='Controls'>
    <button id='start_stop'>{ active ? <span>&#10074;&#10074;</span> : <span>&#9658;</span> }</button>
    <button id='reset'>&#8635;</button>
    </div>
)

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            breakValue: 5,
            sessionValue: 25,
            mode: 'session',
            time: 25,
            active: false
        }
    }

    handleSetTimers = (inc, type) => {
        if (inc && this.state[type] === 60 && inc) return
        if (!inc && this.state[type] === 1 && !inc) return
        this.setState({ [type]: this.state[type] + (inc ? 1 : -1) })
      }

    render() {
        return(
            <div>
                <Header/>
                <div className='settings'>
                    <SetTimer type='Break' value={this.state.breakValue} handleClick={this.handleSetTimers}/>
                    <SetTimer type='Session' value={this.state.sessionValue} handleClick={this.handleSetTimers}/>
                </div>
                <Timer Mode={this.state.mode} time={moment(this.state.time).format('mm:ss')}/>
                <Controls active={this.state.active} />
            </div>

        )
    }
}

ReactDOM.render(<App/>, document.getElementById('root'))