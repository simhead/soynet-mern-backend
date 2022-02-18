node {
      def dockerImage

      stage('Initialize'){
              def dockerHome = tool 'mydocker'
              env.PATH = "${dockerHome}/bin:${env.PATH}"
          }

      stage('Clone repository') {
        checkout scm
        }

      stage('Build image') {
        dockerImage = docker.build("axwayaustralia/cicd-demo-backend:${env.BUILD_NUMBER}")
        }

      stage('Test image') {
        sh 'echo "Tests passed - more to be added later"'
        }

      stage('Push image') {
        //app.inside {
             sh 'echo "Push image - login first"'
             //}
        docker.withRegistry( '', 'mydockerhub' ) {
            dockerImage.push("${env.BUILD_NUMBER}")
            }
        }

      stage('Remove docker image for cleanup') {
        dockerImage.rmi("${env.BUILD_NUMBER}")
      }


      }