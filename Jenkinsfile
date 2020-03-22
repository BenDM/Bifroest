pipeline{
    agent any
    stages{
        stage('Compile Stage'){
            steps{
                    bat 'mvn clean install'
            }
        }
        stage('Test Stage'){
            steps{
                     bat 'mvn test'
            }
        }
        stage('Cucumber Reports'){
             steps{
                   cucumber buildStatus: 'SUCCESS',
                   fileIncludePattern: "**/cucumber.json",
                   jsonReportDirectory: 'target'
             }
        }
    }
}