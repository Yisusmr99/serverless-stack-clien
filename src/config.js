export default {
    MAX_ATTACHMENT_SIZE: 5000000,
    s3: {
      REGION: "us-east-1",
      BUCKET: "guia-notes"
    },
    apiGateway: {
      REGION: "us-east-1",
      URL: "https://t17oqxun8g.execute-api.us-east-1.amazonaws.com/prod"
    },
    cognito: {
      REGION: "us-east-1",
      USER_POOL_ID: "us-east-1_xP06eqUYG",
      APP_CLIENT_ID: "6e19vcakcbdon3ljsfs2ikcehd",
      IDENTITY_POOL_ID: "us-east-1:97f7b1fd-7837-4208-b03e-3ec45f931f3a"
    }
};