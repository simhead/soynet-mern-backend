// This shows a simple example of how to archive the build output artifacts.
node {
    def app

    stages {
        stage('Build') {
            steps {
                echo 'Building new docker image..'
                app = docker.build("axwayaustralia/cicd-demo-backend:1.1")
            }
        }
        stage('Test') {
            steps {
                echo 'Tesing.. NOT IMPLEMENTED'
            }
        }
        stage('Deploy') {
            steps {
                echo 'This is job for ArgoCD'
            }
        }
    }
}