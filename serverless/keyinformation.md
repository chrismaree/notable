key information:
Admin: admin@example.com
  password: Passw0rd! 

Access key ID: AKIAXMX6ZZB4VHONY2NB
Secret Access Key: 2hn+ul35URNLnwm/kGHtakdhYxeVKy74yxB4/kns
Pool Id: us-east-2_eqdsFa5yz
Pool ARN arn:aws:cognito-idp:us-east-2:508414249081:userpool/us-east-2_eqdsFa5yz
App client id: 2bbjp6htagepkk831a9uar96gh
noteId: 2e0be290-7fc0-11e9-ae4b-135cfe181acd

Service Information
service: notable-app-api
stage: prod
region: us-east-2
stack: notable-app-api-prod
resources: 35
api keys:
  None
endpoints:
  POST - https://unwr9cnj03.execute-api.us-east-2.amazonaws.com/prod/notes
  GET - https://unwr9cnj03.execute-api.us-east-2.amazonaws.com/prod/notes/{id}
  GET - https://unwr9cnj03.execute-api.us-east-2.amazonaws.com/prod/notes
  PUT - https://unwr9cnj03.execute-api.us-east-2.amazonaws.com/prod/notes/{id}
  DELETE - https://unwr9cnj03.execute-api.us-east-2.amazonaws.com/prod/notes/{id}
functions:
  create: notable-app-api-prod-create
  get: notable-app-api-prod-get
  list: notable-app-api-prod-list
  update: notable-app-api-prod-update
  delete: notable-app-api-prod-delete
layers:
  None

Identity pool ID: us-east-2:2f6a27c1-d447-4de2-a7f3-1292229695ed




test serverless setup
```
npx aws-api-gateway-cli-test \
--username='admin@example.com' \
--password='Passw0rd!' \
--user-pool-id='us-east-2_eqdsFa5yz' \
--app-client-id='2bbjp6htagepkk831a9uar96gh' \
--cognito-region='us-east-2' \
--identity-pool-id='us-east-2:2f6a27c1-d447-4de2-a7f3-1292229695ed' \
--invoke-url='https://unwr9cnj03.execute-api.us-east-2.amazonaws.com/prod' \
--api-gateway-region='us-east-2' \
--path-template='/notes' \
--method='POST' \
--body='{"content":"hello world","attachment":"hello.jpg"}'
```