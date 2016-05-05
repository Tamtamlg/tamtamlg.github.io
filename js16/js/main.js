window.addEventListener('load', function fullLoad() {
  'use strict';
  
  var Human = {
    name: 'Max',
    age: 30,
    sex: 'man',
    growth: 170,
    weight: 70
  }
  
  function Worker (placeOfWork, salary) {
    this.placeOfWork = placeOfWork;
    this.salary = salary;
  }
  
  Worker.prototype = Human;
  
  Worker.prototype.work = function () {
    alert('I work!');
  };
  
  var worker1 = new Worker ('Google', 5000);
  var worker2 = new Worker ('Yahoo', 4000);
  var worker3 = new Worker ('Yandex', 3000);
  console.log('worker1', worker1);
  console.log('worker2', worker2);
  console.log('worker3', worker3);
  console.log('worker1.name', worker1.name);
  console.log('worker2.age', worker2.age);
  console.log('worker3.sex', worker3.sex);
  worker3.work();
  
    function Student (placeOfStudy, scholarship) {
    this.placeOfStudy = placeOfStudy;
    this.scholarship = scholarship;
  }
  
  Student.prototype = Human;
  
  Student.prototype.watchSeries = function () {
    alert('I watch series!');
  };
  
  var student1 = new Student ('university', 500);
  var student2 = new Student ('colleg', 400);
  console.log('student1', student1);
  console.log('student2', student2);
  console.log('student1.growth', student1.growth);
  console.log('student2.weight', student2.weight);
  worker2.watchSeries();
  
  
});