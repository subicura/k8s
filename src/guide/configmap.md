---
description: 쿠버네티스에서 설정파일과 환경변수를 관리하는 방법을 알아봅니다.
image: /imgs/hero.png
---

# ConfigMap

::: tip ⚡️ 목표
쿠버네티스에서 설정파일과 환경변수를 관리하는 방법을 알아봅니다.
:::

컨테이너에서 설정 파일을 관리하는 방법은 이미지를 빌드할 때 복사하거나, 컨테이너를 실행할 때 외부 파일을 연결하는 방법이 있습니다. 쿠버네티스는 `ConfigMap`으로 설정을 관리합니다.

[[toc]]

## ConfigMap 만들기

파일을 통째로 ConfigMap으로 만든 다음 컨테이너에서 사용하는 방법을 알아봅니다.

<<< @/src/.vuepress/public/code/guide/configmap/config-file.yml
<code-link link="guide/configmap/config-file.yml"/>

먼저, ConfigMap을 만듭니다. `--from-file` 옵션을 이용하여 file을 설정으로 만듭니다.

```sh
# ConfitMap 생성 configmap -> cm
kubectl create cm my-config --from-file=config-file.yml

# ConfitMap 조회
kubectl get cm

# ConfigMap 내용 상세 조회
kubectl describe cm/my-config
```

생성한 ConfigMap을 `/etc/config` 디렉토리에 연결합니다.

<<< @/src/.vuepress/public/code/guide/configmap/alpine.yml
<code-link link="guide/configmap/alpine.yml"/>

volume을 연결하여 배포하고 확인합니다.

```sh
kubectl apply -f alpine.yml

# 접속 후 설정 확인
kubectl exec -it alpine -- ls /etc/config
kubectl exec -it alpine -- cat /etc/config/config-file.yml
```

## env 파일로 만들기

env 포멧을 그대로 사용합니다.

<<< @/src/.vuepress/public/code/guide/configmap/config-env.yml
<code-link link="guide/configmap/config-env.yml"/>

`env-config`로 만듭니다.

```sh
# env 포멧으로 생성
kubectl create cm env-config --from-env-file=config-env.yml

# env-config 조회
kubectl describe cm/env-config
```

## YAML 선언하기

ConfigMap을 YAML파일로 정의합니다.

<<< @/src/.vuepress/public/code/guide/configmap/config-map.yml
<code-link link="guide/configmap/config-map.yml"/>

`config-map.yml` 적용 후 마운트 된 내용을 확인합니다.

```sh
# 기존 configmap 삭제
kubectl delete cm/my-config

# configmap 생성
kubectl apply -f config-map.yml

# alpine 적용
kubectl apply -f alpine.yml

# 적용내용 확인
kubectl exec -it alpine -- cat /etc/config/multiline
```

## ConfigMap을 환경변수로 사용하기

ConfigMap을 volume이 아닌 환경변수로 설정합니다.

<<< @/src/.vuepress/public/code/guide/configmap/alpine-env.yml
<code-link link="guide/configmap/alpine-env.yml"/>

환경변수를 확인합니다.

```sh
kubectl apply -f alpine-env.yml

# env 확인
kubectl exec -it alpine-env -- env
```

## 마무리

ConfigMap은 쿠버네티스에서 각종 설정을 관리하는 가장 좋은 방법입니다. 실제 운영에서 자주 접하게 되므로 어떻게 사용하는지 확실하게 익혀두세요.

## 참고

[ConfigMap v1 core](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.20/#configmap-v1-core)
