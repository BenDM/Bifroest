pipeline{
    agent any
        tools {
            maven 'maven'
            jdk 'JAVA_HOME'
        }
    stages{
        stage('Compile Stage'){
             steps {
                        bat'mvn clean'
                }
        }
        stage('Test Stage'){
            steps{
                     bat 'mvn compile'
            }
        }

                stage('Test [Entwicklung]') {
                    steps {
                        script {
                            try {
                                    bat 'mvn clean test-compile'
                            } finally {
                                cucumber fileIncludePattern: '**/*.json', jsonReportDirectory: 'target/surefire-reports'
                            }
                        }
                    }
                }

        stage ('Build') {
            steps {
                   echo 'Build'
            }
        }
        stage('clean'){
             steps{
                        echo 'Hallo World'
             }
        }
    }
}