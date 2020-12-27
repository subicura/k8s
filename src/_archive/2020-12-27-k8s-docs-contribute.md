---
title: 쿠버네티스 문서 한글화 가이드
date: 2020-12-27
category: 문서
tags:
  - Contribute
  - Document
description: 쿠버네티스 문서 한글화를 위한 가이드를 알아봅니다.
image: /imgs/archive/2020-12-26-line-shopping-k8s/share.png
---

# 쿠버네티스 문서 한글화 가이드

<blog-title-info :page="$page" />

쿠버네티스를 접할 때 가장 큰 도움이 되는 것이 고품질의 한글 공식 문서들입니다. 어떻게 관리되고 어떻게 참여할 수 있는지 알아봅니다.

다음은 한글화팀의 1.20 공지사항 요약입니다.

---

최근 쿠버네티스의 1.20 릴리스에 따라, 한글화 팀에서도 1.19 한글화 작업을 마무리하고, 1.20에 대한 한글화 작업에 착수하였습니다.

## 한글화 현황

1. 1.19 한글화는 7개의 작업 브랜치(dev-1.19-ko-1 ~ dev-1.19-ko.7)를 통해 진행되었습니다. (2020/09 ~2020/12)
2. 1.19 한글화 작업을 위해서 59건의 PR 컨트리뷰션이 있었습니다.
3. release-1.19는 674개의 영문 문서(docs/의 \*.md 카운트)로 구성되어 있으며, 그 중 357개 문서의 한글화가 완료되었습니다.

## 한글화 컨트리뷰터 및 운영진, 컨트리뷰터 리스트 <Badge text="dev-1.19-ko" type="tip"/>

- Arhell (Ihor Sychevskyi)
- bluefriday (heechang lee)
- chhanz (한철희)
- coolguyhong (coolguyhong)
- gochist (이덕준)
- jihoon-seo (서지훈)
- jmy1223kim (김지명)
- jmyung (명제상)
- JonghunBok (박종훈)
- junghyeonsu (junghyeonsu)
- kosehy (고승현)
- Leo7654 (이호진)
- markruler (임창수)
- mylovepooh (JunSeok Kim)
- neutiyoo (Noel)
- pjhwa (박재화)
- santachopa (santachopa)
- seokho-son (손석호)
- sushil97 (Sushil Tiwari)
- yoonian (윤평호)
- Yuuraa (최유라)

한글화팀 운영진

- 팀장: 손석호
- 승인자: 이덕준, 강주희, 최영락, 손석호, 육용수
- 리뷰어: 이덕준, 강주희, 최영락, 손석호, 육용수, 박재화
- 멤버: 이덕준, 강주희, 최영락, 손석호, 육용수, 김영대, 명제상, 나우진, 윤평호, 김철구, 박재화, 고승현

## 한글화 참여하기

번역된 문서는 [https://kubernetes.io/ko/docs/home/](https://kubernetes.io/ko/docs/home/)에서 확인, 또는 [kubernetes.io](https://kubernetes.io) 페이지 우측 상단의 언어 옵션을 한국어로 선택하면 번역된 문서로 전환됩니다.

아직 번역되지 않은 문서가 많이 남아 있습니다. 누구나 이슈, PR을 등록하고 리뷰할 수 있습니다!

1. 한글화팀 Slack 채널: Kubernetes Slack 가입 후, #kubernetes-docs-ko 채널 참여
2. 한글화팀 회의: 격주 목요일 22시 ~ 23시. Zoom(Slack으로 링크 공유)에서 열립니다. ([회의록](https://goo.gl/1gZ45u))
3. 문서 기여 방법: [https://github.com/kuber.../website/blob/master/README-ko.md](https://github.com/kubernetes/website/blob/master/README-ko.md?fbclid=IwAR0d1jTxpqsvK6CEaNCbNlTeuMHs-VrHx-LziSG_3g_1ZYURZ6bc_l0m5R4)
4. 문서 한글화 가이드: [https://kubernetes.io/ko/docs/contribute/localization_ko/](https://kubernetes.io/ko/docs/contribute/localization_ko/)
5. 초간단 쿠버네티스 문서 한글화 시작 가이드 (YouTube): [https://youtu.be/OTl8HBjxIhc](https://youtu.be/OTl8HBjxIhc)

## 참고

- [Kubernetes Korea Group](https://www.facebook.com/groups/k8skr)
- [Kubernetes Korea Group 한글화 소식](https://www.facebook.com/groups/k8skr/permalink/2911998235748497/)
- [Kubernetes 한글화 가이드](https://kubernetes.io/ko/docs/contribute/localization_ko/)
