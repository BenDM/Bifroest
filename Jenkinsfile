pipeline{
    agent any
    stages{
        stage('Compile Stage'){
            steps{
                    sh 'mvn clean install'
            }
        }
        stage('Test Stage'){
            steps{
                     sh 'mvn test'
            }
        }

         stage('Results'){
            junit 'JenkinsTest/target/surefire-reports/*.xml'
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