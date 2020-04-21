import React, { Component } from 'react'
import {Cards, Chart, CountryPicker} from "./components"
import styles from "./App.module.css";
import { fetchData } from "./api"

class App extends Component {

    state = {
        data:{},
        country:""
    }

    async componentDidMount(){
        const fetchedData = await fetchData()

        this.setState({data:fetchedData})
    }

    handleCountryChange = async (country) => {
        console.log(await fetchData(country))
    }

    render() {
        return (
            <div className={styles.container}>
                <CountryPicker onCountryChange={this.handleCountryChange}/>
                <Cards data={this.state.data}/>
                <Chart/>
            </div>
        )
    }
}

export default App