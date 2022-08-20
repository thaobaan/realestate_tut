import axios from 'axios';

export const baseUrl = 'https://bayut.p.rapidapi.com'



export const fetchApi = async (url) => {
    const { data } = await axios.get((url), {
        params: {
            locationExternalIDs: '5002,6020',
            purpose: 'for-rent',
            hitsPerPage: '25',
            page: '0',
            lang: 'en',
            sort: 'city-level-score',
            rentFrequency: 'monthly',
            categoryExternalID: '4'
          },
        headers: {
            'X-RapidAPI-Key': 'd3a23be7ffmsh00c0ee6fd6f8e7cp18b874jsnaeb3575069c1',
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
          },
    })

    return data;
}