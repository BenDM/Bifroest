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
                     bat 'mvn test'
            }
        }
                stage('Cucumber Reports2'){
                     steps{
                           cucumber buildStatus: 'SUCCESS',
                           fileIncludePattern: "results-json.txt"
                     }
                }
    }
}