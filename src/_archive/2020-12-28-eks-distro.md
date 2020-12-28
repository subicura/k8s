---
title: Amazon EKS Distro - Amazon EKS에서 사용하는 오픈소스 Kubernetes 배포판
date: 2020-12-28
category: 설치
tags:
  - EKS
description: Amazon EKS에서 배포한 것과 동일한 Kubernetes 배포판 버전을 발표했습니다.
image: /imgs/archive/2020-12-28-eks-distro/share.png
---

# Amazon EKS Distro - Amazon EKS에서 사용하는 오픈소스 Kubernetes 배포판

<blog-title-info :page="$page" />

![EKS Distro](/k8s/imgs/archive/2020-12-28-eks-distro/eks-distro.png)

EKS Distro는 Amazon EKS에서 배포한 것과 동일한 Kubernetes 배포판 버전으로, 어디서든 자신의 Kubernetes 클러스터를 수동으로 생성할 수 있습니다. EKS Distro는 Amazon EKS에서 사용하는 오픈 소스 Kubernetes의 설치 가능한 빌드 및 코드를 제공합니다. 여기에는 종속성 및 AWS에서 관리하는 패치 등이 포함됩니다. 클러스터 생성 및 관리 도구를 선택하여 Amazon Elastic Compute Cloud(EC2), 기타 클라우드 및 온프레미스 하드웨어에서 AWS에 EKS Distro 클러스터를 생성할 수 있습니다.

EKS Distro는 업스트림 오픈 소스 Kubernetes 구성 요소와 클러스터 생성에 필요한 구성 데이터베이스, 네트워크, 스토리지 구성 요소 등의 타사 도구로 구성되어 있습니다. 이는 Kubernetes 제어부 구성 요소(kube-controller-manager, etcd 및 CoreDNS)와 Kubernetes 작업자 노드 구성 요소(kubelet, CNI 플러그인, CSI Sidecar 이미지, Metrics Server 및 AWS-IAM-authenticator)을 포함합니다.

## 주요사항

- 업데이트: EKS Distro의 새 버전은 Amazon EKS 출시 후에 곧 출시될 예정입니다.
- 주요 사항: EKS Distro에서는 Amazon EKS에서 사용하는 것과 동일한 버전의 Kubernetes 및 포인트 릴리스를 지원합니다.
- 가격 및 지원: EKS Distro는 오픈 소스 프로젝트이며 무료로 배포됩니다.
- 향후 계획: 2021년에는 Kubernetes 클러스터를 온프레미스에서 생성 및 운영할 수 있는 설치형 소프트웨어 패키지와 클러스터 수명 주기 지원을 위한 자동화 도구를 제공하는 EKS Anywhere를 출시할 예정입니다.

## 참고

- [Amazon EKS Distro](https://distro.eks.amazonaws.com/)
- [Amazon Web Services 한국 블로그](https://aws.amazon.com/ko/blogs/korea/amazon-eks-distro-the-kubernetes-distribution-used-by-amazon-eks/)
- [GitHub repository](https://github.com/aws/eks-distro/)
