---
description: 쿠버네티스에서 비밀번호, SSH 인증, TLS Secret과 같은 보안 정보를 관리하는 방법을 알아봅니다.
image: /imgs/share.png
---

# Secret

::: tip ⚡️ 목표
쿠버네티스에서 비밀번호, SSH 인증, TLS Secret과 같은 보안 정보를 관리하는 방법을 알아봅니다.
:::

쿠버네티스는 `ConfigMap`과 유사하지만, 보안 정보를 관리하기 위해 `Secret`을 별도로 제공합니다. ConfigMap과 차이점은 데이터가 `base64`로 저장된다는 점 말고는 거의 없습니다.

::: warning Secret은 암호화되지 않음
Secret은 보안 정보를 다루기 때문에 당연히 암호화될 거라고 생각할 수 있지만, 실제로는 그대로 저장됩니다. 따라서, etcd에 접근이 가능하다면 누구나 저장된 Secret을 확인할 수 있습니다. [vault](https://www.vaultproject.io/)와 같은 외부 솔루션을 이용하여 보안을 강화할 수 있습니다.
:::

## Secret 만들기

아이디와 패스워드를 Secret으로 저장하고 컨테이너에서 환경변수로 사용하는 방법을 알아봅니다.

<<< @/src/.vuepress/public/code/guide/secret/username.txt
<code-link link="guide/secret/username.txt"/>

<<< @/src/.vuepress/public/code/guide/secret/password.txt
<code-link link="guide/secret/password.txt"/>

Secret을 만들고 확인해봅니다.

```sh
# secret 생성
kubectl create secret generic db-user-pass --from-file=./username.txt --from-file=./password.txt

# secret 상세 조회
kubectl describe secret/db-user-pass

# -o yaml로 상세 조회
kubectl get secret/db-user-pass -o yaml

# 저장된 데이터 base64 decode
echo 'MXEydzNlNHI=' | base64 --decode
```

설정한 Secret을 환경변수로 연결합니다.

<<< @/src/.vuepress/public/code/guide/secret/alpine-env.yml
<code-link link="guide/secret/alpine-env.yml"/>

환경변수를 확인합니다.

```sh
kubectl apply -f alpine-env.yml

# env 확인
kubectl exec -it alpine-env -- env
```

## 마무리

Secret은 아직 완전히 믿고 사용할 수는 없습니다. 따라서, 정말 암호화가 중요한 경우라면 별도의 솔루션을 고려하는 것이 필요합니다.

## 참고

[Secret v1 core](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.23/#secret-v1-core)
