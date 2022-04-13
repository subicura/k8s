---
description: 쿠버네티스 실습을 위해 minikube, kubectl을 설치하고 기본적인 사용법을 알아봅니다.
image: /imgs/share.png
---

# 시작하기

::: tip ⚡️ 목표
쿠버네티스 실습을 위해 minikube, kubectl을 설치하고 기본적인 사용법을 알아봅니다.
:::

[[toc]]

## 가이드

쿠버네티스는 설치부터 운영, 각종 고급 기능까지 다양한 부분을 알아야 하고 그 과정은 험난하고 처음 접하는 사람을 지치게 합니다. ~~이 길은 내 길이 아니여..~~

본 가이드는 꼭 알아야 할 최소한의 기능을 배우고 동작 원리를 이해하는 것에 초점을 맞춰 자연스럽게 고급 기능을 익히고 나머지 설정을 찾아볼 수 있도록 구성하였습니다.

::: warning 주의
실습은 쿠버네티스 `v1.23`에서 진행하였습니다. 특정 버전(하위 버전)에서 실습할 때 오류가 발생할 수 있습니다.
:::

## 준비

실습을 위한 쿠버네티스 클러스터와 kubectl을 설치합니다.

- [쿠버네티스(minikube) 설치](../prepare/kubernetes-setup.md)
- [kubectl 설치](../prepare/kubectl-setup.md)

## minikube

minikube는 쿠버네티스의 모든 기능을 테스트할 순 없지만 쿠버네티스의 기본적인 기능을 익히고 친해지는데 가장 좋은 도구입니다. 대부분의 환경에서 사용할 수 있고 간편하며, 무료(!)입니다.

실습하는 동안 minikube를 켜고 실습이 완료되면 종료합니다. 내 CPU, 메모리는 소중하니까요.

```sh
# minikube 상태확인
minikube status

# minikube 실행
minikube start

# 특정 k8s 버전 실행
minikube start --kubernetes-version=v1.23.1

# 특정 driver 실행
minikube start --driver=virtualbox --kubernetes-version=v1.23.1

# minikube ip 확인 (접속테스트시 필요)
minikube ip

# minikube 종료
minikube stop

# minikube 제거
minikube delete
```

## 워드프레스 배포

실습의 1차 목표는 PHP와 MySQL로 구성된 워드프레스를 쿠버네티스로 배포하기입니다. 쿠버네티스 세계에서 웹 애플리케이션 배포는 가장 흔한 작업입니다. 도커에 익숙한 분들을 위하여 도커 컴포즈<sup>docker-compose</sup>를 이용한 배포와 차이점을 확인해보겠습니다.

<custom-image src="/imgs/guide/index/wordpress-docker.png" alt="wordpress(docker)" />

도커 컴포즈를 이용한 배포는 다음과 같습니다.

<<< @/src/.vuepress/public/code/guide/index/docker-compose.yml
<code-link link="guide/index/docker-compose.yml"/>

워드프레스 컨테이너 하나, MySQL 컨테이너 하나, 그리고 각각 포트와 환경변수 설정을 하면 끝입니다. 간단하죠?

`localhost:30000`으로 접속하여 테스트합니다.

::: tip 실습하기
YAML 코드 하단에 표시된 링크(`guide/index/docker-compose.yml`)를 누르면 raw 설정파일을 다운받을 수 있습니다. 가급적 동일한 폴더를 만들어 실습합니다.
:::

이제, 쿠버네티스로 배포합니다. 쿠버네티스는 조금 ~~많이~~ 더 다양한 컴포넌트로 구성됩니다.

<custom-image src="/imgs/guide/index/wordpress-k8s.png" alt="wordpress(k8s)" />

Service, Pod, ReplicaSet, Deployment, ... 정확하게 뭐가 뭔지 모르겠지만 👀 `아.. 이게 쿠버네티스의 철학이구나!`라고 이해하고 일단 무작정 설정파일<sup>spec</sup>를 작성해봅니다.

<<< @/src/.vuepress/public/code/guide/index/wordpress-k8s.yml
<code-link link="guide/index/wordpress-k8s.yml"/>

위 소스를 `wordpress-k8s.yml` 파일로 저장하고 다음과 같은 명령어를 실행합니다.

```sh
# wordpress-k8s.yml 설정 적용
kubectl apply -f wordpress-k8s.yml
```

배포 상태를 확인합니다.

```sh
# 현재 상태 확인
kubectl get all
```

**실행 결과**

```{2-3,7}
NAME                                  READY   STATUS    RESTARTS   AGE
pod/wordpress-5f59577d4d-8t2dg        1/1     Running   0          103s
pod/wordpress-mysql-545d9c6dc-dwnjp   1/1     Running   0          103s

NAME                      TYPE        CLUSTER-IP      EXTERNAL-IP   PORT(S)        AGE
service/kubernetes        ClusterIP   10.96.0.1       <none>        443/TCP        7m17s
service/wordpress         NodePort    10.107.20.190   <none>        80:31400/TCP   103s
service/wordpress-mysql   ClusterIP   10.106.50.61    <none>        3306/TCP       103s

NAME                              READY   UP-TO-DATE   AVAILABLE   AGE
deployment.apps/wordpress         1/1     1            1           103s
deployment.apps/wordpress-mysql   1/1     1            1           103s

NAME                                        DESIRED   CURRENT   READY   AGE
replicaset.apps/wordpress-5f59577d4d        1         1         1       103s
replicaset.apps/wordpress-mysql-545d9c6dc   1         1         1       103s
```

`wordpress-5f59577d4d-8t2dg`와 `pod/wordpress-mysql-545d9c6dc-dwnjp`의 상태<sup>Status</sup>가 `Running`인지 확인하고 `service/wordpress`의 포트가 몇번인지 (여기선 `31400`) 확인합니다.

그리고 `minikube ip` 명령어로 얻은 주소로 접속합니다.

::: warning Docker
Docker driver를 사용중이라면 `minikube service wordpress` 명령어를 이용하여 접속하세요.
:::

<custom-image src="/imgs/guide/index/wordpress.png" alt="wordpress" />

🎉 축하합니다! 첫번째 쿠버네티스 배포에 성공했습니다.

## 마무리

워드프레스 리소스를 제거합니다.

```sh
kubectl delete -f wordpress-k8s.yml
```
