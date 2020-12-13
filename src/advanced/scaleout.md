# Autoscaler

- ScaleOut (HorizontalPodAutoscaler)
  - metrics server
  - HPA
  - 부하 테스트

## 부하 테스트

<<< @/src/.vuepress/public/code/guide/scaleout/hpa-example.yml
`guide/scaleout/hpa-example.yml`

```sh
$ kubectl run -it load-generator --image=busybox /bin/sh
# while true; do wget -q -O- http://hpa-example; done

$ kubectl exec -it load-generator -- sh
# while true; do wget -q -O- http://hpa-example; done

$ kubectl get pods -w
```
