const Header = () => <h1>Pomodoro Clock</h1>

class App extends React.Component {
    render() {
        return(
            <div>
                <Header/>
            </div>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('root'))