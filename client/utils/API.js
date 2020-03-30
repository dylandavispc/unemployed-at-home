import axios from 'axios';

export default  {
    scrapeIndeed: function() {
        return axios.get("/api/scrape/indeed")
    }
}