import * as React from 'react';
import { container } from './styles.css';

interface Props {
    onKeyUp: (e: React.KeyboardEvent<HTMLInputElement>) => any;
}

export default class Searchbox extends React.Component<Props, {}> {
    public render(): JSX.Element {
        const { onKeyUp } = this.props;

        return <input className={container} type="text" onKeyUp={onKeyUp} />;
    }
}
