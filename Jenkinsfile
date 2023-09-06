pipeline {
   agent any

   tools {nodejs "Node18"}

   stages {
       stage('Dependencies') {
           steps {
               bat 'npm i'
           }
       }
       stage('e2e Tests') {
           steps {
               bat 'npm run cypress'
           }
       }
       stage('Deploy') {
           steps {
               echo 'Deploying......'
           }
       }
   }
}