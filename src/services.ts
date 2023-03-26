
import axios from 'axios'
import { Country } from './country'

const service = axios.create({
    baseURL: 'https://restcountries.com/v3.1',
})

export function getAllCountries() {
    return service.get<Country[]>('/all')
}
