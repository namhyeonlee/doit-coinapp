import React, { PureComponent } from 'react'
import PropTypes from 'prop-types';

import Card from '../../doit-ui/Card'
import Heading from '../../doit-ui/Heading'
import Button from '../../doit-ui/Button'
import InlineList from '../../doit-ui/InlineList'
import Text from '../../doit-ui/Text'


class CoinDashlet extends PureComponent{
    render() {
        const { name, priceLabel } = this.props
        return (
            <Card vertical={4} horizontal={4}>
                <Heading level={4}>
                    {name}
                </Heading>
                <Text> {priceLabel} </Text>

                <InlineList spacingBetween={1}>
                    <Button primary small>매도</Button>
                    <Button small>매수</Button>
                </InlineList>
            </Card>
            
        )
    }
}

CoinDashlet.propTypes = {
    name: PropTypes.string,
    priceLabel: PropTypes.string

}

export default CoinDashlet