module.exports = () => ({
    graphql: {
        enabled: true,
        config: {
          playgroundAlways: false,
          defaultLimit: 10,
          maxLimit: 20,
          apolloServer: {
            tracing: true,
          },
        }
      }    
})