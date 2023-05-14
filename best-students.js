// Домашнее задание 10.2 (55 баллов)
// Срок сдачи задания - до 15.05
//  Задача: студенты получают дополнительные баллы за успешное и самое быстрое завершение практической работы, 
//  для этого нам необходимо вычислить данных студентов. Дан объект с набором данных разных студентов, 
//  в котором необходимо вычислить студента с максимальным количеством баллов - в консоли вывести поздравления для данного студента.

//  Измерить покрытие и покрыть тестами на 100% по веткам и строкам (при необходимости добавить еще тесты и/или тестовые данные). 
//  Пример 3х наборов тестовых данных здесь - https://drive.google.com/file/d/1q63tCl_86YHxPJ_SGy085YimrrY-7Kw_/view?usp=sharing). 
//  1 массив - 1 группа студентов. В файле 3 набора тестовых данных.
// В readme добавить описание работы вашего проекта, его запуск и настройку для будущих коллег, а также инфо относительно измерения 
// покрытия в вашем проекте - что измеряете, как настраивать и запускать.


// Приложите ссылку на коммит в вашем удаленном репозитории
// Приложите ссылку на коммит/ы с данными изменениями, в названии коммита обязательно указать номер ДЗ

// Дополнительное (необязательное, но важное для вашей практики) задание:
// Добавить парамеризованные тесты.


function findBestStudent(studentsData) {
  let bestStudent = null;

  for (let student of studentsData) { 
    if (bestStudent) {
      if (student.score > bestStudent.score){
        bestStudent = student;
      } else if (student.score === bestStudent.score) {
        
        const bestStudentDate = new Date(bestStudent.date);
        const studentDate = new Date(student.date);
        
        if (!isNaN(studentDate) && !isNaN(bestStudentDate)) {
          if (studentDate < bestStudentDate) {
            bestStudent = student;
          }
        } else if (isNaN(bestStudentDate) && !isNaN(studentDate)) {
          bestStudent = student;
        }        
      }
    } else {
      bestStudent = student;
    }
  }

   console.log(`Поздравляем, ${bestStudent.name}, Вы студент с максимальным количеством баллов: ${bestStudent.score}!`);

  return bestStudent;
}

module.exports = findBestStudent;
