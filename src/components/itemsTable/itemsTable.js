import React, { Component } from 'react';
import {Image, Table} from 'react-bootstrap'

/* 
    props:
        items: []
        renderRow?: (item) => <tr></tr>
        renderItemLabel?: (item) => <div></div>
        renderHeader?: () => <tr></tr>
*/

export default class ItemsTable extends Component {
    defaultRenderItemLabel = (item) => {
            const { ticker, logoName = '' } = item.symbol;
            return (
                <div className="d-flex justify-content-between">
                    <div>
                        <Image className="smallLogo" src={`http://static.tinkoff.ru/brands/traiding/${logoName.replace('.png', 'x160.png')}`} roundedCircle />
                        {ticker}
                    </div>
    
                </div>
            );
    }
    
    defaultRenderRow = (item) => {
        const { renderItemLabel = this.defaultRenderItemLabel } = this.props;
        const {ticker, currency, price} = item
        const label = renderItemLabel(item)
        return (
            <tr key={ticker ? ticker : currency}>
                <td>{label}</td>
                <td>{price}</td>
            </tr>
        )
    }

    defaultRenderHeader = () => (
        <tr>
            <td>Ticker</td>
            <td>Price</td>
        </tr>
    )

    renderItems(items) {
        const { renderRow = this.defaultRenderRow } = this.props;
        return items.map((item) => {
            return renderRow(item);
        })
    }

    render() {
        const { renderHeader = this.defaultRenderHeader } = this.props;
        const items = this.renderItems(this.props.items)
        const currencyHeader = renderHeader();
        
        return (
            <>
                <Table striped bordered hover variant="dark">
                    <thead>
                        {currencyHeader}
                    </thead>
                    <tbody>
                        {items}
                    </tbody>
                    
                </Table>
                <br/>
            </>
        )
    }

}