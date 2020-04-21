import React, {useState, useEffect} from "react";
import { fetchCountries } from "../../api";
import {NativeSelect, FormControl} from "@material-ui/core";

import styles from "./CountryPicker.module.css";


const CountryPicker = ({ onCountryChange })=>{
    const [countries, setCountries] = useState([])


    useEffect(()=>{
        const countries = async()=>{
            setCountries(await fetchCountries())
        }

        countries()
    }, [setCountries])

    return(
        <FormControl className={styles.formControl}>
            <NativeSelect defaultValue="" onChange={ (event) => onCountryChange(event.target.value)}>
                <option value="global">Global</option>
                {countries.map((country, index)=><option key={index} value={country.name}>{country.name}</option>)}
            </NativeSelect>
        </FormControl>
    )
}

export default CountryPicker;