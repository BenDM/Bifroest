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

         stage('Results'){
         steps{
                     junit 'JenkinsTest/target/surefire-reports/*.xml'

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