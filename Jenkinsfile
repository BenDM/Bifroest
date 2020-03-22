pipeline{
    agent any
        tools {
            maven 'maven'
            jdk 'JAVA_HOME'
        }
    stages{
        stage('Compile Stage'){
             steps {
                        bat'mvn clean compile'
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