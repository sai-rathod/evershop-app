pipeline{
    agent any
    tools {
        nodejs "node:22.9.0"
    }
    environment{
        SONARHOME= tool "sonar-tool"
        DOCKER_CREDS = credentials('dockercred')
        GIT_CREDS = credentials('git-creds')
    }
    parameters{
        string(name:'VERSION',defaultValue:'v1.0',description:'please choose version to deploy ex:v1.0, v1.1, etc')
    }
    stages{
        stage("fetch"){
            steps{
                git branch: 'main', credentialsId: 'git-creds', url: 'https://github.com/sai-rathod/evershop-app.git'
            }
        }
        stage("install dependecies"){
            steps{
                sh "npm install -g npm@11.6.2"
            }
        }
        stage("install evershop deps"){
            steps{
                sh "npm install -g @evershop/evershop"
            }
        }
        stage("unit test"){
            steps{
                sh "npm test || true"
            }
        }
        stage("code building"){
            steps{
                sh "npm run build"
            }
        }
        stage("sonarqube code testing"){
            steps{
                withSonarQubeEnv("sonarqube"){
                    sh '''
                    $SONARHOME/bin/sonar-scanner -Dsonar.projectKey=evershop -Dsonar.projectName=evershop
                    '''
                }
            }
        }
        stage("quality gate testing"){
            steps{
                timeout(time:5, unit:"MINUTES"){
                    waitForQualityGate abortPipeline:false
                }
            }
        }
        stage("trivy fs scan"){
            steps{
                sh "trivy fs --scanners vuln -f json -o evershop.json ."
            }
        }
        stage("push-to-hub"){
            steps{
                sh"""
                echo ${DOCKER_CREDS_PSW} | docker login -u ${DOCKER_CREDS_USR} --password-stdin
                docker build -t ${DOCKER_CREDS_USR}/evershop-app:${params.VERSION} .
                docker push ${DOCKER_CREDS_USR}/evershop-app:${params.VERSION}
                """
            }
        }
        stage("trivy-image-scan"){
            steps{
                sh "trivy image --scanners vuln -f json -o evershop-image.json ${DOCKER_CREDS_USR}/evershop-app:${params.VERSION}"
            }
        }
        stage("update-manifest"){
            steps{
                dir("k8s"){
                sh"""
                sed -i -E "s/^([[:space:]]*image:.*:)v[0-9]+\\.[0-9]+/\\1${params.VERSION}/" deployment.yml
                """
                }
            }
        }
        stage("pushing-file-to-git"){
            steps{
                withCredentials([usernamePassword(credentialsId:'git-creds',
                usernameVariable:'gitUser',passwordVariable:'gitPass')]){
                sh"""
                git config user.name '${gitUser}'
                git config user.email "sahilrathodrk31@gmail.com"
                git remote set-url origin https://${gitUser}:${gitPass}@github.com/${gitUser}/evershop-app.git
                git add k8s/deployment.yml
                git commit -m "manifest changed to version ${params.VERSION}" || true
                git push origin main
                """
                }
            }
        }
    }
    post{
        always{
            cleanWs(
                deleteDirs:true,
                patterns:[[pattern:'evershop.json', type:'EXCLUDE'],[pattern:'evershop-image.json', type:'EXCLUDE']]
            )
        }
    }
}
