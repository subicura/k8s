---
title: Kafka와 MongoDB, Kubernetes로 유연하고 확장 가능한 LINE 쇼핑 플랫폼 구축하기
date: 2020-12-26
category: 관리
tags:
  - Production
  - Kafka
  - MongoDB
description: LINE 쇼핑에서는 어떻게 4억 5천만 개의 상품을 처리할까? Kafka와 MongoDB를 쿠버네티스 위에서 운영합니다.
image: /imgs/archive/2020-12-26-line-shopping-k8s/share.png
---

# Kafka와 MongoDB, Kubernetes로 유연하고 확장 가능한 LINE 쇼핑 플랫폼 구축하기

<blog-title-info :page="$page" />

LINE 쇼핑에선 여러 판매자로부터 전달 받은 상품 정보를 한곳에 모아서 일정한 기준에 따라 분류하고, 그룹화한 뒤, 정렬하여 사용자들이 상품 정보를 쉽게 얻을 수 있도록 제공하고 있습니다. 네이버 쇼핑이나 다나와 등이 LINE 쇼핑과 동일한 모델이라고 할 수 있습니다.

LINE 쇼핑의 판매자는 경우에 따라 수십에서 수천만 개 이상의 상품 정보를 보유하고 있는데요. 이런 판매자들의 상품을 한곳에 모아서 서비스하려면 어떻게 플랫폼을 구축해야 할까요? 이 어려운 과제를 해결하기 위해 어떤 플랫폼을 구축했는지 소개합니다.

## 주요 내용

- 시스템 유연성 개선
  - 비용을 들인 만큼 처리량이 늘어나야 한다.
  - 처리량에 한계가 없어야 한다.
  - 서버를 유연(flexible)하게 사용할 수 있어야 한다.
- 시스템 구성
  - 이벤트 기반 데이터 처리 / Apache Kafka, Kafka Connect
  - 저장 공간에 제약이 없고 필요에 따라 확장할 수 있는 데이터베이스 / MongoDB
  - 빠르게 배포할 수 있고 필요에 따라 확장할 수 있는 서버 / Kubernetes

[더보기(원문)](https://engineering.linecorp.com/ko/blog/line-shopping-platform-kafka-mongodb-kubernetes/)

## 참고

- [KSQL](https://www.confluent.io/blog/ksql-streaming-sql-for-apache-kafka/)
