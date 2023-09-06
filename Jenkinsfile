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
            // Gerar relatório Mochawesome
            script {
                def reportDir = 'cypress/reports/mochawesome-report'

                bat "mkdir -p ${reportDir}"
                bat 'npx mochawesome-merge cypress/results/*.json > ' + "${reportDir}/mochawesome.json"
                bat 'npx marge ' + "${reportDir}/mochawesome.json -o ${reportDir}"
            }

            // Publicar relatório HTML no Jenkins
            publishHTML(target: [
                allowMissing: false,
                alwaysLinkToLastBuild: false,
                keepAll: true,
                reportDir: 'cypress/report/mochawesome-report',
                reportFiles: 'index.html',
                reportName: 'Cypress Mochawesome Report',
                reportTitles: 'Cypress Test Report'
            ])
            cleanWs()
        }
    }
}