const Header = () => <h1>Pomodoro Clock</h1>

const SetTimer = ({ type }) => (
    <div>
        <div id={`${type}-label`}>{`${type} Length`}></div>        
        <div>
            <button id={`${type}-decrement`}>&darr;</button>
            <div></div>
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
                    <SetTimer type='Break' />
                    <SetTimer type='Session' />
                </div>
            </div>

        )
    }
}

ReactDOM.render(<App/>, document.getElementById('root'))