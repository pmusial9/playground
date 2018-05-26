import * as React from 'react';
import { render } from 'react-dom';
import { fromPromise } from 'rxjs/internal-compatibility';
import { timer } from 'rxjs/internal/observable/timer';
import { Subject } from 'rxjs/internal/Subject';
import { debounce, map, switchMap } from 'rxjs/operators';

import Loader from './component/Loader';
import Searchbox from './component/Searchbox';
import { User } from './model/github';
import { getASingleUser } from './repository/github';

interface State {
    fetching: boolean;
    login: string;
    avatarUrl: string;
}

class App extends React.Component<{}, State> {
    public state = {
        fetching: false,
        login: '',
        avatarUrl: '',
    };

    private searchbox: Subject<string> = new Subject<string>();

    componentDidMount(): void {
        this.searchbox
            .pipe(
                debounce(() => timer(400)),
                switchMap((val: string) => {
                    this.setState({
                        fetching: true,
                    });

                    return fromPromise(getASingleUser(val));
                }),
                map(response => response.json()),
            )
            .subscribe((jsonPromise: Promise<User>) => {
                jsonPromise.then(json =>
                    this.setState({ fetching: false, login: json.login, avatarUrl: json.avatar_url }),
                );
            });
    }

    public onSearchboxKeyUp = (e: React.KeyboardEvent<HTMLInputElement>): void => {
        this.searchbox.next(e.currentTarget.value);
    };

    public render(): JSX.Element {
        const { login, avatarUrl } = this.state;

        return (
            <div>
                <div>{this.state.fetching ? <Loader /> : '.'}</div>
                <Searchbox onKeyUp={this.onSearchboxKeyUp} />
                <h1>{login ? login : 'loading login...'}</h1>
                {avatarUrl && <img src={avatarUrl} />}
            </div>
        );
    }
}

render(<App />, document.getElementById('app'));
