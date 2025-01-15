const ENV = {
  BASE_PATH: process.env.NEXT_PUBLIC_BASE_PATH || '',
  FEATURE_FLAG: process.env.NEXT_PUBLIC_FEATURE_FLAG === 'true',
};

export default ENV;
