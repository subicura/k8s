---
title: k8s 필수 애플리케이션, 테라폼으로 한번에 설치하기
date: 2020-12-18
category: 설치
tags:
  - EKS
  - Terraform
  - Helm
---

# k8s 필수 애플리케이션, 테라폼으로 한번에 설치하기

<blog-title-info :page="$page" />

Terraform의 kubernetes, helm 프로바이더에 대해 알아봅니다.

Terraform으로 EKS클러스터를 만들고 필수 애플리케이션을 별도 kubectl, helm 명령어 없이 설치합니다.

## 주요 내용

- terraform으로 EKS 클러스터 구성하기
- terraform에서 kubenetes provider 사용하기
- terraform에서 helm provider 사용하이
- terraform에서 yaml 설정파일 동적으로 관리하기

<youtube video-id="mzdFK8re_ig" />

## 참고

- [terraform-aws-eks](https://registry.terraform.io/modules/terraform-aws-modules/eks/aws/latest)
- [terraform-provider-kubernetes](https://registry.terraform.io/providers/hashicorp/kubernetes/latest)
- [terraform-provider-helm](https://registry.terraform.io/providers/hashicorp/helm/latest)
