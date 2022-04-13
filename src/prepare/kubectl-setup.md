---
description: 쿠버네티스에 명령을 전달하기 위한 kubectl 프로그램을 설치합니다.
image: /imgs/share.png
---

# kubectl 설치

::: tip ⚡️ 목표
쿠버네티스에 명령을 전달하기 위한 `kubectl` 프로그램을 설치합니다.
:::

`kubectl`은 쿠버네티스 CLI 도구입니다. 쿠버네티스 클러스터에 명령어를 전달하는 가장 흔한 방법이고 실습을 하면서 수십, 수백번 사용할 예정입니다.

[[toc]]

## 설치하기

kubectl `v1.23` 버전을 설치합니다.

### windows

```sh
curl -LO https://storage.googleapis.com/kubernetes-release/release/v1.23.5/bin/windows/amd64/kubectl.exe
```

### macOS

```sh
# homebrew를 사용하고 있다면..
brew install kubectl

# homebrew를 사용하지 않는다면, 직접 binary 다운로드
curl -LO https://storage.googleapis.com/kubernetes-release/release/v1.23.5/bin/darwin/amd64/kubectl \
  && chmod +x kubectl
```

### linux

```sh
curl -LO "https://storage.googleapis.com/kubernetes-release/release/$(curl -s https://storage.googleapis.com/kubernetes-release/release/stable.txt)/bin/linux/amd64/kubectl"
chmod +x ./kubectl
sudo mv ./kubectl /usr/local/bin/kubectl
```

## 테스트

```sh
kubectl version
```

**실행 결과**

```
Client Version: version.Info{Major:"1", Minor:"20", GitVersion:"v1.20.0", GitCommit:"af46c47ce925f4c4ad5cc8d1fca46c7b77d13b38", GitTreeState:"clean", BuildDate:"2020-12-08T17:59:43Z", GoVersion:"go1.15.5", Compiler:"gc", Platform:"darwin/amd64"}
Server Version: version.Info{Major:"1", Minor:"20", GitVersion:"v1.20.0", GitCommit:"af46c47ce925f4c4ad5cc8d1fca46c7b77d13b38", GitTreeState:"clean", BuildDate:"2020-12-08T17:51:19Z", GoVersion:"go1.15.5", Compiler:"gc", Platform:"linux/amd64"}
```
