export default class FinnhubService {
    
    _apiBase = "https://finnhub.io/api/v1/"
        
    

    resource = async (url, method, body) => {
        const loadFromApi = () => {
            return fetch(`${this._apiBase}${url}&token=sandbox_c00nb9748v6viomea87g`, { 
                method, 

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

    getPrice = async(ticker) => {
        const res = await this.getResource(`quote?symbol=${ticker}`)
        return res.c
    }

    getStockInfo = (ticker) => {
        return this.getResource(`stock/profile2?symbol=${ticker}`)
    }

}        

export const finnhubService = new FinnhubService();