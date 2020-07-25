pipeline {
    agent any 
    stages {
        stage('cleanup') {
            steps{
                echo "Workspace location: ${env.WORKSPACE}"    
                sh 'ls -l'
                sh 'rm -rf node_modules/'
            }
        }
        stage('git checkout') {
            steps{
                git branch: 'master',
                    credentialsId: '300b663a-e239-4628-b9ca-7329e2be872e',
                    url: 'ssh://git@github.com:puneetpunj/testcafe-sapling.git'
            }
        }
         stage('build') {
             steps{
                sh label: 'Build Docker Image', script: 'sh npm run docker:build'
                echo "After package installation"    
                sh 'ls -l'
             }
        }
        stage('Execute Tests') {
             steps{
                sh label: 'Execute Tests', script: 'sh docker run -i testcafeimage'
             }
        }
    }
}
