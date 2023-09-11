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
            publishHTML(target: [
                allowMissing: false,
                alwaysLinkToLastBuild: false,
                keepAll: true,
                reportDir: 'cypress/reports/html',
                reportFiles: 'index.html',
                reportName: 'Cypress Mochawesome Report',
                reportTitles: 'Cypress Test Report'
            ])
        }
    }
}