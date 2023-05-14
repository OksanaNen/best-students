1. Склонировать репозиторий в локальную папку:
```bash
git clone https://github.com/OksanaNen/best-students.git
```
2. Установить модули:
```bash
npm i
```
3. Запустить тесты:
```bash
npm test
```

# Покрытие кода

Установить плагин **babel-plugin-istanbul**:
```bash
npm install --save-dev babel-plugin-istanbul
```
Получить покрытие кода:
```bash
npx jest --coverage
```
Просмотреть напечатанную информацию из командной строки, а также дополнительную информацию можно через папку **cover/lcov-report**, файл **index.html**. Файл **index.html** открыть в браузере.

Измеряется процент покрытия функций и процент покрытия строк. 
