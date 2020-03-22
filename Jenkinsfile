pipeline{
    agent any
        tools {
            maven 'Maven 3.6.3'
            jdk 'jdk8'
        }
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
         steps{
                     junit 'target/surefire-reports/*.xml'

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