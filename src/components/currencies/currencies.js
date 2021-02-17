import React, { Component } from 'react'
import { Image, Table } from 'react-bootstrap'
import ItemsTable from '../itemsTable/itemsTable';

class Currencies extends Component {

    // renderItem=({ symbol }) => {
    //     const { ticker, logoName = '' } = symbol;
    //     return (
    //         <div className="d-flex justify-content-between">
    //             <div>
    //                 <Image className="smallLogo" src={`http://static.tinkoff.ru/brands/traiding/${logoName.replace('.png', 'x160.png')}`} roundedCircle />
                    
    //                 {ticker}
    //             </div>

    //         </div>
    //     );
    // }

    // renderItems(arr) {
    //     return arr.map((item) => {
    //         const {ticker, currency, price} = item
    //         const label = this.renderItem(item)
    //         return (
                
    //             <tr key={ticker ? ticker : currency}>
    //                 <td>{label}</td>
    //                 <td>{price}</td>
    //             </tr>
    //         )
    //     })
    // }

    // renderHeader = () => {
    //     return (
    //         <tr>
    //             <td>Ticker</td>
    //             <td>Price</td>
    //         </tr>
    //     );
    // }

    render() {
        const { 
            currencies,
         } = this.props
         return (
             <ItemsTable
                items={currencies}
            />
         );
        // const items = this.renderItems(currencies)
        
        // return (
        //     <>
        //         <Table striped bordered hover variant="dark">
        //             <thead>
        //                 {currencyHeader}
        //             </thead>
        //             <tbody>
        //                 {items}
        //             </tbody>
                    
        //         </Table>
        //         <br/>
        //     </>
  
        // )

    }


}

export default Currencies;