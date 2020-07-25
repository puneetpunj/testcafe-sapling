pipeline {
    
    agent any 

    parameters {
        choice(
            name: 'BUILD_IMAGE',
            choices: ['true' , 'false'],
            description: 'An option to skip building image')
        choice(
            name: 'EXECUTE_TESTS',
            choices: ['true' , 'false'],
            description: 'To skip docker run command')
         choice(
            name: 'ENVIRONMENT',
            choices: ['UAT' , 'SIT'],
            description: 'To skip docker run command')
    }

    stages {

        stage('🚜 Image & Container Cleanup') {
            steps {
                sh 'docker ps -a | awk \'{ print $1,$2 }\' | grep testcafeimage | awk \'{print $1 }\' | xargs -I {} docker rm {} | docker rmi testcafeimage'
            }
        }
        
         stage('👷 Build Image') {
              when { expression { params.BUILD_IMAGE.toBoolean() } }
             steps{
                sh 'npm run docker:build'
             }
        }
        
        stage('✅ Execute Tests') {
            when { expression { params.EXECUTE_TESTS.toBoolean() } }
             steps{
                sh 'docker run -i testcafeimage'
             }
        

            post{
                always {
                    copyReportFromDockerContainer()
                    publishAllureReport()
                }
            }
        }
    }
}

def copyReportFromDockerContainer(){
  sh '''
        cont=$(docker ps -q -l)
        docker cp $cont:/app/allure allure
        ls -la
    '''
}

def publishAllureReport(){
    script {
        allure([
            includeProperties: false,
            jdk: '',
            properties: [],
            reportBuildPolicy: 'ALWAYS',
            results: [[path: 'allure/allure-results']]
        ])
    }
}