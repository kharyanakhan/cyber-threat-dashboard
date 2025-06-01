import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api';

export const fetchShodanData = () => axios.get(`${API_BASE_URL}/shodan`);
export const fetchVirusTotalData = () => axios.get(`${API_BASE_URL}/virustotal`);
export const fetchMitreData = () => axios.get(`${API_BASE_URL}/mitre`);
