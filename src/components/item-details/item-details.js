import React, { Component } from 'react'
import { Tabs, Tab, Row, Col, FormGroup, Form, Button, Image } from 'react-bootstrap';
import { finnhubService } from '../../services/finnhub-service';
import {tinkoffService} from '../../services/tinkoff-service'
import {tinkoffService2} from '../../services/tinkoff-service2'
import './item-details.css'

export default class ItemDetails extends Component {

    state = {
        operations: [],
        selectedOperation: 'Buy',
        stockProfile: {},
        lots: 0,
        lotPrice: 0,
        stockPrice: 0
    
    }

    componentDidMount() {
     
        this.updateDetails()
        this.updateStockProfile()
        this.interval = setInterval(this.updatePrice, 2000)
    }

    componentDidUpdate(prevProps) {
        if (this.props.item !== prevProps.item) {
            this.updateDetails()
            this.updatePrice()
            this.updateStockProfile()
        }
    }

    componentWillUnmount() {
        clearInterval(this.interval)
    }

    async updateDetails() {
        const {item} = this.props;
        const {figi} = item;
        const operations = await tinkoffService.getOperations(figi);
        this.setState({
            operations
        })

    }

    updatePrice = async() => {
        const {item} = this.props;
        const {ticker} = item;
        const stockPrice = await finnhubService.getPrice(ticker);
        this.setState({
            stockPrice
        })
    }

    updateStockProfile = async() => {
        const {item} = this.props;
        const {brand} = item;
        const stockProfile = await tinkoffService2.companyInfo(brand);
        this.setState({
            stockProfile
        })
        console.log({stockProfile})
    }


    renderOperations(operations) {
       return operations.map((operation) => {
           const {id, date, operationType, price, quantity, currency} = operation
           const fDate = new Date(date).toLocaleDateString()
           return (
               <li className="list-group-item" key={id}>
                  {fDate} : {operationType} {quantity} stock(s) for {price}{currency} 
               </li>
           ) 
        })
    }

    onChangeOperation = (event) => {
        this.setState({
            selectedOperation: event.target.value
        })
    }

    onLotsChange = (event) => {
        this.setState({
            lots: event.target.value
        })
    }

    onPriceChange = (event) => {
        this.setState({
            lotPrice: event.target.value
        })
    }

    handdleClick = async (event) => {
        const {submitOrder, item} = this.props
        event.preventDefault();
        const{selectedOperation, lots, lotPrice} = this.state
        const{figi, isCurrency, name} = item
        await submitOrder(figi, isCurrency, name, selectedOperation, lots, lotPrice)
        await this.updateDetails();
        this.setState ({
            selectedOperation: 'Buy',
            lots: 0,
            lotPrice: 0
        })
    }
    
    render() {
        const {ticker, name, stockCurrency, isin, isCurrency, isValidCurrency, price} = this.props.item
        const {operations, selectedOperation, lots, lotPrice, stockPrice, stockProfile} = this.state
        const operationStockList = this.renderOperations(operations)
    
        return (
            
            <div className="itemDetails">
                <h3>{isCurrency ? ticker: `${ticker} - ${name}`}</h3>
                <h4>{isCurrency ? price : `${stockPrice} ${stockCurrency}`}</h4>
                <Tabs>
                    
                    <Tab eventKey="order" title="Order">
                        <Form>
                            <h5>Limit order for {ticker}</h5>
                            <FormGroup>
                                <Row>
                                    <Col>
                                        <Form.Label>Operation</Form.Label>
                                        <Form.Control as="select" placeholder="Operation" value={selectedOperation} onChange={this.onChangeOperation}>
                                            <option value="Buy">Buy</option>
                                            <option value="Sell">Sell</option>
                                        </Form.Control>
                                    </Col>
                                    <Col>
                                        <Form.Label>Lots</Form.Label>
                                        <Form.Control type="select" placeholder="Lots" value={lots} onChange={this.onLotsChange}/>
                                    </Col>
                                    <Col>
                                        <Form.Label>Price</Form.Label>
                                        <div className="d-flex">
                                        <Form.Control type="select" placeholder="Price" value={lotPrice} onChange={this.onPriceChange}/>
                                        <span className="currency">{stockCurrency}</span>
                                        </div>
                                        
                                    </Col>
                                </Row>
                            </FormGroup>
                            <Button variant="primary" type="submit" onClick={this.handdleClick}>
                                Submit
                            </Button>
                        </Form>
                    </Tab>
                    <Tab eventKey="operations" title="Operations" disable={!isValidCurrency}>
                        <ul className="item-list list-group">
                            {operationStockList}
                        </ul>
                    </Tab>
                    <Tab eventKey="profile" title="Profile" disable={isCurrency}>
                    <Form>
                            <h5>{stockProfile.name}</h5>
                            <FormGroup>
                                <Row>
                                   
                                    <Col className="d-flex">
                                        <Image className="logo" src={`http://static.tinkoff.ru/brands/traiding/${isin}x160.png`} rounded />
                                        <div className="info">
                                        <div>{stockProfile.brandInfo}</div>
                                        <div>Country: {stockProfile.country}</div>
                                        <div>Sector: {stockProfile.sector}</div>
                                   
                                        
                                        </div>   
                                    </Col>
                                    
                                </Row>
                            </FormGroup>
                        
                        </Form>
                    </Tab>
                </Tabs>
                <iframe 
                width="100%"
                frameborder="0" 
                height="400" 
                src={`https://widget.finnhub.io/widgets/stocks/chart?symbol=${ticker}&amp;watermarkColor=%23222222&amp;backgroundColor=%23222222&amp;textColor=white`}
                ></iframe>

            </div>

        )
    }
}
