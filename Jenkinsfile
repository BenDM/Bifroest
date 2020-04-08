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
                                withMaven {
                                    bat 'mvn test'
                                }
                            } finally {
                                cucumber fileIncludePattern: '**/*.json', jsonReportDirectory: 'target/surefire-reports'
                            }
                        }
                    }
                }

        stage ('Build') {
            steps {
                bat 'mvn install'
            }
            post {
                success {
                    junit 'target/surefire-reports/**/*.xml'
                }
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