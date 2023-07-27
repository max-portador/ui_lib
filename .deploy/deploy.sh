cd ~/ui_lib
npm run build:prod

rm -rf ~/../var/www/ui_lib/html
mv ~/ui_lib/build  ~/../var/www/ui_lib/html
