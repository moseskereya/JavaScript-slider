import React, { Component } from 'react';
class Cities extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            showMore:false
         }
    }
    showMore = () =>{
        this.setState({
            showMore:!this.state.showMore
        })
    }
    render(props) { 
        const {name , datedue, info, img } = this.props.items
        return ( 
            <article>
                <div className="cities">
                <img width="300px" height="200px" src={img} alt=""/>
                    <span className="clode-btn">
                     <i className="fab fa-window-close"></i>
                 </span>
                 <div className="details">
                 <h3>{name}</h3>
                  <h4>{datedue}</h4> 
                  <span onClick={this.showMore}>More >> </span>
                 {this.state.showMore && <p>{info}</p>}
                 </div>
                
                </div>
            </article>
         );
    }
}
 
export default Cities;