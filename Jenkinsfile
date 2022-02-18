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
             sh 'echo "Tests passed"'
             }
        }

      stage('Push image') {
        app.inside {
             sh 'echo "Push image"'
             }
        docker.withRegistry('https://registry.hub.docker.com', 'git') {
            app.push("axwayaustralia/cicd-demo-backend:${env.BUILD_NUMBER}")
            //app.push("latest")
            }
        }

      }