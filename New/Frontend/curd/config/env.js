const config = {}
let env = import.meta.env;
console.log("import.meta.env", import.meta.env)
config.API_URL = env.VITE_API_URL;
config.SECRET_KEY = env.VITE_SECRET_KEY;

export default config;