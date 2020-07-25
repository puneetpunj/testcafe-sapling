pipeline {
    
    agent any 

    parameters {
        choice(
            name: 'BUILD_IMAGE',
            choices: ['true' , 'false'],
            description: 'An option to skip building image'),
        choice(
            name: 'EXECUTE_TESTS',
            choices: ['true' , 'false'],
            description: 'To skip docker run command')
    }

    stages {
        
        stage('cleanup') {
            steps{
                echo "Workspace location: ${env.WORKSPACE}"    
                sh 'ls -l'
                sh 'rm -rf node_modules/'
            }
        }

         stage('build') {
              when { expression { params.BUILD_IMAGE.toBoolean() } }
             steps{
                sh label: 'Build Docker Image', script: 'npm run docker:build'
                echo "After package installation"    
                sh 'ls -l'
             }
        }
        
        stage('Execute Tests') {
            when { expression { params.EXECUTE_TESTS.toBoolean() } }
             steps{
                sh label: 'Execute Tests', script: 'docker run -i testcafeimage'
             }
        }

        stage('Copy Allure Reports') {
             steps{
                sh '''
                    cont=$(docker ps -q -l)
                    docker cp $cont:/app/allure allure
                    ls -la
                '''
             }
        }
    }
}
