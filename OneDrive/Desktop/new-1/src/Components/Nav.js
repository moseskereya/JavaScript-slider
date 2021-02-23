import React, { Component } from 'react';
class Nav extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <nav>
                    <div className="Logo">
                        Tour
                    </div>
                    <ul>
                        <li>Home</li>
                        <li>Contacts</li>
                    </ul>
                </nav>
            </div>
         );
    }
}
 
export default Nav;