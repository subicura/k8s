---
description: kubectl의 기본적인 사용법을 익힙니다.
image: /imgs/share.png
---

# 기본 명령어

::: tip ⚡️ 목표
kubectl의 기본적인 사용법을 익힙니다.
:::

`🙋‍♂️쿠버네티스는 GUI가 없나요?` 있습니다. 그래도 처음 공부할 땐 kubectl로 한 땀 한 땀 입력하는 것을 추천합니다.

kubectl의 역할은 쿠버네티스의 상태를 확인하고 원하는 상태를 요청하는 것입니다. 추가로 컨테이너 로그도 확인하고 원격으로 접속할 수 있습니다.

kubectl의 명령어를 익히고 앞으로 실습할 각종 오브젝트(Pod, ReplicaSet, Deployment, Service, ...)의 사용법을 알면 사실상 쿠버네티스의 동작 원리는 다 이해했다고 볼 수 있습니다. ~~👨‍🎨 참 쉽죠?!~~

[[toc]]

## kubectl 명령어

| 명령어     | 설명                                                                  |
| ---------- | --------------------------------------------------------------------- |
| `apply`    | 원하는 상태를 적용합니다. 보통 `-f` 옵션으로 파일과 함께 사용합니다.  |
| `get`      | 리소스 목록을 보여줍니다.                                             |
| `describe` | 리소스의 상태를 자세하게 보여줍니다.                                  |
| `delete`   | 리소스를 제거합니다.                                                  |
| `logs`     | 컨테이너의 로그를 봅니다.                                             |
| `exec`     | 컨테이너에 명령어를 전달합니다. 컨테이너에 접근할 때 주로 사용합니다. |
| `config`   | kubectl 설정을 관리합니다.                                            |

:::tip alias로 편하게
`kubectl`명령어가 은근 오타가 잘나기 때문에 `k`로 줄여쓰면 편합니다.

```sh
# alias 설정
alias k='kubectl'

# shell 설정 추가
echo "alias k='kubectl'" > ~/.bashrc
source ~/.bashrc
```

:::

## 상태 설정하기 (apply)

[준비하기#워드프레스 배포](./#워드프레스-배포)에서 사용한 명령어입니다. 원하는 리소스의 상태를 YAML로 작성하고 apply 명령어로 선언합니다.

<usage text="kubectl apply -f [파일명 또는 URL]" />

특이한 점은 파일명뿐 아니라 URL도 입력이 가능하다는 것입니다. 실제로 많은 예제가 URL을 제공하고 있습니다.

여기서는 워드프레스를 다시 배포하겠습니다.

```sh
# 다시 한번 워드프레스 배포하기 (URL로!)
kubectl apply -f https://subicura.com/k8s/code/guide/index/wordpress-k8s.yml
```

## 리소스 목록보기 (get)

쿠버네티스에 선언된 리소스를 확인하는 명령어는 다음과 같습니다.

<usage text="kubectl get [TYPE]" />

다양한 옵션들이 있는데 여기서는 출력 형태를 변경할 수 있는 `-o`와 레이블을 확인할 수 있는 `--show-labels`를 알아봅니다.

이전에 생성한 워드프레스와 MySQL 목록을 확인해봅니다.

```sh
# Pod 조회
kubectl get pod

# 줄임말(Shortname)과 복수형 사용가능
kubectl get pods
kubectl get po

# 여러 TYPE 입력
kubectl get pod,service
#
kubectl get po,svc

# Pod, ReplicaSet, Deployment, Service, Job 조회 => all
kubectl get all

# 결과 포멧 변경
kubectl get pod -o wide
kubectl get pod -o yaml
kubectl get pod -o json

# Label 조회
kubectl get pod --show-labels
```

## 리소스 상세 상태보기 (describe)

쿠버네티스에 선언된 리소스의 상세한 상태를 확인하는 명령어는 다음과 같습니다.

<usage text="kubectl describe [TYPE]/[NAME] 또는 [TYPE] [NAME]" />

특정 리소스의 상태가 궁금하거나 생성이 실패한 이유를 확인할 때 주로 사용합니다. 워드프레스 Pod이 언제 생성되었고 어떤 상태인지 상세하게 알아봅니다.

```sh
# Pod 조회로 이름 검색
kubectl get pod

# 조회한 이름으로 상세 확인
kubectl describe pod/wordpress-5f59577d4d-8t2dg # 환경마다 이름이 다릅니다
```

## 리소스 제거 (delete)

쿠버네티스에 선언된 리소스를 제거하는 명령어는 다음과 같습니다.

<usage text="kubectl delete [TYPE]/[NAME] 또는 [TYPE] [NAME]" />

워드프레스 Pod을 제거해보겠습니다.

```sh
# Pod 조회로 이름 검색
kubectl get pod

# 조회한 Pod 제거
kubectl delete pod/wordpress-5f59577d4d-8t2dg
```

::: warning Pod을 제거해도 자꾸 살아납니다
정상적인 결과입니다. 잠시 후 배울 ReplicaSet이 Pod의 개수를 유지해줍니다.
:::

## 컨테이너 로그 조회 (logs)

컨테이너의 로그를 확인하는 명령어는 다음과 같습니다.

<usage text="kubectl logs [POD_NAME]" />

실시간 로그를 보고 싶다면 `-f` 옵션을 이용하고 하나의 Pod에 여러 개의 컨테이너가 있는 경우는 `-c` 옵션으로 컨테이너를 지정해야 합니다. 워드프레스 로그를 확인해보겠습니다.

```sh
# Pod 조회로 이름 검색
kubectl get pod

# 조회한 Pod 로그조회
kubectl logs wordpress-5f59577d4d-8t2dg

# 실시간 로그 보기
kubectl logs -f wordpress-5f59577d4d-8t2dg
```

## 컨테이너 명령어 전달 (exec)

컨테이너에 접속하는 명령어는 다음과 같습니다.

<usage text="kubectl exec [-it] [POD_NAME] -- [COMMADN]" />

쉘로 접속하여 컨테이너 상태를 확인하는 경우에 `-it` 옵션을 사용하고 여러 개의 컨테이너가 있는 경우엔 `-c` 옵션으로 컨테이너를 지정합니다. 워드프레스 컨테이너에 접속해봅니다.

```sh
# Pod 조회로 이름 검색
kubectl get pod

# 조회한 Pod의 컨테이너에 접속
kubectl exec -it wordpress-5f59577d4d-8t2dg -- bash
```

## 설정 관리 (config)

kubectl은 여러 개의 쿠버네티스 클러스터를 컨텍스트<sup>context</sup>로 설정하고 필요에 따라 선택할 수 있습니다. 현재 어떤 컨텍스트로 설정되어 있는지 확인하고 원하는 컨텍스트를 지정합니다.

```sh
# 현재 컨텍스트 확인
kubectl config current-context

# 컨텍스트 설정
kubectl config use-context minikube
```

## 그외

```sh
# 전체 오브젝트 종류 확인
kubectl api-resources

# 특정 오브젝트 설명 보기
kubectl explain pod
```

## 마무리

지금까지 배운 명령어는 그야말로 아주 기본이 되는 명령어입니다. kubectl은 더 많은 명령어와 옵션을 가지고 있는데, 필요에 따라 하나씩 익혀나가면 됩니다.

워드프레스 리소스를 제거합니다.

```sh
kubectl delete -f https://subicura.com/k8s/code/guide/index/wordpress-k8s.yml
```
