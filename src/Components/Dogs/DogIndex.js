import React, {Component} from 'react';


class Fetch extends Component {
    constructor(props) {
        super(props)
        this.state = {
            img: ""
        }
    }

componentDidMount() {
fetch('https://dog.ceo/api/breeds/image/random')
.then((response) => response.json())
.then((results) => {
    console.log(results)
    this.setState({
        img: results
    })
})
.catch((err) => console.log(err))
}


render() {
    return(
        <div>
       <img src={this.state.img.message} alt="Doggos!"/>
        </div>
    )
}
}

export default Fetch;
