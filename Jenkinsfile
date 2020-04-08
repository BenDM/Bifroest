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
                stage('test') {
                    steps {

                    }
                }

        stage('Test Stage'){
            steps{
                     bat 'mvn test'
                     cucumber fileIncludePattern: '**/*.json', jsonReportDirectory: 'target/surefire-reports'
            }

            steps {
                                script {
                                    dir ('api-tests') {
                                        checkout([$class: 'GitSCM', branches: [[name: '*/master']],
                                                  userRemoteConfigs: [[url: 'ssh://git@bitbucket.dvag.com:7999/dvag-api/personen-service-api-tests.git', credentialsId: 'GIT']]])



                                        withMaven {
                                            sh "mvn clean test -Dspring.profiles.active=produktion -Dkarate.vb.user=$TEST_VB_USR -Dkarate.vb.password=$TEST_VB_PSW -Dkarate.vb.stp=$TEST_VB_STP -Dkarate.options=\"--tags @ProductionTest\" -B"
                                        }



                                        cucumber buildStatus: 'UNSTABLE',
                                                fileIncludePattern: '**/target/surefire-reports/*.json',
                                                trendsLimit: 10
                                    }
                                }
                            }
        }
    }
}