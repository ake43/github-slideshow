enable api

add credentials to your project
- service key

scopes
https://www.googleapis.com/auth/spreadsheets

gcloud functions deploy gsc-test-video-cloud-function --service-account=gsc-test-video@gsc-test-video.iam.gserviceaccount.com --env-vars-file .env.yaml --entry-point startit --runtime nodejs12 --trigger-http --allow-unauthenticated