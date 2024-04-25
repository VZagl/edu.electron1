### [Как получать обновления от родительского репозитория GitHub?](https://qna.habr.com/q/1321404)

Репозиторий созданный из шаблона, не содержит истории «родительского» репозитория. По факту это совершенно другой репозиторий, но созданный на основе последнего состояния проекта в шаблоне. Поэтому не получится так просто получить обновления, как это делается в форках.

Но можно склеить принудительно:

- Один раз настроить дочерний репозиторий:
  ```bash
  # Сохранить адрес шаблона в переменную template
  git remote add template https://github.com/OWNER/TEMPLATE.git
  ```
- Каждый раз, когда нужно получить обновления от родительского репозитория:

  ```bash
  # Скачать все обновления
  git fetch template
  # Попробовать сделать слияние ветки BRANCH-NAME шаблона с нашей текущей веткой
  git merge --allow-unrelated-histories template/BRANCH-NAME
  ```

Опция `--allow-unrelated-histories` нужна, так как истории веток никак не связаны.

---

- [Интегрируйте Tailwind CSS в Electron](https://blog.saeloun.com/2023/02/24/integrate-tailwind-css-with-electron/)
- [Tailwind CSS](https://tailwindcss.com/docs/installation)
  - [DaisyUI](https://daisyui.com)

---
