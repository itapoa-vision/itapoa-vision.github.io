.PHONY: dev build deploy clean

# itapoavision.github.io = user/org page → served at root → basePath empty
REPO_NAME :=

dev:
	npm run dev

build:
	NEXT_PUBLIC_REPO_NAME=$(REPO_NAME) npm run build
	touch out/.nojekyll

deploy: build
	npx gh-pages -d out -t true

clean:
	rm -rf out .next
