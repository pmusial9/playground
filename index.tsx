import * as React from 'react';
import { render } from 'react-dom';
import { fromPromise } from 'rxjs/internal-compatibility';
import { map } from 'rxjs/operators';
import Searchbox from './components/Searchbox';

interface State {
    login: string;
    avatarUrl: string;
}

interface JsonResponse {
    login: string;
    avatar_url: string;
}

class App extends React.Component<{}, State> {
    public state = {
        login: '',
        avatarUrl: '',
    };

    componentDidMount(): void {
        fromPromise(fetch('https://api.github.com/users/steadfastasrock'))
            .pipe(map(response => response.json()))
            .subscribe((jsonPromise: Promise<JsonResponse>) => {
                jsonPromise.then(json => this.setState({ login: json.login, avatarUrl: json.avatar_url }));
            });
    }

    static onSearch(e: React.KeyboardEvent<HTMLInputElement>): void {
        console.log(e.target);
    }

    public render(): JSX.Element {
        const { login, avatarUrl } = this.state;

        return (
            <div>
                <Searchbox onSearch={App.onSearch} />
                <h1>{login ? login : 'loading login...'}</h1>
                {avatarUrl && <img src={avatarUrl} />}
            </div>
        );
    }
}

render(<App />, document.getElementById('app'));
