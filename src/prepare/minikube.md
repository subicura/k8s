---
description: minikube에서 제공하는 추가 기능을 알아봅니다.
image: /imgs/share.png
---

# minikube 고급기능

::: tip ⚡️ 목표
minikube에서 제공하는 추가 기능을 알아봅니다.
:::

[[toc]]

## 다중노드

최신 minikube 버전을 사용한다면, 다중노드를 구성할 수 있습니다.

```sh
# 가상머신 시작 (단일노드, 기본)
minikube start

# 가상머신 시작 (단중노드)
minikube start -n 2
```

## 멀티 프로필

하나의 개발피시에 여러개의 minikube를 사용할 수 있습니다.

```sh
# 가상머신 시작
minikube start # 기본 profile - minikube로 생성

# 두번째 가상머신 시작
minikube start -p hellowlrd # helloworld 라는 이름의 profile로 생성

# profile 목록 확인
minikube profile list

# 현재 사용중인 profile 확인
minikube profile

# 다른 profile로 변경
minikube profile hellowlrd # helloworld로 변경
minikube profile minikube # minikube로 변경

# 가상머신 제거
minikube delete # 현재 사용중인 profile의 가상머신 제거
```
