pipeline {
    agent { 
        node {
            label 'docker-agent-alpine'
            }
      }
    tools {
        nodejs "nodejs"
    }
    triggers {
        pollSCM '* * * * *'
    }
    stages {
        stage('Build') {
            steps {
                echo "Building.."
                sh '''
                cd backend/
                npm install
                npm run build
                '''
            }
        }
        stage('Test') {
            steps {
                echo "Testing.."
                sh '''
                cd backend/
                npm test
                '''
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