---
description: Pod 안의 컨테이너 간 디렉토리를 공유하는 방법과 컨테이너의 특정 디렉토리를 호스트 디렉토리와 연결하는 방법을 알아봅니다.
image: /imgs/hero.png
---

# Volume (local)

::: tip ⚡️ 목표
Pod 안의 컨테이너 간 디렉토리를 공유하는 방법과 컨테이너의 특정 디렉토리를 호스트 디렉토리와 연결하는 방법을 알아봅니다.
:::

지금까지 만들었던 컨테이너는 Pod을 제거하면 컨테이너 내부에 저장했던 데이터도 모두 사라집니다. MySQL과 같은 데이터베이스는 데이터가 유실되지 않도록 반드시 별도의 저장소에 데이터를 저장하고 컨테이너를 새로 만들 때 이전 데이터를 가져와야 합니다.

쿠버네티스는 Volume을 이용하여 컨테이너의 디렉토리를 외부 저장소와 연결하고 다양한 플러그인을 지원하여 흔히 사용하는 대부분의 스토리지를 별도 설정없이 사용할 수 있습니다.

실전에서는 awsElasticBlockStore(aws), azureDisk(azure), gcePersistentDisk(google cloud)와 같은 volume을 사용하지만 이를 테스트하기 위해서는 실제 클라우드를 사용해야 하므로 이번엔 간단하게 로컬 저장소를 사용하는 법만 알아봅니다.

[[toc]]

::: warning PV/PVC
데이터 저장이 필요한 경우에 흔히 Persistent Volume(PV), Persistent Volume Claim(PVC)를 사용합니다. 이 내용은 실제 클라우드 설정 후 테스트할 예정입니다.
:::

## Volume 만들기

### empty-dir

Pod 안에 속한 컨테이너 간 디렉토리를 공유하는 방법을 알아봅니다.

보통 사이드카<sup>sidecar</sup>라는 패턴에서 사용합니다. 예를 들면, 특정 컨테이너에서 생성되는 로그 파일을 별도의 컨테이너(사이드카)가 수집 할 수 있습니다.

<div style="text-align: center">
  <img src="./imgs/guide/volume/empty-dir.png" alt="empty-dir" style="width: 280px; max-width: 100%" />
</div>

`app` 컨테이너는 `/var/log/example.log`에 로그 파일을 만들고 `sidecar` 컨테이너는 해당 로그 파일을 처리하도록 합니다.

<<< @/src/.vuepress/public/code/guide/local-volume/empty-dir.yml
<code-link link="guide/local-volume/empty-dir.yml"/>

배포 후 `sidecar`의 로그를 확인합니다.

```sh
kubectl apply -f empty-dir.yml

# sidecar 로그 확인
kubectl logs -f sidecar -c sidecar
```

`app` 컨테이너에서 생성한 로그파일을 `sidecar` 컨테이너에서 처리하는 모습을 볼 수 있습니다.

### hostpath

호스트 디렉토리를 컨테이너 디렉토리에 연결하는 방법을 알아봅니다. 여기서는 호스트의 `/var/log` 디렉토리를 연결하여 내용을 확인해 보겠습니다.

<div style="text-align: center">
  <img src="./imgs/guide/volume/hostpath.png" alt="hostpath" style="width: 420px; max-width: 100%" />
</div>

호스트의 `/var/log`를 컨테이너의 `/host/var/log` 디렉토리로 마운트합니다.

<<< @/src/.vuepress/public/code/guide/local-volume/hostpath.yml
<code-link link="guide/local-volume/hostpath.yml"/>

컨테이너에서 마운트 된 디렉토리를 확인합니다.

```sh
kubectl apply -f hostpath.yml

# 컨테이너 접속 후 /host/var/log 디렉토리를 확인
kubectl exec -it host-log -- sh
ls -al /host/var/log
```

## 마무리

쿠버네티스는 volume을 연결하는 방법을 추상화하고 다양한 플러그인을 지원합니다. 따라서, 설정하는 법이 조금 복잡해 보일 수 있지만 한번 Spec을 이해하면 다른 volume도 쉽게 연결할 수 있습니다.

## 참고

[Volume v1 core](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.20/#volume-v1-core)
