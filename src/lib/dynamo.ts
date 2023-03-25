import AWS from "aws-sdk"
import config from 'dotenv'

AWS.config.update({
  region: process.env.AWS_DEFAULT_REGION,
  accessKeyId: process.evn.AWS_ACCESS_KEY_ID,
  secretAccessKey:process.evn.AWS_SECRET_ACCESS_KEY,
})

export const dynamoDBClient : object = new AWS.DynamoDB.DocumentClient();
export const tableName : string = "Test";


