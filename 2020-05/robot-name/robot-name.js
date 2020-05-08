// This is only a SKELETON file for the 'Robot Name' exercise. It's been
// provided as a convenience to get your started writing code faster.

export class Robot {
  constructor(name){
    this.nameHistory = []
    this.name = this.randomName()
  }

  randomName() {
    let result = ''
    result += this.makeid(2)

    for (var i = 0; i < 3; i++) {
      result += Math.floor(Math.random() * 10).toString()
    }
    // console.log("before adding")
    // console.log(this.nameHistory)
    this.nameHistory.push(result)
    // console.log("after adding")
    // console.log(this.nameHistory)
    return result
  }

  makeid(length) {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
    }

  reset() {

    let newName = this.randomName()
    if (this.nameHistory.includes(newName)) {
      this.reset()
    }
    else {
      this.name = newName
    }
  }
}
// 
Robot.releaseNames = () => { };
