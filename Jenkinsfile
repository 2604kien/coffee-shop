pipeline {
    agent { 
        node {
            label 'docker-agent-alpine'
            }
      }
    tools {nodejs "nodejs"}
    triggers {
        pollSCM '* * * * *'
    }
    stages {
        stage('Build') {
            steps {
                echo "Building.."
                nodejs(nodeJSInstallationName: 'Node 18.x') {
                    sh '''
                    cd backend/
                    npm install
                    npm run build
                    '''
                }
            }
        }
        stage('Test') {
            steps {
                echo "Testing.."
                nodejs(nodeJSInstallationName: 'Node 18.x') {
                    sh '''
                    cd backend/
                    npm test
                    '''
                }
            }
        }
        stage('Deliver') {
            steps {
                echo 'Deliver....'
                sh '''
                echo "doing delivery stuff.."
                '''
            }
        }
    }
}