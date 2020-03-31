import React from 'react';

import MenuHeaderValues from 'common/menuHeaderValues';
import GridView from 'components/GridView/GridView';
import ListView from 'components/ListView/ListView';

class ComingSoon extends React.Component {

    render() {

        const { films, view } = this.props;

        if (view === MenuHeaderValues.GRID) {
            return (
                <GridView
                    films={films} />
            );
        } else if (view === MenuHeaderValues.LIST) {
            return (
                <ListView
                    films={films} />
            )
        }
    }
}

export default ComingSoon;