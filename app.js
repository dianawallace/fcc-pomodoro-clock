const Header = () => <h1>Pomodoro Clock</h1>

const SetTimer = ({ type, value }) => (
    <div>
        <div id={`${type}-label`}>{`${type} Length`}></div>        
        <div>
            <button id={`${type}-decrement`}>&darr;</button>
            <div id={`${type}-length`}>{value}</div>
            <button id={`${type}-increment`}>&uarr;</button>
        </div>
    </div>
)
class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            breakValue: 5,
            sessionValue: 25
        }
    }

    render() {
        return(
            <div>
                <Header/>
                <div>
                    <SetTimer type='Break' value={this.state.breakValue}/>
                    <SetTimer type='Session' value={this.state.sessionValue}/>
                </div>
            </div>

        )
    }
}

ReactDOM.render(<App/>, document.getElementById('root'))