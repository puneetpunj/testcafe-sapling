pipeline {
    
    agent any 

    parameters {
        choice(
            name: 'DELETE_IMAGES_CONTAINERS',
            choices: ['false','true'],
            description: 'To skip image and container deletion')
        choice(
            name: 'BUILD_IMAGE',
            choices: ['false','true'],
            description: 'An option to skip building image')
        
        choice(
            name: 'PROD_EXECUTION',
            choices: ['true' , 'false'],
            description: 'To run tests in Prod')
        choice(
            name: 'UAT_EXECUTION',
            choices: ['true' , 'false'],
            description: 'To run tests in UAT')
        choice(
            name: 'DEV_EXECUTION',
            choices: ['true' , 'false'],
            description: 'To run tests in Dev')
    }

    stages {

        stage('🚜 Image & Container Cleanup') {
            when { expression { params.DELETE_IMAGES_CONTAINERS.toBoolean() } }
            steps {
                removeTestcafeImageAndContainer()
            }
        }
        
         stage('👷 Build Image') {
              when { expression { params.BUILD_IMAGE.toBoolean() } }
             steps{
                sh 'npm run docker:build'
             }
        }
        
        stage('✅ Execute Tests Prod') {
            when { expression { params.PROD_EXECUTION.toBoolean() } }
             steps{
                sh 'docker run -i testcafeimage'
             }
        

            post{
                always {
                    copyReportFromDockerContainer('prod')
                    publishAllureReport('prod')
                }
            }
        }
        stage('✅ Execute Tests UAT') {
            when { expression { params.UAT_EXECUTION.toBoolean() } }
             steps{
                sh 'docker run -i testcafeimage'
             }
        

            post{
                always {
                    copyReportFromDockerContainer('uat')
                    publishAllureReport('uat')
                }
            }
        }
        stage('✅ Execute Tests Develop') {
            when { expression { params.DEV_EXECUTION.toBoolean() } }
             steps{
                sh 'docker run -i testcafeimage'
             }

            post{
                always {
                    copyReportFromDockerContainer('develop')
                    publishAllureReport('develop')
                }
            }
        }
    }
}

def copyReportFromDockerContainer(env){

 sh '''
    cont=$(docker ps -q -l)
    docker cp $cont:/app/allure allure-${env}
    ls -la
'''

}

def publishAllureReport(env){
    script {
        allure([
            includeProperties: false,
            jdk: '',
            properties: [],
            reportBuildPolicy: 'ALWAYS',
            results: [[path: "allure-${env}/allure-results"]],
            report: "allure-${env}/allure-report"
        ])
    }
}

def removeTestcafeImageAndContainer(){
    sh '''
        set +e
        docker rm $(docker stop $(docker ps -a -q --filter ancestor=testcafeimage --format="{{.ID}}"))
        docker rmi testcafeimage
        set -e
    '''
}