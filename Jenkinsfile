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
        app = docker.build("axwayaustralia/cicd-demo-backend:1.1")
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
        //docker.withRegistry('https://registry.hub.docker.com', 'git') {
            //app.push("${env.BUILD_NUMBER}")
            //app.push("latest")
            //}
        }

      }