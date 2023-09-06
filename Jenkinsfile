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
               bat 'npx cypress open'
           }
       }
       stage('Deploy') {
           steps {
               echo 'Deploying......'
           }
       }
   }
}