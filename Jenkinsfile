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
               bat 'npx cypress run'
           }
       }
       stage('Deploy') {
           steps {
               echo 'Deploying......'
           }
       }
   }
     post { 

       always { 

           bat 'npx mochawesome-merge "Cypress/cypress/results/*.json" > Cypress/mochawesome.json' 

           bat 'npx mochawesome-report-generator Cypress/mochawesome.json' 

           publishHTML([allowMissing: false, alwaysLinkToLastBuild: false, keepAll: false, reportDir: 'mochawesome-report', reportFiles: 'mochawesome.html', reportName: 'HTML Report', reportTitles: '']) 

           cleanWs() 

       } 
   }
}