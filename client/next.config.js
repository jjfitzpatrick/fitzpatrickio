const { PHASE_DEVELOPMENT_SERVER,
  PHASE_PRODUCTION_SERVER,
  PHASE_PRODUCTION_BUILD } = require('next/constants')

module.exports = (phase, { defaultConfig }) => {
  // if (phase === PHASE_DEVELOPMENT_SERVER) {
  //   /* development only config options here */
  //   return {
  //   }
  // }

  // else if (phase === PHASE_PRODUCTION_SERVER) {
  //   /* config options for production server here */
  //   return {

  //   }
  // }

  /* config options for all phases except development here */
  return {
    async redirects() {
      return [
        {
          source: '/',
          destination: '/about',
          permanent: false,
        },
      ]
    },
  }
}