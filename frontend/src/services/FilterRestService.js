import { formatDate, getCurrentDate } from "../utils/DateTimeUtils";
import axios from 'axios';
const FilterRestService = {
    getSearchResult: async (filter, searchWord) => {
        const url = new URL(`${import.meta.env.VITE_API_BASE_URL}/search`);
        url.searchParams.set('searchWord', searchWord);
        for (const [key, value] of Object.entries(filter)) {
            if (key !== 'timestamp') {
                if (value) {
                    url.searchParams.append('filters', key);
                }
            } else {
                if (value.gte) {
                    url.searchParams.append('dates', formatDate(value.gte));
                    if (value?.lte) {
                        url.searchParams.append('dates', formatDate(value.lte));
                    } else {
                        url.searchParams.append('dates', getCurrentDate());
                    }
                }
            }
        }

        try {
            const res = await axios.get(url);
            return res.data;
        } catch (err) {
            return [];
        }

    }
}

export default FilterRestService;