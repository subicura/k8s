---
title: 쿠버네티스, 도커 지원 중단
date: 2020-12-19
category: 관리
tags:
  - Docker
  - CRI
---

# 쿠버네티스, 도커 지원 중단

<blog-title-info :page="$page" />

쿠버네티스에서 도커 지원을 중단한다고 발표했습니다.

> Kubernetes is deprecating Docker as a container runtime after v1.20.

::: tip 한줄 요약
직접 쿠버네티스 클러스터를 설치하고 관리하지 않는다면 문제 없습니다.
:::

## 컨테이너 런타임

**컨테이너=도커**라고 생각할 정도로 도커의 인기가 압도적이지만, 도커 외에 [containerd](https://containerd.io/), [CRI-O](https://cri-o.io/), [Kata Containers](https://katacontainers.io/)를 이용하여 컨테이너를 관리할 수 있습니다. 컨테이너를 관리하는 프로그램을 보통 [컨테이너 런타임](https://kubernetes.io/ko/docs/setup/production-environment/container-runtimes/)이라고 합니다.

도커를 빌드했을 때 결과물인 이미지는 [OCI(Open container initiative)](https://opencontainers.org/)라는 표준을 따르기 표준 포맷을 지원하는 다른 런타임도 사용할 수 있습니다. 사실 containerd는 도커에 포함된 컨테이너 런타임으로 도커와 완전히 다른 프로그램이 아니라 도커를 사용한다면 containerd를 사용하는 것입니다.

도커는 올인원 패키지로 하는 일이 많습니다.

- CLI
- API
- Server (Docker engine)
- Container Runtime (containerd)
- Volume
- Network
- Build

저 기능 중에 쿠버네티스가 사용하는 부분은 **Container Runtime** 뿐입니다.

- ~~CLI, API~~ → Kubernete CLI
- ~~Volume~~ → Kubernetes Volume
- ~~Network~~ → Kubernetes Network
- **Build** - 여전히 도커를 많이 사용할 것으로 예상

### CRI

쿠버네티스는 CRI(container runtime interface)라는 것을 이용하여 컨테이너 런타임과 통신하는데 도커는 해당 인터페이스를 지원하지 않아 Dockershim이라는 추가 레이어를 통해 연동하였습니다. 이번 발표는 Dockershim이 deprecated 된다는 내용입니다. 추가적인 레이어를 제거하고 직접적으로 CRI를 사용하면 관리가 더 깔끔하겠죠?

<img :src="$withBase('/imgs/archive/2020-12-19-deprecate-docker/dockershim.jpg')" alt="기존 도커 방식">

Dockershim이 deprecated되면 CRI를 지원하는 containderd 또는 CRI-O를 사용하면 됩니다. containerd는 사실상 도커이기 때문에 기존 쿠버네티스 사용자는 전혀 차이가 없고 추가로 취할 조치도 없습니다.

> You do not need to panic. It’s not as dramatic as it sounds.

### 조치

쿠버네티스 클러스터를 자체 구축한 경우엔 조치가 필요합니다.

- 쿠버네티스 사용자 - 평소처럼 YAML 만들고 배포하세요
- 클라우드 쿠버네티스 서비스 관리자 - 컨테이나 런타임 설치를 클라우드에서 관리하기 때문에 버전 업데이트하면 자동으로 바뀝니다.
- 자체구축 쿠버네티스 서비스 관리자 - **컨테이너 런타임 변경** 또는 **Dockershim 설치**

Dockershim은 2021년 말에 최종 deprecated 될 예정이지만, [Mirantis에서 지원](https://www.mirantis.com/blog/mirantis-to-take-over-support-of-kubernetes-dockershim-2/)할 예정입니다.

### 도커 안쓰나요?

도커는 여전히 개발용, 이미지 빌드 역할로 많이 사용될 것입니다.

### 참고링크

- [Don't Panic: Kubernetes and Docker](https://kubernetes.io/blog/2020/12/02/dont-panic-kubernetes-and-docker/)
- [The myths of deprecating docker in kubernetes](https://www.slideshare.net/JoHoon1/the-myths-of-deprecating-docker-in-kubernetes)
