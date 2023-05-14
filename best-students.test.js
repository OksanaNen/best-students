const findBestStudent = require('./best-students.js');

describe ("Находим лучшего студента", () => {

  const studentsDataGroupOne = 
  [
    { "name": "Olga", "score": 0, "date": ""             },
    { "name": "Stepan", "score": 35, "date": "2022-10-12"},
    { "name": "Zanna", "score": 15, "date": "2022-10-11" }
  ]; 

  const studentsDataGroupTwo =   
  [
    { "name": "Natalia", "score": 25, "date": "2022-10-11"},
    { "name": "Marina", "score": 25, "date": "2022-10-01" },
    { "name": "Dmitry", "score": 25, "date": "2022-10-12" }
  ];

  const studentsDataGroupThree =   
  [
    { "name": "Irina", "score": 0, "date": "2022-10-11"   },
    { "name": "Vasily", "score": 0, "date": "2022-10-10"  },
    { "name": "David", "score": 0, "date": ""             }
  ];

  const studentsDataGroupFour =   
  [
    { "name": "Irina", "score": 15, "date": ""             },
    { "name": "Vasily", "score": 15, "date": "2022-10-10"  },
    { "name": "David", "score": 15, "date": ""             }
  ];

  test ("Только один студент в группе имеет высший балл", () => {
    const bestStudent = findBestStudent(studentsDataGroupOne);
    expect(bestStudent.score).toBe(35);
    expect(bestStudent.name).toBe('Stepan');
  });

  test ("Два студента имеют одинаковый высший балл, но закончили задание в разные даты", () => {
    const bestStudent = findBestStudent(studentsDataGroupTwo);
    expect(bestStudent.score).toBe(25);
    expect(bestStudent.name).toBe('Marina');
  });

  test ("Все студенты имеют 0 баллов, но закончили задание в разные даты", () => {
    const bestStudent = findBestStudent(studentsDataGroupThree);
    expect(bestStudent.score).toBe(0);
    expect(bestStudent.name).toBe('Vasily');
  });

  test ("Все студенты имеют одинаковые баллы, но только у одного студента проставлена дата выполнения задания", () => {
    const bestStudent = findBestStudent(studentsDataGroupFour);
    expect(bestStudent.score).toBe(15);
    expect(bestStudent.name).toBe('Vasily');
  });

})
