node {
      def app
      stage('Initialize'){
              def dockerHome = tool 'mydocker'
              env.PATH = "${dockerHome}/bin:${env.PATH}"
          }

      stage('Clone repository') {
        checkout scm
        }

      stage('Build image') {
        app = docker.build("axwayaustralia/cicd-demo-backend:${env.BUILD_NUMBER}")
        }

      stage('Test image') {
        app.inside {
             sh 'echo "Tests passed - more to be added later"'
             }
        }

      stage('Push image') {
        app.inside {
             sh 'echo "Push image"'
             sh 'docker push axwayaustralia/cicd-demo-backend:${env.BUILD_NUMBER}'
             }

        }
      post {
      		always {
      			sh 'docker logout'
      		}
      	}

      }