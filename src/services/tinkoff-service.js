export default class TinkoffService {
    
    _apiBase = "https://api-invest.tinkoff.ru/openapi/sandbox/"
        
    

    resource = async (url, method, body) => {
        const loadFromApi = () => {
            return fetch(`${this._apiBase}${url}`, { 
                method, 
                headers: new Headers({
                  'Content-Type': 'application/json',
                  'Authorization': 'Bearer t.4VjtdFG1xOPwrf96iRoDJ86wld3GZoEXIu9045OpPdXRbHXcVHsrUjMbms9yGiNP-QW9rePpUYP_uF9uiZR6Ug', 
                }), 
                body: JSON.stringify(body)
              });
        }
        const res = await loadFromApi();
        // console.log(res)
        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, received ${res.status}`);
        }
        return res.json();
    }
    getResource = (url) => {
        return this.resource(url, 'get')
    }

    postResource = (url, body) => {
        return this.resource(url, 'post', body)
    }

    getStonks = async () => {
        const res = await this.getResource('/market/stocks')
        return res.payload.instruments
    }

    getPortfolio = async () => {
        const res = await this.getResource('portfolio');
        return res.payload.positions
    }

    getOperations = async (figi) => {
        const from = new Date(0).toISOString()
        const to = new Date().toISOString()
        const res = await this.getResource(`operations?from=${from}&to=${to}&figi=${figi}`)
        return res.payload.operations
    }

    getItemByFigi = async (figi) => {
        const res = await this.getResource(`market/search/by-figi?figi=${figi}`)
        return res.payload
    }

    getCurrencyPortfolio = async() => {
        const res = await this.getResource('portfolio/currencies')
        return res.payload.currencies
    }

    getMarketCurrencies = async() => {
        
        const res = await this.getResource('/market/currencies')
        return res.payload.instruments
    }

    getCandles = async (figi) => {
        const from = new Date(new Date().getTime() - 60000).toISOString()
        const to = new Date().toISOString()
        const res = await this.getResource(`market/candles?figi=${figi}&from=${from}&to=${to}&interval=1min`)
        return res.payload.candles
    }

    postLimitOrder = async (figi, selectedOperation, lots, lotPrice) => {
        return await this.postResource(`orders/limit-order?figi=${figi}`, 
        {
            "lots": +lots,
            "operation": selectedOperation,
            "price": +lotPrice
          })
          
    }

    postCurrencyLomitOrder = async (name,  selectedOperation, lots, lotPrice) => {
        return await this.postResource('currencies/balance', 
        {
            "currency": name,
            "balance": ''
        })
    }

}    

export const tinkoffService = new TinkoffService();
