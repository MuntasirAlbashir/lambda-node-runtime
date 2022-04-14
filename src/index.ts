import {APIGatewayEvent} from 'aws-lambda';

const handler = async (event: APIGatewayEvent) => {
  console.log(`Lambda invoke with the following event ${event}`);
  return {
    statusCode: 200,
    headers: {'Content-Type': 'text/plan'},
    body: 'Test response',
  };
};

export default handler;
