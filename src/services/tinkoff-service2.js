export default class TinkoffService2 {
    
    _apiBase = "https://www.tinkoff.ru/api/"
        
    

    resource = async (url, method, body) => {
        const loadFromApi = () => {
            return fetch(`${this._apiBase}${url}`, { 
                method, 
                headers: new Headers({
                  'Content-Type': 'application/json'
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

    companyInfo = async(companyName) => {
        const res = await this.postResource('trading/symbols/brands', 
        {"brandId": companyName
    })
        console.log(companyName, res)
        return res.payload.brands[0]
        
    }

    getCurrencyInfo = async() => {
        const res = await this.postResource('trading/currency/list',
        {
            "country": "All",
            "currentPage": 0,
            "end": 12,
            "orderType": "Asc",
            "pageSize": 12,
            "sortType": "ByBuyBackDate",
            "start": 0
        })
        return res.payload.values
    }
    getStocks = async() => {
        const res = await this.postResource('trading/stocks/list',
        {
            "country": "All",
            "orderType": "Asc",
            "sortType": "ByName",
            "start": "0"
        })
        return res.payload.values

    }

    getETFs = async() => {
        const res = await this.postResource('trading/etfs/list',
        
        {
            "country": "All",
            "orderType": "Desc",
            "sortType": "ByEarnings",
            "start": "0"
        })
        return res.payload.values
    }

    getBonds = async() => {
        const res = await this.postResource('trading/bonds/list',
        
        {
            "country": "All",
            "orderType": "Desc",
            "sortType": "ByYieldToClient",
            "start": "0"
        })
        return res.payload.values
    }


}    
export  const tinkoffService2 = new TinkoffService2()