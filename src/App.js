import React, { Component } from 'react'
import {Cards, Chart, CountryPicker} from "./components"
import styles from "./App.module.css";
import { fetchData } from "./api"

class App extends Component {

    state = {
        data:{},
    }

    async componentDidMount(){
        const fetchedData = await fetchData()

        this.setState({data:fetchedData})
    }

    render() {
        return (
            <div className={styles.container}>
                <CountryPicker/>
                <Cards data={this.state.data}/>
                <Chart/>
            </div>
        )
    }
}

export default App