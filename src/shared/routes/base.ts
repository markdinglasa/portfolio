export const NODE_ENV = 'production' //developement // testing;
export const API_VERSION = 'api/v1'
export const API_SERVER = NODE_ENV.includes('production')?'rtm-backend-k7dj.onrender.com':'localhost'//'rtm-aiven-backend.onrender.com'
export const API_PORT = '3000'
export const BASE_URL = NODE_ENV.includes('production')?`https://${API_SERVER}/${API_VERSION}`:`http://${API_SERVER}:${API_PORT}/${API_VERSION}`
