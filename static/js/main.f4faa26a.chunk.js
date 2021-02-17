(this.webpackJsonptinkoff=this.webpackJsonptinkoff||[]).push([[0],{50:function(e,t,r){},51:function(e,t,r){},52:function(e,t,r){},57:function(e,t,r){},58:function(e,t,r){},59:function(e,t,r){},63:function(e,t,r){},64:function(e,t,r){},65:function(e,t,r){"use strict";r.r(t);var n=r(1),c=r(0),s=r(25),a=r.n(s),i=r(19),o=r(4),u=r.n(o),l=r(7),d=r(8),p=r(10),h=r(12),f=r(11),j=new function e(){var t=this;Object(d.a)(this,e),this._apiBase="https://api-invest.tinkoff.ru/openapi/sandbox/",this.resource=function(){var e=Object(l.a)(u.a.mark((function e(r,n,c){var s,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=function(){return fetch("".concat(t._apiBase).concat(r),{method:n,headers:new Headers({"Content-Type":"application/json",Authorization:"Bearer t.4VjtdFG1xOPwrf96iRoDJ86wld3GZoEXIu9045OpPdXRbHXcVHsrUjMbms9yGiNP-QW9rePpUYP_uF9uiZR6Ug"}),body:JSON.stringify(c)})},e.next=3,s();case 3:if((a=e.sent).ok){e.next=6;break}throw new Error("Could not fetch ".concat(r,", received ").concat(a.status));case 6:return e.abrupt("return",a.json());case 7:case"end":return e.stop()}}),e)})));return function(t,r,n){return e.apply(this,arguments)}}(),this.getResource=function(e){return t.resource(e,"get")},this.postResource=function(e,r){return t.resource(e,"post",r)},this.getStonks=Object(l.a)(u.a.mark((function e(){var r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getResource("/market/stocks");case 2:return r=e.sent,e.abrupt("return",r.payload.instruments);case 4:case"end":return e.stop()}}),e)}))),this.getPortfolio=Object(l.a)(u.a.mark((function e(){var r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getResource("portfolio");case 2:return r=e.sent,e.abrupt("return",r.payload.positions);case 4:case"end":return e.stop()}}),e)}))),this.getOperations=function(){var e=Object(l.a)(u.a.mark((function e(r){var n,c,s;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=new Date(0).toISOString(),c=(new Date).toISOString(),e.next=4,t.getResource("operations?from=".concat(n,"&to=").concat(c,"&figi=").concat(r));case 4:return s=e.sent,e.abrupt("return",s.payload.operations);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.getItemByFigi=function(){var e=Object(l.a)(u.a.mark((function e(r){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getResource("market/search/by-figi?figi=".concat(r));case 2:return n=e.sent,e.abrupt("return",n.payload);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.getCurrencyPortfolio=Object(l.a)(u.a.mark((function e(){var r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getResource("portfolio/currencies");case 2:return r=e.sent,e.abrupt("return",r.payload.currencies);case 4:case"end":return e.stop()}}),e)}))),this.getMarketCurrencies=Object(l.a)(u.a.mark((function e(){var r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getResource("/market/currencies");case 2:return r=e.sent,e.abrupt("return",r.payload.instruments);case 4:case"end":return e.stop()}}),e)}))),this.getCandles=function(){var e=Object(l.a)(u.a.mark((function e(r){var n,c,s;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=new Date((new Date).getTime()-6e4).toISOString(),c=(new Date).toISOString(),e.next=4,t.getResource("market/candles?figi=".concat(r,"&from=").concat(n,"&to=").concat(c,"&interval=1min"));case 4:return s=e.sent,e.abrupt("return",s.payload.candles);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.postLimitOrder=function(){var e=Object(l.a)(u.a.mark((function e(r,n,c,s){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.postResource("orders/limit-order?figi=".concat(r),{lots:+c,operation:n,price:+s});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t,r,n,c){return e.apply(this,arguments)}}(),this.postCurrencyLomitOrder=function(){var e=Object(l.a)(u.a.mark((function e(r,n,c,s){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.postResource("currencies/balance",{currency:r,balance:""});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t,r,n,c){return e.apply(this,arguments)}}()},b=(r(50),r(67)),O=r(38),x=function(e){var t=e.left,r=e.right;return Object(n.jsxs)(b.a,{className:"row mb2",children:[Object(n.jsx)(O.a,{className:"col-md-6",children:t}),Object(n.jsx)(O.a,{className:"col-md-6",children:r})]})},m=(r(51),function(e){Object(h.a)(r,e);var t=Object(f.a)(r);function r(){return Object(d.a)(this,r),t.apply(this,arguments)}return Object(p.a)(r,[{key:"renderItems",value:function(e){var t=this;return e.map((function(e){var r=e.ticker,c=e.currency,s=t.props.renderItem(e);return Object(n.jsx)("li",{className:"list-group-item",title:r,onClick:function(){return t.props.onItemSelected(e)},children:s},r||c)}))}},{key:"render",value:function(){var e=this.renderItems(this.props.positions);return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("ul",{className:"item-list list-group",children:e}),Object(n.jsx)("br",{})]})}}]),r}(c.Component)),v=r(72),y=r(68),g=r(73),k=r(41),w=r(69),C=r(70),S=new function e(){var t=this;Object(d.a)(this,e),this._apiBase="https://finnhub.io/api/v1/",this.resource=function(){var e=Object(l.a)(u.a.mark((function e(r,n,c){var s,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=function(){return fetch("".concat(t._apiBase).concat(r,"&token=sandbox_c00nb9748v6viomea87g"),{method:n,body:JSON.stringify(c)})},e.next=3,s();case 3:if((a=e.sent).ok){e.next=6;break}throw new Error("Could not fetch ".concat(r,", received ").concat(a.status));case 6:return e.abrupt("return",a.json());case 7:case"end":return e.stop()}}),e)})));return function(t,r,n){return e.apply(this,arguments)}}(),this.getResource=function(e){return t.resource(e,"get")},this.getPrice=function(){var e=Object(l.a)(u.a.mark((function e(r){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getResource("quote?symbol=".concat(r));case 2:return n=e.sent,e.abrupt("return",n.c);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.getStockInfo=function(e){return t.getResource("stock/profile2?symbol=".concat(e))}},I=new function e(){var t=this;Object(d.a)(this,e),this._apiBase="https://www.tinkoff.ru/api/",this.resource=function(){var e=Object(l.a)(u.a.mark((function e(r,n,c){var s,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=function(){return fetch("".concat(t._apiBase).concat(r),{method:n,headers:new Headers({"Content-Type":"application/json"}),body:JSON.stringify(c)})},e.next=3,s();case 3:if((a=e.sent).ok){e.next=6;break}throw new Error("Could not fetch ".concat(r,", received ").concat(a.status));case 6:return e.abrupt("return",a.json());case 7:case"end":return e.stop()}}),e)})));return function(t,r,n){return e.apply(this,arguments)}}(),this.getResource=function(e){return t.resource(e,"get")},this.postResource=function(e,r){return t.resource(e,"post",r)},this.companyInfo=function(){var e=Object(l.a)(u.a.mark((function e(r){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.postResource("trading/symbols/brands",{brandId:r});case 2:return n=e.sent,console.log(r,n),e.abrupt("return",n.payload.brands[0]);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.getCurrencyInfo=Object(l.a)(u.a.mark((function e(){var r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.postResource("trading/currency/list",{country:"All",currentPage:0,end:12,orderType:"Asc",pageSize:12,sortType:"ByBuyBackDate",start:0});case 2:return r=e.sent,e.abrupt("return",r.payload.values);case 4:case"end":return e.stop()}}),e)}))),this.getStocks=Object(l.a)(u.a.mark((function e(){var r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.postResource("trading/stocks/list",{country:"All",orderType:"Asc",sortType:"ByName",start:"0"});case 2:return r=e.sent,e.abrupt("return",r.payload.values);case 4:case"end":return e.stop()}}),e)}))),this.getETFs=Object(l.a)(u.a.mark((function e(){var r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.postResource("trading/etfs/list",{country:"All",orderType:"Desc",sortType:"ByEarnings",start:"0"});case 2:return r=e.sent,e.abrupt("return",r.payload.values);case 4:case"end":return e.stop()}}),e)}))),this.getBonds=Object(l.a)(u.a.mark((function e(){var r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.postResource("trading/bonds/list",{country:"All",orderType:"Desc",sortType:"ByYieldToClient",start:"0"});case 2:return r=e.sent,e.abrupt("return",r.payload.values);case 4:case"end":return e.stop()}}),e)})))},P=(r(52),function(e){Object(h.a)(r,e);var t=Object(f.a)(r);function r(){var e;Object(d.a)(this,r);for(var n=arguments.length,c=new Array(n),s=0;s<n;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).state={operations:[],selectedOperation:"Buy",stockProfile:{},lots:0,lotPrice:0,stockPrice:0},e.updatePrice=Object(l.a)(u.a.mark((function t(){var r,n,c;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.props.item,n=r.ticker,t.next=4,S.getPrice(n);case 4:c=t.sent,e.setState({stockPrice:c});case 6:case"end":return t.stop()}}),t)}))),e.updateStockProfile=Object(l.a)(u.a.mark((function t(){var r,n,c;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.props.item,n=r.brand,t.next=4,I.companyInfo(n);case 4:c=t.sent,e.setState({stockProfile:c}),console.log({stockProfile:c});case 7:case"end":return t.stop()}}),t)}))),e.onChangeOperation=function(t){e.setState({selectedOperation:t.target.value})},e.onLotsChange=function(t){e.setState({lots:t.target.value})},e.onPriceChange=function(t){e.setState({lotPrice:t.target.value})},e.handdleClick=function(){var t=Object(l.a)(u.a.mark((function t(r){var n,c,s,a,i,o,l,d,p,h;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.props,c=n.submitOrder,s=n.item,r.preventDefault(),a=e.state,i=a.selectedOperation,o=a.lots,l=a.lotPrice,d=s.figi,p=s.isCurrency,h=s.name,t.next=6,c(d,p,h,i,o,l);case 6:return t.next=8,e.updateDetails();case 8:e.setState({selectedOperation:"Buy",lots:0,lotPrice:0});case 9:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(p.a)(r,[{key:"componentDidMount",value:function(){this.updateDetails(),this.updateStockProfile(),this.interval=setInterval(this.updatePrice,2e3)}},{key:"componentDidUpdate",value:function(e){this.props.item!==e.item&&(this.updateDetails(),this.updatePrice(),this.updateStockProfile())}},{key:"componentWillUnmount",value:function(){clearInterval(this.interval)}},{key:"updateDetails",value:function(){var e=Object(l.a)(u.a.mark((function e(){var t,r,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props.item,r=t.figi,e.next=4,j.getOperations(r);case 4:n=e.sent,this.setState({operations:n});case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"renderOperations",value:function(e){return e.map((function(e){var t=e.id,r=e.date,c=e.operationType,s=e.price,a=e.quantity,i=e.currency,o=new Date(r).toLocaleDateString();return Object(n.jsxs)("li",{className:"list-group-item",children:[o," : ",c," ",a," stock(s) for ",s,i]},t)}))}},{key:"render",value:function(){var e=this.props.item,t=e.ticker,r=e.name,c=e.stockCurrency,s=e.isin,a=e.isCurrency,i=e.isValidCurrency,o=e.price,u=this.state,l=u.operations,d=u.selectedOperation,p=u.lots,h=u.lotPrice,f=u.stockPrice,j=u.stockProfile,x=this.renderOperations(l);return Object(n.jsxs)("div",{className:"itemDetails",children:[Object(n.jsx)("h3",{children:a?t:"".concat(t," - ").concat(r)}),Object(n.jsx)("h4",{children:a?o:"".concat(f," ").concat(c)}),Object(n.jsxs)(v.a,{children:[Object(n.jsx)(y.a,{eventKey:"order",title:"Order",children:Object(n.jsxs)(g.a,{children:[Object(n.jsxs)("h5",{children:["Limit order for ",t]}),Object(n.jsx)(k.a,{children:Object(n.jsxs)(b.a,{children:[Object(n.jsxs)(O.a,{children:[Object(n.jsx)(g.a.Label,{children:"Operation"}),Object(n.jsxs)(g.a.Control,{as:"select",placeholder:"Operation",value:d,onChange:this.onChangeOperation,children:[Object(n.jsx)("option",{value:"Buy",children:"Buy"}),Object(n.jsx)("option",{value:"Sell",children:"Sell"})]})]}),Object(n.jsxs)(O.a,{children:[Object(n.jsx)(g.a.Label,{children:"Lots"}),Object(n.jsx)(g.a.Control,{type:"select",placeholder:"Lots",value:p,onChange:this.onLotsChange})]}),Object(n.jsxs)(O.a,{children:[Object(n.jsx)(g.a.Label,{children:"Price"}),Object(n.jsxs)("div",{className:"d-flex",children:[Object(n.jsx)(g.a.Control,{type:"select",placeholder:"Price",value:h,onChange:this.onPriceChange}),Object(n.jsx)("span",{className:"currency",children:c})]})]})]})}),Object(n.jsx)(w.a,{variant:"primary",type:"submit",onClick:this.handdleClick,children:"Submit"})]})}),Object(n.jsx)(y.a,{eventKey:"operations",title:"Operations",disable:!i,children:Object(n.jsx)("ul",{className:"item-list list-group",children:x})}),Object(n.jsx)(y.a,{eventKey:"profile",title:"Profile",disable:a,children:Object(n.jsxs)(g.a,{children:[Object(n.jsx)("h5",{children:j.name}),Object(n.jsx)(k.a,{children:Object(n.jsx)(b.a,{children:Object(n.jsxs)(O.a,{className:"d-flex",children:[Object(n.jsx)(C.a,{className:"logo",src:"http://static.tinkoff.ru/brands/traiding/".concat(s,"x160.png"),rounded:!0}),Object(n.jsxs)("div",{className:"info",children:[Object(n.jsx)("div",{children:j.brandInfo}),Object(n.jsxs)("div",{children:["Country: ",j.country]}),Object(n.jsxs)("div",{children:["Sector: ",j.sector]})]})]})})})]})})]}),Object(n.jsx)("iframe",{width:"100%",frameborder:"0",height:"400",src:"https://widget.finnhub.io/widgets/stocks/chart?symbol=".concat(t,"&amp;watermarkColor=%23222222&amp;backgroundColor=%23222222&amp;textColor=white")})]})}}]),r}(c.Component)),N=r(42),L=(r(57),function(e){Object(h.a)(r,e);var t=Object(f.a)(r);function r(){var e;Object(d.a)(this,r);for(var n=arguments.length,c=new Array(n),s=0;s<n;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).state={searchText:""},e.onSearchChange=function(t){var r=t.target.value;e.setState({searchText:r}),e.props.onSearchChange(r)},e}return Object(p.a)(r,[{key:"render",value:function(){var e=this.state.searchText;return Object(n.jsx)(N.a,{type:"text",value:e,placeholder:"Search",className:"mr-sm-2 search",onChange:this.onSearchChange})}}]),r}(c.Component)),T=(r(58),function(e){Object(h.a)(r,e);var t=Object(f.a)(r);function r(){var e;Object(d.a)(this,r);for(var c=arguments.length,s=new Array(c),a=0;a<c;a++)s[a]=arguments[a];return(e=t.call.apply(t,[this].concat(s))).state={searchText:""},e.onSearchChange=function(t){e.setState({searchText:t})},e.portfolioList=function(){var t=e.state.searchText,r=e.props,c=r.positions,s=r.currencyPositions,a=r.onItemSelected;return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(L,{onSearchChange:e.onSearchChange}),Object(n.jsx)("div",{className:"title",children:"My Stocks"}),Object(n.jsx)(m,{positions:e.search(c,t),onItemSelected:a,renderItem:function(e){var t=e.name,r=e.lots,c=e.isin;return Object(n.jsxs)("div",{className:"d-flex justify-content-between",children:[Object(n.jsxs)("div",{children:[Object(n.jsx)(C.a,{className:"smallLogo",src:"http://static.tinkoff.ru/brands/traiding/".concat(c,"x160.png"),roundedCircle:!0}),t]}),Object(n.jsx)("div",{className:"lots",children:r})]})}}),Object(n.jsx)("div",{className:"title",children:"My Currencies"}),Object(n.jsx)(m,{positions:e.search(s,t),onItemSelected:a,renderItem:function(e){var t=e.currency,r=e.balance;return Object(n.jsxs)("div",{className:"d-flex justify-content-between",children:[Object(n.jsxs)("div",{children:[Object(n.jsx)(C.a,{className:"smallLogo",src:"http://static.tinkoff.ru/brands/traiding/".concat(t,"x160.png"),roundedCircle:!0}),t]}),Object(n.jsx)("div",{className:"lots",children:r})]})}})]})},e.portfolioDetails=function(){var t=e.props.selectedItem;return t?Object(n.jsx)(P,{item:t,submitOrder:e.props.submitOrder}):Object(n.jsx)("div",{className:"itemSelect",children:"Select an item from a list"})},e}return Object(p.a)(r,[{key:"componentDidMount",value:function(){this.props.onItemSelected(null)}},{key:"search",value:function(e,t){return""===t?e:e.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}))}},{key:"render",value:function(){return Object(n.jsx)(x,{left:this.portfolioList(),right:this.portfolioDetails()})}}]),r}(c.Component)),R=(r(59),r(21)),D=function(){return Object(n.jsxs)("ul",{className:"d-flex",children:[Object(n.jsx)("li",{children:Object(n.jsx)(R.b,{to:"/",children:"Portfolio"})}),Object(n.jsx)("li",{children:Object(n.jsx)(R.b,{to:"/stocks",children:"Stocks"})}),Object(n.jsx)("li",{children:Object(n.jsx)(R.b,{to:"/currencies",children:"Currencies"})}),Object(n.jsx)("li",{children:Object(n.jsx)(R.b,{to:"/bonds",children:"Bonds"})}),Object(n.jsx)("li",{children:Object(n.jsx)(R.b,{to:"/etfs",children:"ETFs"})})]})},B=(r(63),function(e){Object(h.a)(r,e);var t=Object(f.a)(r);function r(){var e;Object(d.a)(this,r);for(var c=arguments.length,s=new Array(c),a=0;a<c;a++)s[a]=arguments[a];return(e=t.call.apply(t,[this].concat(s))).state={searchText:""},e.onSearchChange=function(t){e.setState({searchText:t})},e.stocksList=function(){var t=e.state.searchText,r=e.props,c=r.stonks,s=r.onItemSelected;return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(L,{onSearchChange:e.onSearchChange}),Object(n.jsx)(m,{positions:e.search(c,t),onItemSelected:s,renderItem:function(e){var t=e.name,r=e.isin;return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(C.a,{className:"smallLogo",src:"http://static.tinkoff.ru/brands/traiding/".concat(r,"x160.png"),alt:"logo",roundedCircle:!0}),t]})}})]})},e.stockDetails=function(){var t=e.props.selectedItem;return t?Object(n.jsx)(P,{item:t,submitOrder:e.props.submitOrder}):Object(n.jsx)("div",{className:"itemSelect",children:"Select an item from a list"})},e}return Object(p.a)(r,[{key:"componentDidMount",value:function(){this.props.onItemSelected(null)}},{key:"search",value:function(e,t){return""===t?e:e.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}))}},{key:"render",value:function(){return Object(n.jsx)(x,{left:this.stocksList(),right:this.stockDetails()})}}]),r}(c.Component)),E=r(9),A=r(71),F=function(e){Object(h.a)(r,e);var t=Object(f.a)(r);function r(){var e;Object(d.a)(this,r);for(var c=arguments.length,s=new Array(c),a=0;a<c;a++)s[a]=arguments[a];return(e=t.call.apply(t,[this].concat(s))).defaultRenderItemLabel=function(e){var t=e.symbol,r=t.ticker,c=t.logoName,s=void 0===c?"":c;return Object(n.jsx)("div",{className:"d-flex justify-content-between",children:Object(n.jsxs)("div",{children:[Object(n.jsx)(C.a,{className:"smallLogo",src:"http://static.tinkoff.ru/brands/traiding/".concat(s.replace(".png","x160.png")),roundedCircle:!0}),r]})})},e.defaultRenderRow=function(t){var r=e.props.renderItemLabel,c=void 0===r?e.defaultRenderItemLabel:r,s=t.ticker,a=t.currency,i=t.price,o=c(t);return Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{children:o}),Object(n.jsx)("td",{children:i})]},s||a)},e.defaultRenderHeader=function(){return Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{children:"Ticker"}),Object(n.jsx)("td",{children:"Price"})]})},e}return Object(p.a)(r,[{key:"renderItems",value:function(e){var t=this.props.renderRow,r=void 0===t?this.defaultRenderRow:t;return e.map((function(e){return r(e)}))}},{key:"render",value:function(){var e=this.props.renderHeader,t=void 0===e?this.defaultRenderHeader:e,r=this.renderItems(this.props.items),c=t();return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsxs)(A.a,{striped:!0,bordered:!0,hover:!0,variant:"dark",children:[Object(n.jsx)("thead",{children:c}),Object(n.jsx)("tbody",{children:r})]}),Object(n.jsx)("br",{})]})}}]),r}(c.Component),U=function(e){Object(h.a)(r,e);var t=Object(f.a)(r);function r(){return Object(d.a)(this,r),t.apply(this,arguments)}return Object(p.a)(r,[{key:"render",value:function(){var e=this.props.currencies;return Object(n.jsx)(F,{items:e})}}]),r}(c.Component),H=F,M=(r(64),function(e){Object(h.a)(r,e);var t=Object(f.a)(r);function r(){var e;Object(d.a)(this,r);for(var c=arguments.length,s=new Array(c),a=0;a<c;a++)s[a]=arguments[a];return(e=t.call.apply(t,[this].concat(s))).state={searchText:""},e.onSearchChange=function(t){e.setState({searchText:t})},e.renderItemLabel=function(e){var t=e.symbol,r=t.ticker,c=t.showName,s=t.logoName,a=void 0===s?"http://static.tinkoff.ru/brands/traiding/US87238U2033x160.png":s;return Object(n.jsx)("div",{className:"d-flex justify-content-between",children:Object(n.jsxs)("div",{children:[Object(n.jsx)(C.a,{className:"smallLogo",src:"http://static.tinkoff.ru/brands/traiding/".concat(a.replace(".png","x160.png")),onError:function(e){e.target.onerror=null,e.target.src="http://static.tinkoff.ru/brands/traiding/US87238U2033x160.png"},roundedCircle:!0}),c," (",r,")"]})})},e}return Object(p.a)(r,[{key:"search",value:function(e,t){return""===t?e:e.filter((function(e){return e.symbol.showName.toLowerCase().includes(t.toLowerCase())||e.symbol.ticker.toLowerCase().includes(t.toLowerCase())}))}},{key:"render",value:function(){var e=this,t=this.props.bonds,r=this.state.searchText;return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(L,{onSearchChange:this.onSearchChange}),Object(n.jsx)(H,{items:this.search(t,r),renderRow:function(t){var r=t.symbol,c=t.price,s=void 0===c?{}:c,a=t.yieldToClient,i=t.dateToClient,o=r.ticker,u=s.value,l=s.currency,d=e.renderItemLabel(t);return Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{children:d}),Object(n.jsxs)("td",{children:[u," ",l]}),Object(n.jsxs)("td",{children:[a,"%"]}),Object(n.jsx)("td",{children:new Date(i).toLocaleDateString()})]},o)},renderHeader:function(){return Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{children:"Bond"}),Object(n.jsx)("td",{children:"Price"}),Object(n.jsx)("td",{children:"Profit"}),Object(n.jsx)("td",{children:"Date"})]})}})]})}}]),r}(c.Component)),_=function(e){Object(h.a)(r,e);var t=Object(f.a)(r);function r(){var e;Object(d.a)(this,r);for(var c=arguments.length,s=new Array(c),a=0;a<c;a++)s[a]=arguments[a];return(e=t.call.apply(t,[this].concat(s))).state={searchText:""},e.onSearchChange=function(t){e.setState({searchText:t})},e.renderItemLabel=function(e){var t=e.symbol,r=t.ticker,c=t.showName,s=t.logoName,a=void 0===s?"http://static.tinkoff.ru/brands/traiding/US87238U2033x160.png":s;return Object(n.jsx)("div",{className:"d-flex justify-content-between",children:Object(n.jsxs)("div",{children:[Object(n.jsx)(C.a,{className:"smallLogo",src:"http://static.tinkoff.ru/brands/traiding/".concat(a.replace(".png","x160.png")),onError:function(e){e.target.onerror=null,e.target.src="http://static.tinkoff.ru/brands/traiding/US87238U2033x160.png"},roundedCircle:!0}),c," (",r,")"]})})},e}return Object(p.a)(r,[{key:"search",value:function(e,t){return""===t?e:e.filter((function(e){return e.symbol.showName.toLowerCase().includes(t.toLowerCase())||e.symbol.ticker.toLowerCase().includes(t.toLowerCase())}))}},{key:"render",value:function(){var e=this,t=this.props.etfs,r=this.state.searchText;return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(L,{onSearchChange:this.onSearchChange}),Object(n.jsx)(H,{items:this.search(t,r),renderRow:function(t){var r=t.symbol,c=t.price,s=void 0===c?{}:c,a=r.ticker,i=s.value,o=s.currency,u=e.renderItemLabel(t);return Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{children:u}),Object(n.jsxs)("td",{children:[i," ",o]})]},a)},renderHeader:function(){return Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{children:"ETF"}),Object(n.jsx)("td",{children:"Price"})]})}})]})}}]),r}(c.Component),J=function(e){Object(h.a)(r,e);var t=Object(f.a)(r);function r(){var e;Object(d.a)(this,r);for(var n=arguments.length,c=new Array(n),s=0;s<n;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).state={stonks:[],positions:[],currencies:[],currencyPositions:[],bonds:[],etfs:[],selectedItem:null},e.onItemSelected=function(){var t=Object(l.a)(u.a.mark((function t(r){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.setState({selectedItem:r});case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.submitOrder=function(){var t=Object(l.a)(u.a.mark((function t(r,n,c,s,a){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,j.postLimitOrder(r,c,s,a);case 2:return t.next=4,e.updatePositions();case 4:case"end":return t.stop()}}),t)})));return function(e,r,n,c,s){return t.apply(this,arguments)}}(),e}return Object(p.a)(r,[{key:"componentDidMount",value:function(){var e=Object(l.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.updatePositions(),this.getStonks(),e.next=4,this.getCurrencyPortfolio();case 4:this.getAllCurrencies(),this.getBonds(),this.getETFs();case 7:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getStonks",value:function(){var e=Object(l.a)(u.a.mark((function e(){var t,r,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.getStonks();case 2:return t=e.sent,e.next=5,I.getStocks();case 5:r=e.sent,n=[],t.forEach((function(e){var t=r.find((function(t){return t.symbol.ticker===e.ticker}));if(t){var c=Object(i.a)(Object(i.a)({},e),{},{brand:t.symbol.brand,price:t.price?t.price.value:null,stockCurrency:t.price?t.price.currency:null});n.push(c)}})),this.setState({stonks:n.sort((function(e,t){return e.name>t.name?1:-1}))});case 9:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"updatePositions",value:function(){var e=Object(l.a)(u.a.mark((function e(){var t,r,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.getPortfolio();case 2:return t=e.sent,e.next=5,I.getStocks();case 5:r=e.sent,n=[],t.forEach((function(e){var t=r.find((function(t){return t.symbol.ticker===e.ticker}));t&&n.push(Object(i.a)(Object(i.a)({},e),{},{brand:t.symbol.brand,price:t.price?t.price.value:null,stockCurrency:t.price?t.price.currency:null}))})),this.setState({positions:n.sort((function(e,t){return e.name>t.name?1:-1})).filter((function(e){return"Stock"===e.instrumentType}))});case 9:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getCurrencyPortfolio",value:function(){var e=Object(l.a)(u.a.mark((function e(){var t,r,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.getMarketCurrencies();case 2:return t=e.sent,e.next=5,j.getCurrencyPortfolio();case 5:r=e.sent,n=[],r.forEach((function(e){var r=t.find((function(t){return e.currency===t.ticker.substring(0,3)}));n.push(Object(i.a)(Object(i.a)({},e),{},{properties:r,name:e.currency,figi:r?r.figi:"",isValidCurrency:!!r&&r.figi,isCurrency:!0}))})),this.setState({currencyPositions:n});case 9:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getAllCurrencies",value:function(){var e=Object(l.a)(u.a.mark((function e(){var t,r,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I.getCurrencyInfo();case 2:t=e.sent,r=this.state.currencyPositions,n=[],t.forEach((function(e){var t=r.find((function(t){return t.currency===e.symbol.ticker.replace("RUB","")}));n.push(Object(i.a)(Object(i.a)({},e),{},{position:t,isCurrency:!0,ticker:e.symbol.ticker,price:e.price.value}))})),this.setState({currencies:n});case 7:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getBonds",value:function(){var e=Object(l.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I.getBonds();case 2:t=e.sent,this.setState({bonds:t});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getETFs",value:function(){var e=Object(l.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I.getETFs();case 2:t=e.sent,this.setState({etfs:t});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.state,r=t.positions,c=t.stonks,s=t.currencies,a=t.bonds,i=t.etfs,o=t.currencyPositions,u=t.selectedItem;return Object(n.jsx)(n.Fragment,{children:Object(n.jsxs)(R.a,{children:[Object(n.jsx)(D,{}),Object(n.jsx)(E.a,{path:"/",exact:!0,render:function(){return Object(n.jsx)(T,{positions:r,currencies:s,currencyPositions:o,selectedItem:u,onItemSelected:e.onItemSelected,submitOrder:e.submitOrder})}}),Object(n.jsx)(E.a,{path:"/stocks",exact:!0,render:function(){return Object(n.jsx)(B,{stonks:c,selectedItem:u,onItemSelected:e.onItemSelected,submitOrder:e.submitOrder})}}),Object(n.jsx)(E.a,{path:"/currencies",exact:!0,render:function(){return Object(n.jsx)(U,{currencies:s,currencyPositions:o,onItemSelected:e.onItemSelected,selectedItem:u})}}),Object(n.jsx)(E.a,{path:"/bonds",exact:!0,render:function(){return Object(n.jsx)(M,{bonds:a})}}),Object(n.jsx)(E.a,{path:"/etfs",exact:!0,render:function(){return Object(n.jsx)(_,{etfs:i})}})]})})}}]),r}(c.Component);a.a.render(Object(n.jsx)(J,{}),document.getElementById("root"))}},[[65,1,2]]]);
//# sourceMappingURL=main.f4faa26a.chunk.js.map