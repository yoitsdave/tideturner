module.exports = ({ config }) => {
    return {
        extra: {
            apiUrl: process.env.API_URL,
          },        
        ...config,
    };
  };
  