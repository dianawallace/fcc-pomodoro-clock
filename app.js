const Header = () => <h1>Pomodoro Clock</h1>

const SetTimer = ({ type }) => (
    <div>
        <div id={`${type}-label`}>{`${type} Length`}></div>        
        <div>
            <button id={`${type}-decrement`}></button>
            <div></div>
            <button id={`${type}-increment`}></button>
        </div>
    </div>
)
class App extends React.Component {
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