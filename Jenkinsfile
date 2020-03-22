pipeline{
    agent any
    stages{
        stage('Compile Stage'){
            steps{
                withMaven(maven: 'maven_3_5_0'){
                    sh 'mvn clean install'
                }
            }
        }
        stage('Test Stage'){
                         steps{
                             withMaven(maven: 'maven_3_5_0'){
                                 sh 'mvn test'
                             }
                         }
                     }
                     stage('Cucumber Reports'){
                         steps{
                                 fileIncludePattern: "cucumber.json",
                                 jsonReportDirectory: 'target'
                             }
                         }
        }
    }
}