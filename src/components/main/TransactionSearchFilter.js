import React, { PureComponent } from 'react'


import Form from '../../doit-ui/Form'
import Input from '../../doit-ui/Input'
import Button from '../../doit-ui/Button'
import InlineList from '../../doit-ui/InlineList'
import Text from '../../doit-ui/Text'
import Select, {Option} from '../../doit-ui/Select'

class TransactionSearchFilter extends PureComponent{

    render() {
        return (
            <Form>
                <Form.Consumer onSubmit={values => console.log(values)}>
                    {({ onChange, values }) => (
                        <InlineList spacingBetween={2} verticalAlign="bottom">
                            <Text xlarge bold>
                                검색
                            </Text>
                            <Select
                                name="code"
                                label="코인코드"
                                onChange={onChange}
                                value={values['code']}
                            >
                                <Option label="선택해주세요" />
                                <Option label="비트코인(BTX)" value="BTX" />
                                <Option label="이더리움(ETH)" value="ETH" />
                                <Option label="두잇코인(DOIT)" value="DOIT"/>

                            </Select>
                            <Input
                                name="minAmout"
                                label="최소 거래가"
                                onChange={onChange}
                                value={values['minAmount']}
                            />
                             <Input
                                name="maxAmout"
                                label="최대 거래가"
                                onChange={onChange}
                                value={values['maxAmount']}
                            />
                            <Button type="submit" primary>검색</Button>
                        </InlineList>
                    )}

                </Form.Consumer>
            </Form>

        )
    }
}

TransactionSearchFilter.propTypes = {}
export default TransactionSearchFilter