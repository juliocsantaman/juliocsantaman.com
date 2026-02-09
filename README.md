# 1️⃣ Build Angular
npx ng build --configuration production --base-href /

# 2️⃣ Cambiar a gh-pages
git checkout gh-pages

# 3️⃣ Limpiar todo excepto CNAME
git rm -rf .
git reset HEAD CNAME

# 4️⃣ Copiar archivos de dist a la rama
robocopy "dist\web-site" "." /mir

# 5️⃣ Commit y push
git add .
git commit -m "Deploy Angular app a GitHub Pages"
git push origin gh-pages

# 6️⃣ Volver a main
git checkout main
