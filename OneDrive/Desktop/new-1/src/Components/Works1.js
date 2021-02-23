import React, { Component } from 'react';
import Cities from "./Cities"
import { Data } from "./Data"
class App1 extends Component {
    constructor(props) {
        super(props);
        this.state = { 
       phone: Data
         }
    }
    render() { 
        const { phone } = this.state
        return ( 
         <div className="items">
             {phone.map(items => (
               <Cities key={items.id} items={items}/>
             ))}
         </div>
         );
    }
}
 
export default App1;