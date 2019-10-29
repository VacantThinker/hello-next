

---

#### 运行实例

- [hello-next](https://hello-next.vacantthinker.now.sh/)

#### 构建一次, 可运行多个实例


```json
{

  "scripts": {
    "dev": "next",
    "build": "next build",
    "start": "next start",
    "startWithPort": "next start -p %PORT%"
  }

}

```

```cmd
cross-env PORT=8000 npm run startWithPort
cross-env PORT=9000 npm run startWithPort

```

```cmd
C:\...\next-project>cross-env PORT=8000 npm run startWithPort

> hello-next@1.0.0 startWithPort C:\_diskd\WebstormProjects\hello-next
> next start -p %PORT%

> Ready on http://localhost:8000

```

-
    - localhost:8000
    - localhost:9000
    - 两个访问运行都正常

---
end
