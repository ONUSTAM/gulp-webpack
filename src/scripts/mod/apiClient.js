export default class {

  constructor (name) {

    this.name = this.abc( name );
  }

  eat (food) {
    return `${this.name} eats ${food}. ,,, ${this.abc("abbbbc")}`;
    // return this.name + ' eats ' + food + this.abc( 'xyz' );
  }

  abc (xxx) {
    return '---[' + xxx + ']---';
  }

  homo () {
    console.log('homo');
  }
}
