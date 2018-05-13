import * as React from 'react';

interface Props {
    onSearch: (e: React.KeyboardEvent<HTMLInputElement>) => any;
}

export default class Searchbox extends React.Component<Props, {}> {
    public render(): JSX.Element {
        const { onSearch } = this.props;

        return <input type="text" onKeyUp={onSearch} />;
    }
}
