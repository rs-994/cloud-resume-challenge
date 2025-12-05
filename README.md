# Cloud Resume Challenge using AWS - Architecture
## Overview
This project implements the Cloud Resume Challenge, a hands-on project designed to demonstrate proficiency in cloud technologies, infrastructure as code, and modern DevOps practices. The challenge involves building a full-stack serverless web application that hosts a resume with a visitor counter, deployed entirely on AWS.
## Technologies Used

Cloud Provider: AWS (S3, CloudFront, Route 53, API Gateway, Lambda, DynamoDB)     

Programming: Python/JavaScript (Lambda functions), HTML/CSS/JavaScript (Frontend)    

IaC Tools: Terraform    

CI/CD: GitHub Actions    

Version Control: Git & GitHub




## Architecture Description
The application follows a serverless architecture pattern, leveraging multiple AWS services to create a scalable, cost-effective, and highly available solution:  


### Frontend:

#### Static website files (HTML, CSS, JavaScript) are stored in an S3 bucket configured for static website hosting    

<img width="975" height="451" alt="image" src="https://github.com/user-attachments/assets/276be7eb-ed9d-4c79-af83-56fc6b1757eb" />



#### CloudFront CDN distributes content globally with low latency and provides HTTPS support    

<img width="975" height="440" alt="image" src="https://github.com/user-attachments/assets/82fe3f86-93dc-4a36-b46b-90a510f32a2d" />

<img width="975" height="224" alt="image" src="https://github.com/user-attachments/assets/8cc8b429-4a92-4107-9d12-6e792372f84e" />

#### Allow HTTPS only
<img width="975" height="251" alt="image" src="https://github.com/user-attachments/assets/0b02c061-4c3c-4ef2-bd1a-e5d9dd4bad2e" />

#### Route 53 manages custom domain DNS routing to CloudFront    

<img width="975" height="527" alt="image" src="https://github.com/user-attachments/assets/2a61a578-120f-4d48-85f7-f6561e68b765" />

#### AWS Certificate Manager (ACM) provides SSL/TLS certificates for secure HTTPS connections    





### Backend:
Used Terraform scripts to deploy all infrastructure provisioning like API gateway,Lambda and Dynamodb       

API Gateway exposes a RESTful API endpoint for the visitor counter       

<img width="975" height="247" alt="image" src="https://github.com/user-attachments/assets/22b08fc1-1854-40f1-a483-799231d2c152" />


Lambda function (Python) processes requests and handles business logic      

<img width="975" height="364" alt="image" src="https://github.com/user-attachments/assets/2c30008e-991e-4afb-851d-b6fe44299c2f" />


DynamoDB stores the visitor count with atomic increment operations for consistency      


<img width="975" height="484" alt="image" src="https://github.com/user-attachments/assets/2342507b-2281-49f6-8de8-0ed443637dd5" />


### CI/CD Pipeline:

GitHub Actions automates testing and deployment workflows     

Frontend code automatically syncs to S3 and invalidates CloudFront cache        

Backend infrastructure and Lambda functions deploy via Infrastructure as Code     



### Architecture Diagram

<img width="975" height="870" alt="image" src="https://github.com/user-attachments/assets/f5a00985-aa12-4756-8673-8a64bb0961aa" />

