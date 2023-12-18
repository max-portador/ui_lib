check_status() {
    if [ $? -ne 0 ]; then
        echo "Ошибка при выполнении $1, применяю исправления..."
        npm run $2
        echo "Повторное выполнение $1 после исправления..."
        npm run $3
        if [ $? -ne 0 ]; then
            echo "Ошибка при повторном выполнении $1 даже после применения исправлений. Остановка скрипта."
            exit 1
        fi
    fi
}

echo "Запускаю unit-тесты"
npm run test:unit
if [ $? -ne 0 ]; then
    echo "Ошибка при выполнении unit-тестов..."
    exit 1
fi


echo "Запускаю проверку TypeScript..."
npm run lint:ts
check_status "lint:ts" "lint:ts:fix" "lint:ts"

echo "Запускаю lint:scss..."
npm run lint:scss:fix
check_status "lint:css" "lint:scss:fix" "lint:css"

echo "Запускаю prettier..."
npm run prettier
if [ $? -ne 0 ]; then
    echo "Ошибка при выполнении prettier..."
    exit 1
fi

echo "Все проверки успешно выполнены!"