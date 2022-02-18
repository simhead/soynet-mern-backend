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
             sh 'echo "Push image - login first"'
             }
        docker.withRegistry( 'docker.io', '2d0b6b65-b410-4d43-b627-02d98c298dad' ) {
            app.push("axwayaustralia/cicd-demo-backend:${env.BUILD_NUMBER}")
            }
        }

      stage('Remove Unused docker image') {
        steps{
            sh "docker rmi axwayaustralia/cicd-demo-backend:$BUILD_NUMBER"
        }
      }


      }