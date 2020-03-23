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
                     cucumber fileIncludePattern: '**/*.json', jsonReportDirectory: 'target/surefire-reports'
            }
        }
    }
}