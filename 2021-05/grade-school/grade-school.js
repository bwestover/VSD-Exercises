export class GradeSchool {
  model = {};

  roster() {
    //returns all students and what grade they are in
    for(const key in this.model){
      this.grade(key);
    }
    // protect your model reference
    return JSON.parse(JSON.stringify(this.model));
  }

  add(name, grade) {
    if(grade in this.model){
      this.model[grade].push(name);
      //console.log(this.model);
    }
    else {
      this.model[grade] = [name];
      //console.log(this.model);
    }
  }

  grade(grade) {
    //returns particular grade's students
    //in alphabetical order.
    if(grade in this.model){
      this.model[grade].sort();
      // protect your grade array reference
      return [...this.model[grade]];
    }else{
      return [];
    }
  }
}

