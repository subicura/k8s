---
title: Kubernetes Cluster를 실제 프로덕션 환경에 부드럽게 랜딩시키기 - 박인혜
date: 2020-12-21
category: 관리
tags:
  - Production
description: 쿠버네티스 클러스터를 Staging 환경에서 운영하다 production 환경으로 넘어왔을때 겪을수 있는 다양한 이슈들과 해결 방법에 대해 알아봅니다.
image: /imgs/archive/2020-12-21-k8s-cluster-production-landing/share.png
---

# Kubernetes Cluster를 실제 프로덕션 환경에 부드럽게 랜딩시키기 - 박인혜

<blog-title-info :page="$page" />

[CNCG Seoul 2020](https://cncg-kr.net/) 박인혜님 발표입니다.

쿠버네티스 클러스터를 Staging 환경에서 운영하다 production 환경으로 넘어왔을때 겪을수 있는 다양한 이슈들과 해결 방법에 대해 메모리, 디스크, IO, SNAT Port, DNS Resolve 관점에서 실제 보여지는 증상과 해결방법에 대해 공유합니다.

## 주요 내용

일반적으로 겪을 수 있는 이슈들과 해결방법

- Memory overload
- IO overload
- SNAT port exhaustion
- Control plan overload
- Insufficient quota
- Network misconfiguration
- Problematic Admission Controller

<youtube video-id="Gx0_zXFg0m4" />
