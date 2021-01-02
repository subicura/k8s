---
title: Docker Hub Pull 횟수 6시간에 100회 제한 정책
date: 2021-01-02
category: 도커
tags:
  - Docker
description: Docker Hub에서 무제한 다운로드 정책을 종료했습니다.
image: /imgs/archive/2021-01-02-docker-hub-pull-limit/share.png
---

# Docker Hub Pull 횟수 6시간에 100회 제한 정책

<blog-title-info :page="$page" />

Docker Hub는 대용량의 컨테이너 이미지를 손쉽게 보관하고 사용할 수 있는 곳입니다. 작게는 수백Mb부터 크게는 1Gb가 넘는 이미지를 저장할 수 있고 공개된 이미지라면 누구나 무제한으로 다운받아 사용할 수 있습니다.

도커에선 "약 1%정도의 익명의 사용자가 Docker Hub 전체 다운로드의 30%를 사용" 한다고 말하면서 기존 무제한 다운로드 정책에서 제한된 정책을 발표했습니다.

## Docker Hub Rate Limit

Docker Hub 정책은 다음과 같습니다.

| 유저                                      | 제한                                       |
| ----------------------------------------- | ------------------------------------------ |
| 익명 유저(docker login 안함)              | IP 기반으로 6시간동안 100번 request 제한   |
| 로그인 유저(docker login 함)              | 계정 기반으로 6시간동안 200번 request 가능 |
| 지불 계정 유저(docker login 한 Paid 유저) | 제한 없음                                  |

::: warning
지불 유저의 경우도 [IP 기반 제한](https://www.facebook.com/groups/k8skr/permalink/2917497448531909/)이 있다고 합니다. 공개 저장소를 대량으로 사용하는 경우 주의가 필요합니다.
:::

## 해결 방법

1. 유료 계정

`Pro`($5) 또는 `Team`($7) 이상 계정으로 업그레이드 합니다.

![EKS Distro](/k8s/imgs/archive/2021-01-02-docker-hub-pull-limit/docker-hub-pricing.png)

2. proxy 구축

내부에 별도 저장소를 설정하여 mirror/cache 용도로 사용하는 방법입니다. 그래도 요청이 많다면 문제가 생길수 있습니다.

[Harbor](https://goharbor.io/docs/2.1.0/administration/configure-proxy-cache/?fbclid=IwAR3-6nsvZinCE49Ga92eJGXkwEJeot8_Z9ZF0N3nuNjQ0yet54eEs1xDtnI)

3. 오픈 소스 지원

오픈 소스 프로젝트의 경우 제한없이 사용할 수 있도록 지원합니다.

[Open Source Community Application](https://www.docker.com/community/open-source/application?fbclid=IwAR2X0pI80JqhckHTTlaz7VF_KAg95aQVlCsco4vwFI2F0-dACuOc7kU4cio)

## 제한 확인하기

Docker Hub API는 응답 헤더에 다음 값을 보냅니다.

| 헤더 이름             | 설명                       |
| --------------------- | -------------------------- |
| `RateLimit-Limit`     | 6시간동안 가능한 전체 횟수 |
| `RateLimit-Remaining` | 6시간동안 가능한 남은 횟수 |

1. 익명 유저

100번 가능, 96회 남음 확인. IP를 바꾸면 초기화 됩니다.

```sh
$ TOKEN=$(curl "https://auth.docker.io/token?service=registry.docker.io&scope=repository:ratelimitpreview/test:pull" | jq -r .token)

$ curl --head -H "Authorization: Bearer $TOKEN" https://registry-1.docker.io/v2/ratelimitpreview/test/manifests/latest 2>&1 | grep RateLimit

< RateLimit-Limit: 100;w=21600
< RateLimit-Remaining: 96;w=21600
```

2. 로그인 유저

200번 가능, 176회 남음 확인. IP를 변경해도 유저 기반으로 결정합니다.

```sh
$ TOKEN=$(curl --user 'username:password' "https://auth.docker.io/token?service=registry.docker.io&scope=repository:ratelimitpreview/test:pull" | jq -r .token)

$ curl --head -H "Authorization: Bearer $TOKEN" https://registry-1.docker.io/v2/ratelimitpreview/test/manifests/latest 2>&1 | grep RateLimit

< RateLimit-Limit: 200;w=21600
< RateLimit-Remaining: 176;w=21600
```

3. 에러 메시지

제한에 걸렸을 경우 응답입니다.

```sh
HTTP/1.1 429 Too Many Requests
Cache-Control: no-cache
Connection: close
Content-Type: application/json
{
  "errors": [{
      "code": "TOOMANYREQUESTS",
      "message": "You have reached your pull rate limit. You may increase the limit by authenticating and upgrading: https://www.docker.com/increase-rate-limit"
  }]
}
```

## 쿠버네티스에서 로그인 계정 사용 방법

쿠버네티스에서 로그인 계정으로 Docker Hub에 접근 하려면 추가 설정이 필요합니다.

1. 인증정보를 추가
2. Pod 설정에 어떤 인증을 사용할지 명시
3. 매번 명시하기 귀찮은 경우 operator 이용

- [프라이빗 레지스트리에서 이미지 받아오기](https://kubernetes.io/ko/docs/tasks/configure-pod-container/pull-image-private-registry/)
- [registry-creds operator](https://github.com/alexellis/registry-creds)

## Docker Hub 대안

무료로 사용할 수 있는 또 다른 대안은 별도 registry를 사용하는 방법입니다.

- [GitHub Container Regsitry](https://docs.github.com/en/free-pro-team@latest/packages/guides/about-github-container-registry)
- [Amazon ECR Public](https://aws.amazon.com/ko/about-aws/whats-new/2020/12/announcing-amazon-ecr-public-and-amazon-ecr-public-gallery/)

## 참고

- [Understanding Docker Hub Rate Limiting](https://www.docker.com/increase-rate-limits)
- [Checking Your Current Docker Pull Rate Limits and Status](https://www.docker.com/blog/checking-your-current-docker-pull-rate-limits-and-status/)
- [k8s에서의 docker rate limit 문제 정리](https://gist.github.com/leoh0/e804a74b832671bd522dc4ca3390b7ce)
