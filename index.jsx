import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    componentDidMount () {
        fetch('https://api.github.com/users/steadfastasrock')
            .then((response) => {
                console.info('[INUI-DBG]');
                console.info(response);
            });
    }
    render () {
        return <div>TODO: INSTALL RXJS AND FETCH USING RXJS</div>;
    }
}

ReactDOM.render(<App/>, document.getElementById('app'));