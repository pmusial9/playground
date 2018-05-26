import * as React from 'react';

interface State {
    dots: number;
}

export default class Loader extends React.Component<{}, State> {
    public state = {
        dots: 1,
    };
    private timerId: number;

    componentDidMount(): void {
        this.timerId = setInterval(this.intervalHandler, 20);
    }

    componentWillUnmount(): void {
        clearInterval(this.timerId);
    }

    render(): JSX.Element {
        return <div>{this.getDots()}</div>;
    }

    private intervalHandler = (): void => {
        this.setState({
            dots: this.state.dots >= 10 ? 1 : this.state.dots + 1,
        });
    };

    private getDots = (): string => {
        let dots = [];
        let counter = this.state.dots;
        while (counter > 0) {
            dots.push('.');
            counter--;
        }
        return dots.join('');
    };
}
